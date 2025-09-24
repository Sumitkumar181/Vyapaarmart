const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const userModel = require("../model/userModel");
const {
  SUCCESS,
  BAD_REQUEST,
  UNAUTHORIZED,
  SERVER_ERROR,
} = require("../utils/helpers");

exports.userSignup = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return BAD_REQUEST(res, "Validation failed", { errors: errors.array() });
    }

    const { name, email, password, number } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return BAD_REQUEST(res, "Email already registered");
    }

    const hashPass = await bcrypt.hash(password, 10);

    const user = new userModel({
      name,
      email,
      password: hashPass,
      number,
      role: "user",
    });

    await user.save();

    return SUCCESS(res, "Signup successful", {
      userId: user._id,
      role: user.role,
    });
  } catch (error) {
    return SERVER_ERROR(res, error.message);
  }
};

exports.sellerSignup = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return BAD_REQUEST(res, "Validation failed", { errors: errors.array() });
    }

    const { name, email, password, number, company_name, pincode } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return BAD_REQUEST(res, "Email already registered");
    }

    const hashPass = await bcrypt.hash(password, 10);

    const user = new userModel({
      name,
      email,
      password: hashPass,
      number,
      company_name,
      pincode,
      role: "seller",
    });

    await user.save();

    return SUCCESS(res, "Seller signup successful", { userId: user._id });
  } catch (error) {
    return SERVER_ERROR(res, error.message);
  }
};

exports.login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return BAD_REQUEST(res, "Validation failed", { errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return UNAUTHORIZED(res, "Invalid email or password");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return UNAUTHORIZED(res, "Invalid email or password");
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return SUCCESS(res, "Login successful", {
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    return SERVER_ERROR(res, error.message);
  }
};
