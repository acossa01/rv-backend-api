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
exports.VrIntegrationController = void 0;
const common_1 = require("@nestjs/common");
const conteudo_educacional_service_1 = require("../conteudo-educacional/conteudo-educacional.service");
const role_enum_1 = require("../../enums/role.enum");
let VrIntegrationController = class VrIntegrationController {
    constructor(conteudoService) {
        this.conteudoService = conteudoService;
    }
    async listarConteudos(role) {
        return this.conteudoService.obterConteudosPermitidos(role);
    }
};
__decorate([
    (0, common_1.Get)('contents'),
    __param(0, (0, common_1.Query)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VrIntegrationController.prototype, "listarConteudos", null);
VrIntegrationController = __decorate([
    (0, common_1.Controller)('vr'),
    __metadata("design:paramtypes", [conteudo_educacional_service_1.ConteudoEducacionalService])
], VrIntegrationController);
exports.VrIntegrationController = VrIntegrationController;
//# sourceMappingURL=vr-integration.controller.js.map