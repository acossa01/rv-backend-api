"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConteudoEducacionalModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const conteudo_educacional_entity_1 = require("./entities/conteudo-educacional.entity");
const conteudo_educacional_service_1 = require("./conteudo-educacional.service");
const conteudo_educacional_resolver_1 = require("./conteudo-educacional.resolver");
let ConteudoEducacionalModule = class ConteudoEducacionalModule {
};
ConteudoEducacionalModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([conteudo_educacional_entity_1.ConteudoEducacionalEntity])
        ],
        providers: [
            conteudo_educacional_service_1.ConteudoEducacionalService,
            conteudo_educacional_resolver_1.ConteudoEducacionalResolver,
        ],
        exports: [conteudo_educacional_service_1.ConteudoEducacionalService],
    })
], ConteudoEducacionalModule);
exports.ConteudoEducacionalModule = ConteudoEducacionalModule;
//# sourceMappingURL=conteudo-educacional.module.js.map