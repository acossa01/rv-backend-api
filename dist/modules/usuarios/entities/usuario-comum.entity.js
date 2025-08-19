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
exports.UsuarioComumEntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const role_enum_1 = require("../../../enums/role.enum");
let UsuarioComumEntity = class UsuarioComumEntity extends user_entity_1.UserEntity {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], UsuarioComumEntity.prototype, "historicoMedico", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, typeorm_1.Column)({ type: 'simple-array', nullable: true }),
    __metadata("design:type", Array)
], UsuarioComumEntity.prototype, "alergias", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, typeorm_1.Column)({ type: 'simple-array', nullable: true }),
    __metadata("design:type", Array)
], UsuarioComumEntity.prototype, "medicamentosUso", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, length: 100 }),
    __metadata("design:type", String)
], UsuarioComumEntity.prototype, "endereco", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, length: 50 }),
    __metadata("design:type", String)
], UsuarioComumEntity.prototype, "cidade", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, length: 2 }),
    __metadata("design:type", String)
], UsuarioComumEntity.prototype, "uf", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, length: 10 }),
    __metadata("design:type", String)
], UsuarioComumEntity.prototype, "cep", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { defaultValue: 0 }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], UsuarioComumEntity.prototype, "totalConteudosVisualizados", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], UsuarioComumEntity.prototype, "ultimoConteudoVisualizado", void 0);
UsuarioComumEntity = __decorate([
    (0, typeorm_1.ChildEntity)(role_enum_1.Roles.USUARIO_COMUM),
    (0, graphql_1.ObjectType)()
], UsuarioComumEntity);
exports.UsuarioComumEntity = UsuarioComumEntity;
//# sourceMappingURL=usuario-comum.entity.js.map