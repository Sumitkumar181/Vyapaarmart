const { FORBIDDEN } = require("../utils/helpers");
const RolePermission = require("../model/rolePermissionModel");
const { PermissionActions, Permission } = require("../utils/constants");

exports.checkPermission = (resource, action) => {
  return async (req, res, next) => {
    try {
      const roleId = req.user.roleId;

      // get all permissions for this role
      const rolePermissions = await RolePermission.find({ roleId });

      const hasPermission = rolePermissions.some(
        (rp) =>
          rp.permissionId.toString() === resource && // match resource
          rp.actions.includes(action)
      );

      if (!hasPermission) {
        return FORBIDDEN(
          res,
          "You do not have permission to perform this action"
        );
      }

      next();
    } catch (err) {
      return FORBIDDEN(res, "Permission check failed");
    }
  };
};
