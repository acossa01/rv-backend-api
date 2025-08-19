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
exports.SalaVREntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const tipo_sala_enum_1 = require("../../../enums/tipo-sala.enum");
const typeorm_1 = require("typeorm");
const sessao_vr_entity_1 = require("./sessao-vr.entity");
let SalaVREntity = class SalaVREntity {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SalaVREntity.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], SalaVREntity.prototype, "nome", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SalaVREntity.prototype, "descricao", void 0);
__decorate([
    (0, graphql_1.Field)(() => tipo_sala_enum_1.TipoSala),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: tipo_sala_enum_1.TipoSala,
        nullable: false,
    }),
    __metadata("design:type", String)
], SalaVREntity.prototype, "tipoSala", void 0);
__decorate([
    (0, graphql_1.Field)(() => tipo_sala_enum_1.StatusSala),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: tipo_sala_enum_1.StatusSala,
        default: tipo_sala_enum_1.StatusSala.DISPONIVEL,
    }),
    __metadata("design:type", String)
], SalaVREntity.prototype, "statusSala", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    (0, typeorm_1.Column)({ type: 'int', default: 1 }),
    __metadata("design:type", Number)
], SalaVREntity.prototype, "capacidadeMaxima", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { defaultValue: true }),
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], SalaVREntity.prototype, "permiteMultiusuarios", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { defaultValue: false }),
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], SalaVREntity.prototype, "requerOrientador", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, length: 500 }),
    __metadata("design:type", String)
], SalaVREntity.prototype, "ambienteVR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, typeorm_1.Column)({ type: 'simple-array', nullable: true }),
    __metadata("design:type", Array)
], SalaVREntity.prototype, "equipamentosDisponiveis", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, typeorm_1.Column)({ type: 'simple-array', nullable: true }),
    __metadata("design:type", Array)
], SalaVREntity.prototype, "ferramentasVR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    (0, typeorm_1.Column)({ type: 'simple-array' }),
    __metadata("design:type", Array)
], SalaVREntity.prototype, "rolesPermitidos", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { defaultValue: false }),
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], SalaVREntity.prototype, "permiteInstrucaoIndividual", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { defaultValue: true }),
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], SalaVREntity.prototype, "funcionaIndependente", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { defaultValue: 0 }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], SalaVREntity.prototype, "totalSessoes", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { defaultValue: 0 }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], SalaVREntity.prototype, "totalHorasUso", void 0);
__decorate([
    (0, graphql_1.Field)(() => [sessao_vr_entity_1.SessaoVREntity], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => sessao_vr_entity_1.SessaoVREntity, (sessao) => sessao.sala, { nullable: true }),
    __metadata("design:type", Array)
], SalaVREntity.prototype, "sessoes", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, typeorm_1.CreateDateColumn)({ name: 'dataCriacao' }),
    __metadata("design:type", Date)
], SalaVREntity.prototype, "dataCriacao", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, typeorm_1.UpdateDateColumn)({ name: 'dataAtualizacao' }),
    __metadata("design:type", Date)
], SalaVREntity.prototype, "dataAtualizacao", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], SalaVREntity.prototype, "ultimaManutencao", void 0);
SalaVREntity = __decorate([
    (0, typeorm_1.Entity)('salas_vr'),
    (0, graphql_1.ObjectType)()
], SalaVREntity);
exports.SalaVREntity = SalaVREntity;
//# sourceMappingURL=sala-vr.entity.js.map