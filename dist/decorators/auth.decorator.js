"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("../guards/jwt.guard");
const role_guard_1 = require("../guards/role.guard");
const Auth = (...roles) => {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)('roles', roles), (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, role_guard_1.RoleGuards));
};
exports.Auth = Auth;
