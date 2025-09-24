exports.SUCCESS = (res, message, data = {}, status = 200) => {
  return res.status(status).json({
    success: true,
    message,
    data,
  });
};

// client errors
exports.BAD_REQUEST = (
  res,
  message = "Bad request",
  data = {},
  status = 400
) => {
  return res.status(status).json({
    success: false,
    message,
    data,
  });
};

exports.UNAUTHORIZED = (
  res,
  message = "Unauthorized",
  data = {},
  status = 401
) => {
  return res.status(status).json({
    success: false,
    message,
    data,
  });
};

exports.FORBIDDEN = (res, message = "Forbidden", data = {}, status = 403) => {
  return res.status(status).json({
    success: false,
    message,
    data,
  });
};

exports.NOT_FOUND = (
  res,
  message = "Resource not found",
  data = {},
  status = 404
) => {
  return res.status(status).json({
    success: false,
    message,
    data,
  });
};

// conflict / duplicate
exports.CONFLICT = (res, message = "Conflict", data = {}, status = 409) => {
  return res.status(status).json({
    success: false,
    message,
    data,
  });
};

// server error
exports.SERVER_ERROR = (
  res,
  message = "Internal server error",
  data = {},
  status = 500
) => {
  return res.status(status).json({
    success: false,
    message,
    data,
  });
};
