const productModel = require("../model/productModel");
const supplierModel = require("../model/supplierModel");
const {
  ProductCategoryStatus,
  Roles,
  ProductStatus,
} = require("../utils/constants");
const {
  SUCCESS,
  BAD_REQUEST,
  NOT_FOUND,
  SERVER_ERROR,
  FORBIDDEN,
} = require("../utils/helpers");

// Create product (seller or super_admin)
exports.createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      images,
      stock,
      price,
      tags,
      categoryId,
      sku,
      brand,
      features,
      warranty,
      shipping,
      custom_fields,
    } = req.body;

    const product = new productModel({
      name,
      description,
      images,
      stock,
      price,
      tags,
      categoryId,
      sku,
      brand,
      features,
      warranty,
      shipping,
      custom_fields,
      status: ProductStatus.ACTIVE,
      sellerId: req.user.id,
    });

    await product.save();
    return SUCCESS(res, "Product created successfully", product);
  } catch (err) {
    return SERVER_ERROR(res, err.message);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const { role, id } = req.user;

    let match =
      role === Roles.USER
        ? { status: "active" } // user → only active products
        : role === Roles.SELLER
        ? { sellerId: id } // seller → only own products
        : {}; // admin → all products

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const totalRecords = await productModel.countDocuments(match);

    const products = await productModel
      .find(match)
      .populate("categoryId", "name")
      .populate("sellerId", "name email")
      .skip(skip)
      .limit(limit);

    return SUCCESS(res, "Products fetched", {
      totalRecords,
      page,
      limit,
      products,
    });
  } catch (err) {
    return SERVER_ERROR(res, err.message);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id).populate({
      path: "sellerId",
      select: "name email",
    });

    if (!product) return NOT_FOUND(res, "Product not found");

    const supplier = await supplierModel.findOne({
      user_id: product.sellerId._id,
    });

    SUCCESS(res, "Product fetched", {
      ...product.toObject(),
      supplierDetails: supplier || null,
    });
  } catch (err) {
    SERVER_ERROR(res, err.message);
  }
};

// seller can only update their own, super_admin can update all
exports.updateProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) return NOT_FOUND(res, "product not found");
    console.log(product);
    console.log(req.user.id);
    if (
      req.user.role === "seller" &&
      product.sellerId.toString() !== req.user.id.toString()
    ) {
      return FORBIDDEN(res, "You can only update your own categories");
    }

    Object.assign(product, req.body);
    await product.save();
    SUCCESS(res, "Product updated", product);
  } catch (err) {
    SERVER_ERROR(res, err.message);
  }
};

exports.addRating = async (req, res) => {
  try {
    const productId = req.params.id;
    const { rating, review } = req.body;

    // console.log("first",req.body)

    const product = await productModel.findById(productId);
    if (!product) return NOT_FOUND(res, "Product not found");

    const existingReview = product.reviews.find(
      (r) => r.userId.toString() === req.user.id
    );
    if (existingReview) {
      return FORBIDDEN(res, "You already reviewed this product");
    }

    // Add new review
    product.reviews.push({
      userId: req.user.id,
      rating,
      review,
    });

    // Update rating -----------------
    const totalReviews = product.ratings.totalReviews + 1;
    const newAverage =
      (product.ratings.average * product.ratings.totalReviews + rating) /
      totalReviews;

    product.ratings.average = newAverage;
    product.ratings.totalReviews = totalReviews;

    await product.save();

    SUCCESS(res, "Rating added successfully", {
      average: product.ratings.average,
      totalReviews: product.ratings.totalReviews,
      newReview: { rating, review },
    });
  } catch (err) {
    SERVER_ERROR(res, err.message);
  }
};

// seller can delete own, super_admin can delete all
exports.deleteProduct = async (req, res) => {
  try {
    const filter = { _id: req.params.id };

    if (req.user.role === "seller") {
      filter.sellerId = req.user.id;
    }

    await productModel.findOneAndUpdate(
      filter,
      { status: ProductStatus.SUSPENDED },
      { new: true }
    );

    SUCCESS(res, "Product deleted");
  } catch (err) {
    SERVER_ERROR(res, err.message);
  }
};

exports.restoreProduct = async (req, res) => {
  try {
    const filter = { _id: req.params.id };

    await productModel.findOneAndUpdate(
      filter,
      { status: ProductStatus.ACTIVE },
      { new: true }
    );

    SUCCESS(res, "Product restored");
  } catch (err) {
    SERVER_ERROR(res, err.message);
  }
};

exports.getCategoryWithProducts = async (req, res) => {
  try {
    const categoryId = req.params.id;

    const category = await ProductCategory.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(categoryId) } },
      {
        $lookup: {
          from: "products",
          localField: "_id",
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
