const express = require("express");
const router = express.Router();
const { verifyToken, authorizeRoles } = require("../middleware/authMiddleware");
const {
  getSupplierById,
  getSuppliers,
  updateSupplierStatus,
  createSupplier,
  updateSupplier,
} = require("../controller/supplierController");
const { Roles } = require("../utils/constants");

router
  .route("/")
  .post(
    verifyToken,
    authorizeRoles(Roles.SELLER, Roles.SUPERADMIN),
    createSupplier
  )
  .get(verifyToken, getSuppliers);

router
  .route("/:id")
  .put(
    verifyToken,
    authorizeRoles(Roles.SELLER, Roles.SUPERADMIN),
    updateSupplier
  )
  .patch(verifyToken, authorizeRoles(Roles.SUPERADMIN), updateSupplierStatus)
  .get(verifyToken, getSupplierById);

module.exports = router;
