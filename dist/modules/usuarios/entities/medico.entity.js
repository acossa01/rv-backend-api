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
exports.MedicoEntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const role_enum_1 = require("../../../enums/role.enum");
const estudante_entity_1 = require("./estudante.entity");
let MedicoEntity = class MedicoEntity extends user_entity_1.UserEntity {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ length: 20, unique: true }),
    __metadata("design:type", String)
], MedicoEntity.prototype, "crm", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, length: 2 }),
    __metadata("design:type", String)
], MedicoEntity.prototype, "ufCrm", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    (0, typeorm_1.Column)({ type: 'simple-array' }),
    __metadata("design:type", Array)
], MedicoEntity.prototype, "especialidades", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { defaultValue: 0 }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], MedicoEntity.prototype, "anosExperiencia", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, length: 200 }),
    __metadata("design:type", String)
], MedicoEntity.prototype, "instituicao", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], MedicoEntity.prototype, "biografia", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, length: 100 }),
    __metadata("design:type", String)
], MedicoEntity.prototype, "enderecoConsultorio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, length: 50 }),
    __metadata("design:type", String)
], MedicoEntity.prototype, "cidadeConsultorio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, length: 2 }),
    __metadata("design:type", String)
], MedicoEntity.prototype, "ufConsultorio", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { defaultValue: false }),
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], MedicoEntity.prototype, "podeCriarConteudo", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { defaultValue: false }),
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], MedicoEntity.prototype, "ehProfessor", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { defaultValue: 0 }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], MedicoEntity.prototype, "totalConteudosCriados", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { defaultValue: 0 }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], MedicoEntity.prototype, "totalEstudantesOrientados", void 0);
__decorate([
    (0, graphql_1.Field)(() => [estudante_entity_1.EstudanteEntity], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => estudante_entity_1.EstudanteEntity, (estudante) => estudante.orientador, {
        nullable: true,
    }),
    __metadata("design:type", Array)
], MedicoEntity.prototype, "estudantesOrientados", void 0);
MedicoEntity = __decorate([
    (0, typeorm_1.ChildEntity)(role_enum_1.Roles.MEDICO),
    (0, graphql_1.ObjectType)()
], MedicoEntity);
exports.MedicoEntity = MedicoEntity;
//# sourceMappingURL=medico.entity.js.map