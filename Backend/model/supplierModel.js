const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String, required: true },
    display_name: String,
    slug: { type: String, unique: true },
    business_type: String,
    year_established: Number,
    ownership_type: String,
    employees_range: String,
    annual_turnover_range: String,

    primary_contact: {
      name: String,
      email: String,
      phone: String,
    },

    addresses: [
      {
        type: { type: String },
        street: String,
        city: String,
        state: String,
        country: String,
        postal_code: String,
      },
    ],
    tags: [String],

    short_description: String,
    long_description: String,

    logo_url: String,
    banner_url: String,
    gallery: [String],

    documents: [
      {
        type: { type: String },
        url: String,
      },
    ],

    gst_number: String,
    pan_number: String,
    iec_number: String,

    is_gst_verified: { type: Boolean, default: false },
    is_verified: { type: Boolean, default: false },

    verification_status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    verification_notes: String,

    bank_accounts: [
      {
        account_number: String,
        ifsc: String,
        bank_name: String,
        branch: String,
      },
    ],

    preferred_payment: String,
    incoterms: [String],
    shipment_modes: [String],
    lead_time_days: Number,

    status: {
      type: String,
      enum: ["active", "suspended"],
      default: "active",
    },

    subscription_plan_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubscriptionPlan",
    },

    views_count: { type: Number, default: 0 },
    leads_count: { type: Number, default: 0 },
    products_count: { type: Number, default: 0 },
    data_consent: { type: Boolean, default: false },

    custom_fields: { type: Object },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Supplier", supplierSchema);
