const supplierModel = require("../model/supplierModel");
const {
  SUCCESS,
  NOT_FOUND,
  FORBIDDEN,
  SERVER_ERROR,
} = require("../utils/helpers");
const { SupplierStatus } = require("../utils/constants");

exports.createSupplier = async (req, res) => {
  try {
    const userId = req.user.id;

    // Check if supplier already exists
    const existingSupplier = await supplierModel.findOne({ user_id: userId });
    if (existingSupplier) {
      return BAD_REQUEST(res, "Supplier profile already exists");
    }

    const supplier = new supplierModel({ ...req.body, user_id: userId });
    await supplier.save();

    return SUCCESS(res, "Supplier profile created", supplier);
  } catch (err) {
    SERVER_ERROR(res, err.message);
  }
};

exports.updateSupplier = async (req, res) => {
  try {
    const userId = req.user.id;

    const supplier = await supplierModel.findOne({ user_id: userId });
    if (!supplier) {
      return NOT_FOUND(res, "Supplier profile not found");
    }

    // Only admin or owner can update
    if (req.user.role !== "admin" && supplier.user_id.toString() !== userId) {
      return FORBIDDEN(res, "You can only update your own supplier profile");
    }

    Object.assign(supplier, req.body);
    await supplier.save();

    return SUCCESS(res, "Supplier profile updated", supplier);
  } catch (err) {
    SERVER_ERROR(res, err.message);
  }
};

exports.getSupplierById = async (req, res) => {
  try {
    const supplier = await supplierModel
      .findById(req.params.id)
      .populate("userId", "name email role");
    if (!supplier) return NOT_FOUND(res, "Supplier not found");
    SUCCESS(res, "Supplier fetched", supplier);
  } catch (err) {
    SERVER_ERROR(res, err.message);
  }
};

exports.getSuppliers = async (req, res) => {
  try {
    const filter = req.user.role === "user" ? { status: "active" } : {};
    const suppliers = await supplierModel
      .find(filter)
      .populate("userId", "name email role");
    SUCCESS(res, "Suppliers fetched", suppliers);
  } catch (err) {
    SERVER_ERROR(res, err.message);
  }
};

exports.updateSupplierStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!Object.values(SupplierStatus).includes(status)) {
      return BAD_REQUEST(res, "Invalid status value");
    }

    const supplier = await supplierModel.findById(req.params.id);
    if (!supplier) return NOT_FOUND(res, "Supplier not found");

    supplier.status = status;
    await supplier.save();

    SUCCESS(res, `Supplier status updated to ${status}`, supplier);
  } catch (err) {
    SERVER_ERROR(res, err.message);
  }
};
