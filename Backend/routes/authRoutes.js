const express = require("express");
const { body } = require("express-validator");
const {
  sellerSignup,
  userSignup,
  login,
} = require("../controller/authController");

const router = express.Router();

// Signup route
router.post(
  "/seller/signup",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
    body("number").notEmpty().withMessage("Phone number is required"),
    body("company_name").notEmpty().withMessage("Company name is required"),
  ],
  sellerSignup
);

router.post(
  "/user/signup",
  [
    body("name").notEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 4 }),
  ],
  userSignup
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  login
);

module.exports = router;
