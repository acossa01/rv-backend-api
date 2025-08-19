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
exports.CriarSalaVRInput = exports.CriarSessaoVRInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const tipo_sala_enum_1 = require("../../../enums/tipo-sala.enum");
let CriarSessaoVRInput = class CriarSessaoVRInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], CriarSessaoVRInput.prototype, "salaId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CriarSessaoVRInput.prototype, "orientadorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], CriarSessaoVRInput.prototype, "maxParticipantes", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], CriarSessaoVRInput.prototype, "dataInicio", void 0);
CriarSessaoVRInput = __decorate([
    (0, graphql_1.InputType)()
], CriarSessaoVRInput);
exports.CriarSessaoVRInput = CriarSessaoVRInput;
let CriarSalaVRInput = class CriarSalaVRInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CriarSalaVRInput.prototype, "nome", void 0);
__decorate([
    (0, graphql_1.Field)(() => tipo_sala_enum_1.TipoSala),
    __metadata("design:type", String)
], CriarSalaVRInput.prototype, "tipoSala", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], CriarSalaVRInput.prototype, "capacidadeMaxima", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], CriarSalaVRInput.prototype, "rolesPermitidos", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CriarSalaVRInput.prototype, "descricao", void 0);
CriarSalaVRInput = __decorate([
    (0, graphql_1.InputType)()
], CriarSalaVRInput);
exports.CriarSalaVRInput = CriarSalaVRInput;
//# sourceMappingURL=salas-vr.input.js.map