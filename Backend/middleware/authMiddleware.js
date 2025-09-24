const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const { UNAUTHORIZED, FORBIDDEN } = require("../utils/helpers");

exports.verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) return UNAUTHORIZED(res, "Access denied. No token provided.");

    const token = authHeader.split(" ")[1];
    if (!token) return UNAUTHORIZED(res, "Invalid token format.");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    if (!user) return UNAUTHORIZED(res, "User not found.");

    req.user = {
      id: user._id,
      role: user.role,
      email: user.email
    };

    next();
  } catch (err) {
    return UNAUTHORIZED(res, "Invalid or expired token.");
  }
};

exports.authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) return UNAUTHORIZED(res, "Unauthorized request");

    if (!allowedRoles.includes(req.user.role)) {
      return FORBIDDEN(res, "You do not have permission to access this resource.");
    }

    next();
  };
};
