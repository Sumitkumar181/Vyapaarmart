const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
  restoreProductCategory,
} = require("../controller/productCategoryController");
const { verifyToken, authorizeRoles } = require("../middleware/authMiddleware");
const { Roles } = require("../utils/constants");

router
  .route("/")
  .post(
    verifyToken,
    authorizeRoles(Roles.SELLER, Roles.SUPERADMIN),
    [
      body("name").notEmpty().withMessage("Name is required"),
      body("description").notEmpty().withMessage("Description is required"),
      body("image").notEmpty().withMessage("Image is required"),
    ],
    createCategory
  )
  .get(verifyToken, getCategories);

// Get category by ID and update
router
  .route("/:id")
  .get(verifyToken, getCategoryById)
  .put(
    verifyToken,
    authorizeRoles(Roles.SELLER, Roles.SUPERADMIN),
    updateCategory
  );

router
  .route("/delete/:id")
  .patch(
    verifyToken,
    authorizeRoles(Roles.SELLER, Roles.SUPERADMIN),
    deleteCategory
  );
router
  .route("/restore/:id")
  .patch(verifyToken, authorizeRoles(Roles.SUPERADMIN), restoreProductCategory);

module.exports = router;
