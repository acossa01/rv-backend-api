"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalasVRModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sala_vr_entity_1 = require("./entities/sala-vr.entity");
const sessao_vr_entity_1 = require("./entities/sessao-vr.entity");
const salas_vr_service_1 = require("./salas-vr.service");
const salas_vr_resolver_1 = require("./salas-vr.resolver");
let SalasVRModule = class SalasVRModule {
};
SalasVRModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([sala_vr_entity_1.SalaVREntity, sessao_vr_entity_1.SessaoVREntity])
        ],
        providers: [
            salas_vr_service_1.SalasVRService,
            salas_vr_resolver_1.SalasVRResolver,
            salas_vr_resolver_1.SessoesVRResolver,
        ],
        exports: [salas_vr_service_1.SalasVRService],
    })
], SalasVRModule);
exports.SalasVRModule = SalasVRModule;
//# sourceMappingURL=salas-vr.module.js.map