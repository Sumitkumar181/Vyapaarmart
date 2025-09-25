const mongoose = require("mongoose");
const productCategoryModel = require("../model/productCategoryModel");
const { ProductCategoryStatus, Roles } = require("../utils/constants");
const {
  SUCCESS,
  BAD_REQUEST,
  NOT_FOUND,
  SERVER_ERROR,
} = require("../utils/helpers");

//  Create Category (seller or super_admin)
exports.createCategory = async (req, res) => {
  try {
    const { name, description, image, parentId } = req.body;

    const category = new productCategoryModel({
      name,
      description,
      image,
      parentId: parentId || null,
      status: ProductCategoryStatus.ACTIVE,
      sellerId: req.user.id,
    });

    await category.save();
    SUCCESS(res, "Category created successfully", category);
  } catch (err) {
    SERVER_ERROR(res, err.message);
  }
};

exports.getCategories = async (req, res) => {
  try {
    const { role, id } = req.user;

    let match =
      role === Roles.USER
        ? { status: "active", parentId: null } // user → only active + top-level
        : role === Roles.SELLER
        ? { sellerId: id, parentId: null } // seller → only their top-level categories
        : { parentId: null }; // admin → only top-level categories

    const categories = await productCategoryModel.aggregate([
      { $match: match },
      {
        $lookup: {
          from: "productcategories", // 👈 collection name (plural, lowercase)
          localField: "_id",
          foreignField: "parentId",
          as: "children",
        },
      },
    ]);

    SUCCESS(res, "Top-level categories fetched", categories);
  } catch (err) {
    SERVER_ERROR(res, err.message);
  }
};

// Get Category by ID
exports.getCategoryById = async (req, res) => {
  try {
    const category = await productCategoryModel
      .findById(req.params.id)
      .populate("parentId", "name")
      .populate("sellerId", "name email");
    if (!category) return NOT_FOUND(res, "Category not found");
    SUCCESS(res, "Category fetched", category);
  } catch (err) {
    SERVER_ERROR(res, err.message);
  }
};

// seller can only update their own, super_admin can update all
exports.updateCategory = async (req, res) => {
  try {
    const category = await productCategoryModel.findById(req.params.id);
    if (!category) return NOT_FOUND(res, "Category not found");

    if (
      req.user.role === "seller" &&
      category.sellerId.toString() !== req.user.id
    ) {
      return FORBIDDEN(res, "You can only update your own categories");
    }

    Object.assign(category, req.body);
    await category.save();
    SUCCESS(res, "Category updated", category);
  } catch (err) {
    SERVER_ERROR(res, err.message);
  }
};

exports.getCategoryWithProducts = async (req, res) => {
  try {
    const categoryId = req.params.id;

    const category = await productCategoryModel.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(categoryId) } },
      {
        $lookup: {
          from: "products", // collection name
          localField: "_id", // match category id
          foreignField: "categoryId",
          as: "products",
        },
      },
      {
        $lookup: {
          from: "productcategories",
          localField: "parentId",
          foreignField: "_id",
          as: "parent",
        },
      },
      { $unwind: { path: "$parent", preserveNullAndEmptyArrays: true } },
    ]);

    if (!category.length) return NOT_FOUND(res, "Category not found");

    return SUCCESS(res, "Category with products fetched", category[0]);
  } catch (err) {
    return SERVER_ERROR(res, err.message);
  }
};

// seller can delete own, super_admin can delete all
exports.deleteCategory = async (req, res) => {
  try {
    const filter = { _id: req.params.id };

    if (req.user.role === Roles.SELLER) {
      filter.sellerId = req.user.id;
    }

    await productCategoryModel.findOneAndUpdate(
      filter,
      { status: ProductCategoryStatus.SUSPENDED },
      { new: true }
    );

    SUCCESS(res, "Category deleted");
  } catch (err) {
    SERVER_ERROR(res, err.message);
  }
};

exports.restoreProductCategory = async (req, res) => {
  try {
    const filter = { _id: req.params.id };

    await productCategoryModel.findOneAndUpdate(
      filter,
      { status: ProductCategoryStatus.ACTIVE },
      { new: true }
    );

    SUCCESS(res, "Product restored");
  } catch (err) {
    SERVER_ERROR(res, err.message);
  }
};
