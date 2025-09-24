const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const {
  createProduct,
  updateCategory,
  deleteCategory,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  restoreProduct,
  addRating,
} = require("../controller/productController");
const { verifyToken, authorizeRoles } = require("../middleware/authMiddleware");
const { Roles } = require("../utils/constants");
const {
  getCategoryWithProducts,
} = require("../controller/productCategoryController");

router
  .route("/")
  .post(
    verifyToken,
    authorizeRoles(Roles.SELLER, Roles.SUPERADMIN),
    [
      body("name").notEmpty().withMessage("Name is required"),
      body("description").notEmpty().withMessage("Description is required"),
      body("images").notEmpty().withMessage("Image is required"),
      body("stock").notEmpty().withMessage("Stock quantity is required"),
      body("price").notEmpty().withMessage("Price is required"),
      body("categoryId").notEmpty().withMessage("Category id is required"),
    ],
    createProduct
  )
  .get(verifyToken, getAllProducts);

// Get category by ID
router
  .route("/:id")
  .get(verifyToken, getProductById)
  .put(
    verifyToken,
    authorizeRoles(Roles.SELLER, Roles.SUPERADMIN),
    updateProduct
  )
  .patch(verifyToken, addRating);

router.route("/category/:id").get(getCategoryWithProducts);

router
  .route("/delete/:id")
  .patch(
    verifyToken,
    authorizeRoles(Roles.SELLER, Roles.SUPERADMIN),
    deleteProduct
  );
router
  .route("/restore/:id")
  .patch(verifyToken, authorizeRoles(Roles.SUPERADMIN), restoreProduct);

module.exports = router;
