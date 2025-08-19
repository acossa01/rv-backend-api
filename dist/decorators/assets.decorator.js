"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assets = void 0;
const role_enum_1 = require("../enums/role.enum");
const passport_1 = require("@nestjs/passport");
const role_guard_1 = require("../guards/role.guard");
const common_1 = require("@nestjs/common");
const Assets = (...roles) => {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)('roles', roles), (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), role_guard_1.RoleGuards));
};
exports.Assets = Assets;
//# sourceMappingURL=assets.decorator.js.map