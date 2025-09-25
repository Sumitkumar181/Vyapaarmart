const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rating: { type: Number, required: true, min: 1, max: 5 },
    review: { type: String }, // optional text review
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    sku: { type: String, unique: true }, // Stock Keeping Unit
    brand: { type: String },
    images: [{ type: String }], // URLs
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductCategory",
      required: true,
    },
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: { type: String, enum: ["active", "suspended"], default: "active" },
    tags: [{ type: String }],
    features: [{ type: String }], // key features
    warranty: {
      type: String,
    },
    shipping: {
      freeShipping: { type: Boolean, default: false },
      shippingCost: { type: Number, default: 0 },
      estimatedDeliveryDays: { type: Number },
    },
    ratings: {
      average: { type: Number, default: 0 },
      totalReviews: { type: Number, default: 0 },
    },
    reviews: [reviewSchema],
    custom_fields: { type: Object }, // flexible extra fields
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
