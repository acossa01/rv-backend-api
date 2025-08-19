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
exports.ConteudoEducacionalEntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const conteudo_educacional_enum_1 = require("../../../enums/conteudo-educacional.enum");
const status_entities_1 = require("../../../enums/status.entities");
const typeorm_1 = require("typeorm");
const medico_entity_1 = require("../../usuarios/entities/medico.entity");
let ConteudoEducacionalEntity = class ConteudoEducacionalEntity {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ConteudoEducacionalEntity.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ length: 200 }),
    __metadata("design:type", String)
], ConteudoEducacionalEntity.prototype, "titulo", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], ConteudoEducacionalEntity.prototype, "descricao", void 0);
__decorate([
    (0, graphql_1.Field)(() => conteudo_educacional_enum_1.TipoConteudo),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: conteudo_educacional_enum_1.TipoConteudo,
        nullable: false,
    }),
    __metadata("design:type", String)
], ConteudoEducacionalEntity.prototype, "tipoConteudo", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ConteudoEducacionalEntity.prototype, "conteudoDetalhado", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, length: 500 }),
    __metadata("design:type", String)
], ConteudoEducacionalEntity.prototype, "urlModeloVR", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, length: 500 }),
    __metadata("design:type", String)
], ConteudoEducacionalEntity.prototype, "urlTextura", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, typeorm_1.Column)({ type: 'simple-array', nullable: true }),
    __metadata("design:type", Array)
], ConteudoEducacionalEntity.prototype, "tagsVR", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { defaultValue: 'BASICO' }),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ['BASICO', 'INTERMEDIARIO', 'AVANCADO', 'ESPECIALISTA'],
        default: 'BASICO'
    }),
    __metadata("design:type", String)
], ConteudoEducacionalEntity.prototype, "nivelDificuldade", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { defaultValue: 0 }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ConteudoEducacionalEntity.prototype, "duracaoEstimadaMinutos", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], ConteudoEducacionalEntity.prototype, "dadosEspecificos", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { defaultValue: '1.0.0' }),
    (0, typeorm_1.Column)({ length: 20, default: '1.0.0' }),
    __metadata("design:type", String)
], ConteudoEducacionalEntity.prototype, "versao", void 0);
__decorate([
    (0, graphql_1.Field)(() => status_entities_1.Status),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: status_entities_1.Status,
        default: status_entities_1.Status.ACTIVE,
        nullable: false,
    }),
    __metadata("design:type", String)
], ConteudoEducacionalEntity.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { defaultValue: 0 }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ConteudoEducacionalEntity.prototype, "totalVisualizacoes", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { defaultValue: 0 }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], ConteudoEducacionalEntity.prototype, "avaliacaoMedia", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { defaultValue: 0 }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ConteudoEducacionalEntity.prototype, "totalAvaliacoes", void 0);
__decorate([
    (0, graphql_1.Field)(() => medico_entity_1.MedicoEntity, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => medico_entity_1.MedicoEntity, { nullable: true }),
    __metadata("design:type", medico_entity_1.MedicoEntity)
], ConteudoEducacionalEntity.prototype, "autorMedico", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConteudoEducacionalEntity.prototype, "autorMedicoId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, typeorm_1.CreateDateColumn)({ name: 'dataCriacao' }),
    __metadata("design:type", Date)
], ConteudoEducacionalEntity.prototype, "dataCriacao", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, typeorm_1.UpdateDateColumn)({ name: 'dataAtualizacao' }),
    __metadata("design:type", Date)
], ConteudoEducacionalEntity.prototype, "dataAtualizacao", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], ConteudoEducacionalEntity.prototype, "dataPublicacao", void 0);
ConteudoEducacionalEntity = __decorate([
    (0, typeorm_1.Entity)('conteudo_educacional'),
    (0, graphql_1.ObjectType)()
], ConteudoEducacionalEntity);
exports.ConteudoEducacionalEntity = ConteudoEducacionalEntity;
//# sourceMappingURL=conteudo-educacional.entity.js.map