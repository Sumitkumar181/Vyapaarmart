const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String, // URL or local path
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductCategory",
      default: null, // null → root category
    },
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // references the seller who created this category
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "suspended"],
      default: "active", // active by default
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductCategory", productCategorySchema);
