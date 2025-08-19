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
exports.SessaoVREntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const sala_vr_entity_1 = require("./sala-vr.entity");
const user_entity_1 = require("../../usuarios/entities/user.entity");
const medico_entity_1 = require("../../usuarios/entities/medico.entity");
let SessaoVREntity = class SessaoVREntity {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SessaoVREntity.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ length: 200 }),
    __metadata("design:type", String)
], SessaoVREntity.prototype, "titulo", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SessaoVREntity.prototype, "descricao", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { defaultValue: 'AGENDADA' }),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ['AGENDADA', 'EM_ANDAMENTO', 'PAUSADA', 'FINALIZADA', 'CANCELADA'],
        default: 'AGENDADA'
    }),
    __metadata("design:type", String)
], SessaoVREntity.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], SessaoVREntity.prototype, "dataInicio", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], SessaoVREntity.prototype, "dataFim", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], SessaoVREntity.prototype, "duracaoMinutos", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { defaultValue: false }),
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], SessaoVREntity.prototype, "ehPrivada", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { defaultValue: 1 }),
    (0, typeorm_1.Column)({ type: 'int', default: 1 }),
    __metadata("design:type", Number)
], SessaoVREntity.prototype, "maxParticipantes", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], SessaoVREntity.prototype, "configuracaoVR", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, length: 500 }),
    __metadata("design:type", String)
], SessaoVREntity.prototype, "cenarioVR", void 0);
__decorate([
    (0, graphql_1.Field)(() => sala_vr_entity_1.SalaVREntity),
    (0, typeorm_1.ManyToOne)(() => sala_vr_entity_1.SalaVREntity, (sala) => sala.sessoes),
    __metadata("design:type", sala_vr_entity_1.SalaVREntity)
], SessaoVREntity.prototype, "sala", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SessaoVREntity.prototype, "salaId", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.UserEntity),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity),
    __metadata("design:type", user_entity_1.UserEntity)
], SessaoVREntity.prototype, "criador", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SessaoVREntity.prototype, "criadorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => medico_entity_1.MedicoEntity, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => medico_entity_1.MedicoEntity, { nullable: true }),
    __metadata("design:type", medico_entity_1.MedicoEntity)
], SessaoVREntity.prototype, "orientador", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], SessaoVREntity.prototype, "orientadorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_entity_1.UserEntity]),
    (0, typeorm_1.ManyToMany)(() => user_entity_1.UserEntity),
    (0, typeorm_1.JoinTable)({
        name: 'participantes_sessao',
        joinColumn: { name: 'sessaoId', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'participanteId', referencedColumnName: 'id' }
    }),
    __metadata("design:type", Array)
], SessaoVREntity.prototype, "participantes", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], SessaoVREntity.prototype, "progressoSessao", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { defaultValue: 0 }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], SessaoVREntity.prototype, "avaliacaoMedia", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, typeorm_1.CreateDateColumn)({ name: 'dataCriacao' }),
    __metadata("design:type", Date)
], SessaoVREntity.prototype, "dataCriacao", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, typeorm_1.UpdateDateColumn)({ name: 'dataAtualizacao' }),
    __metadata("design:type", Date)
], SessaoVREntity.prototype, "dataAtualizacao", void 0);
SessaoVREntity = __decorate([
    (0, typeorm_1.Entity)('sessoes_vr'),
    (0, graphql_1.ObjectType)()
], SessaoVREntity);
exports.SessaoVREntity = SessaoVREntity;
//# sourceMappingURL=sessao-vr.entity.js.map