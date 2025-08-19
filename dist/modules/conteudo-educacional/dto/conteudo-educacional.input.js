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
exports.AtualizarConteudoEducacionalInput = exports.ConteudoEducacionalInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const conteudo_educacional_enum_1 = require("../../../enums/conteudo-educacional.enum");
let ConteudoEducacionalInput = class ConteudoEducacionalInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ConteudoEducacionalInput.prototype, "titulo", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ConteudoEducacionalInput.prototype, "descricao", void 0);
__decorate([
    (0, graphql_1.Field)(() => conteudo_educacional_enum_1.TipoConteudo),
    __metadata("design:type", String)
], ConteudoEducacionalInput.prototype, "tipoConteudo", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ConteudoEducacionalInput.prototype, "conteudoDetalhado", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ConteudoEducacionalInput.prototype, "urlModeloVR", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ConteudoEducacionalInput.prototype, "urlTextura", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], ConteudoEducacionalInput.prototype, "tagsVR", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ConteudoEducacionalInput.prototype, "nivelDificuldade", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], ConteudoEducacionalInput.prototype, "duracaoEstimadaMinutos", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true, description: 'Campo JSON serializado em string (opcional)' }),
    __metadata("design:type", String)
], ConteudoEducacionalInput.prototype, "dadosEspecificos", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ConteudoEducacionalInput.prototype, "versao", void 0);
ConteudoEducacionalInput = __decorate([
    (0, graphql_1.InputType)()
], ConteudoEducacionalInput);
exports.ConteudoEducacionalInput = ConteudoEducacionalInput;
let AtualizarConteudoEducacionalInput = class AtualizarConteudoEducacionalInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], AtualizarConteudoEducacionalInput.prototype, "titulo", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], AtualizarConteudoEducacionalInput.prototype, "descricao", void 0);
__decorate([
    (0, graphql_1.Field)(() => conteudo_educacional_enum_1.TipoConteudo, { nullable: true }),
    __metadata("design:type", String)
], AtualizarConteudoEducacionalInput.prototype, "tipoConteudo", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], AtualizarConteudoEducacionalInput.prototype, "conteudoDetalhado", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], AtualizarConteudoEducacionalInput.prototype, "urlModeloVR", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], AtualizarConteudoEducacionalInput.prototype, "urlTextura", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], AtualizarConteudoEducacionalInput.prototype, "tagsVR", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], AtualizarConteudoEducacionalInput.prototype, "nivelDificuldade", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], AtualizarConteudoEducacionalInput.prototype, "duracaoEstimadaMinutos", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true, description: 'Campo JSON serializado em string (opcional)' }),
    __metadata("design:type", String)
], AtualizarConteudoEducacionalInput.prototype, "dadosEspecificos", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], AtualizarConteudoEducacionalInput.prototype, "versao", void 0);
AtualizarConteudoEducacionalInput = __decorate([
    (0, graphql_1.InputType)()
], AtualizarConteudoEducacionalInput);
exports.AtualizarConteudoEducacionalInput = AtualizarConteudoEducacionalInput;
//# sourceMappingURL=conteudo-educacional.input.js.map