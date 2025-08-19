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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const assets_decorator_1 = require("./decorators/assets.decorator");
const role_enum_1 = require("./enums/role.enum");
let AppController = class AppController {
    assets(req, res) {
        if (req.user)
            return res.sendFile(req.path, { root: './', index: false }, (err) => {
                if (err) {
                    const error = new common_1.NotFoundException(err.message);
                    res.status(error.getStatus()).send(error.getResponse());
                }
            });
        throw new common_1.UnauthorizedException();
    }
};
__decorate([
    (0, assets_decorator_1.Assets)(role_enum_1.Roles.MEDICO),
    (0, common_1.Get)('/*'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "assets", null);
AppController = __decorate([
    (0, common_1.Controller)('assets')
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map