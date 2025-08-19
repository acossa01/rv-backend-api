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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const config_1 = __importDefault(require("config"));
const role_enum_1 = require("../../../enums/role.enum");
const status_entities_1 = require("../../../enums/status.entities");
const typeorm_1 = require("typeorm");
const typeorm_encrypted_1 = require("typeorm-encrypted");
let UserEntity = class UserEntity {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ length: 200 }),
    __metadata("design:type", String)
], UserEntity.prototype, "nomeCompleto", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ unique: true, length: 100 }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, graphql_1.HideField)(),
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
        transformer: new typeorm_encrypted_1.EncryptionTransformer(config_1.default.get('encrypt')),
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "senha", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Roles),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: role_enum_1.Roles,
        nullable: false,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "tipoUsuario", void 0);
__decorate([
    (0, graphql_1.Field)(() => status_entities_1.Status),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: status_entities_1.Status,
        default: status_entities_1.Status.ACTIVE,
        nullable: false,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, typeorm_1.CreateDateColumn)({ name: 'dataCriacao' }),
    __metadata("design:type", Date)
], UserEntity.prototype, "dataCriacao", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, typeorm_1.UpdateDateColumn)({ name: 'dataAtualizacao' }),
    __metadata("design:type", Date)
], UserEntity.prototype, "dataAtualizacao", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, length: 20 }),
    __metadata("design:type", String)
], UserEntity.prototype, "telefone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, length: 20 }),
    __metadata("design:type", String)
], UserEntity.prototype, "celular", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], UserEntity.prototype, "dataUltimoAcesso", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)('users'),
    (0, typeorm_1.TableInheritance)({ column: { type: 'enum', enum: role_enum_1.Roles, name: 'userType' } }),
    (0, graphql_1.ObjectType)()
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map