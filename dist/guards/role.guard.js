"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleGuards = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const graphql_1 = require("@nestjs/graphql");
const role_enum_1 = require("../enums/role.enum");
let RoleGuards = class RoleGuards {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        var _a;
        const roles = this.reflector.get('roles', context.getHandler()) ||
            this.reflector.get('roles', context.getClass());
        if (!(roles === null || roles === void 0 ? void 0 : roles.length))
            return true;
        const ctx = graphql_1.GqlExecutionContext.create(context);
        let user = (_a = ctx.getContext().req) === null || _a === void 0 ? void 0 : _a.user;
        if (!user)
            user = context.switchToHttp().getRequest().user;
        return roles.includes(user.role);
    }
};
RoleGuards = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], RoleGuards);
exports.RoleGuards = RoleGuards;
//# sourceMappingURL=role.guard.js.map