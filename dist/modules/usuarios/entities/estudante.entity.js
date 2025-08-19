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
exports.EstudanteEntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const role_enum_1 = require("../../../enums/role.enum");
const medico_entity_1 = require("./medico.entity");
let EstudanteEntity = class EstudanteEntity extends user_entity_1.UserEntity {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], EstudanteEntity.prototype, "matricula", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ length: 200 }),
    __metadata("design:type", String)
], EstudanteEntity.prototype, "instituicaoEnsino", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], EstudanteEntity.prototype, "curso", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], EstudanteEntity.prototype, "periodo", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { defaultValue: 2024 }),
    (0, typeorm_1.Column)({ type: 'int', default: 2024 }),
    __metadata("design:type", Number)
], EstudanteEntity.prototype, "anoIngresso", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], EstudanteEntity.prototype, "previsaoConclusao", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, typeorm_1.Column)({ type: 'simple-array', nullable: true }),
    __metadata("design:type", Array)
], EstudanteEntity.prototype, "areasInteresse", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { defaultValue: 0 }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], EstudanteEntity.prototype, "notaMedia", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { defaultValue: 0 }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], EstudanteEntity.prototype, "horasEstudoCompletadas", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { defaultValue: 0 }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], EstudanteEntity.prototype, "simulacoesRealizadas", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { defaultValue: 0 }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], EstudanteEntity.prototype, "casosClinicosEstudados", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { defaultValue: 'INICIANTE' }),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ['INICIANTE', 'INTERMEDIARIO', 'AVANCADO'],
        default: 'INICIANTE'
    }),
    __metadata("design:type", String)
], EstudanteEntity.prototype, "nivelVR", void 0);
__decorate([
    (0, graphql_1.Field)(() => medico_entity_1.MedicoEntity, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => medico_entity_1.MedicoEntity, (medico) => medico.estudantesOrientados, {
        nullable: true,
    }),
    __metadata("design:type", medico_entity_1.MedicoEntity)
], EstudanteEntity.prototype, "orientador", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], EstudanteEntity.prototype, "orientadorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], EstudanteEntity.prototype, "ultimaSimulacao", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], EstudanteEntity.prototype, "ultimoCasoClinico", void 0);
EstudanteEntity = __decorate([
    (0, typeorm_1.ChildEntity)(role_enum_1.Roles.ESTUDANTE),
    (0, graphql_1.ObjectType)()
], EstudanteEntity);
exports.EstudanteEntity = EstudanteEntity;
//# sourceMappingURL=estudante.entity.js.map