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
exports.Token = exports.RedefinirSenhaInput = exports.RecuperacaoSenhaInput = exports.RefreshTokenInput = exports.RegistroInput = exports.LoginInput = exports.LoginResponse = exports.UsuarioResponse = void 0;
const graphql_1 = require("@nestjs/graphql");
const role_enum_1 = require("../../enums/role.enum");
const status_entities_1 = require("../../enums/status.entities");
let UsuarioResponse = class UsuarioResponse {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], UsuarioResponse.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], UsuarioResponse.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], UsuarioResponse.prototype, "nomeCompleto", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Roles),
    __metadata("design:type", String)
], UsuarioResponse.prototype, "tipoUsuario", void 0);
__decorate([
    (0, graphql_1.Field)(() => status_entities_1.Status),
    __metadata("design:type", String)
], UsuarioResponse.prototype, "status", void 0);
UsuarioResponse = __decorate([
    (0, graphql_1.ObjectType)()
], UsuarioResponse);
exports.UsuarioResponse = UsuarioResponse;
let LoginResponse = class LoginResponse {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], LoginResponse.prototype, "access_token", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], LoginResponse.prototype, "refresh_token", void 0);
__decorate([
    (0, graphql_1.Field)(() => UsuarioResponse),
    __metadata("design:type", UsuarioResponse)
], LoginResponse.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], LoginResponse.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], LoginResponse.prototype, "sub", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Roles),
    __metadata("design:type", String)
], LoginResponse.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], LoginResponse.prototype, "nomeCompleto", void 0);
LoginResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LoginResponse);
exports.LoginResponse = LoginResponse;
let LoginInput = class LoginInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], LoginInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], LoginInput.prototype, "senha", void 0);
LoginInput = __decorate([
    (0, graphql_1.InputType)()
], LoginInput);
exports.LoginInput = LoginInput;
let RegistroInput = class RegistroInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], RegistroInput.prototype, "nomeCompleto", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], RegistroInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], RegistroInput.prototype, "senha", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Roles),
    __metadata("design:type", String)
], RegistroInput.prototype, "tipoUsuario", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], RegistroInput.prototype, "telefone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], RegistroInput.prototype, "celular", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], RegistroInput.prototype, "crm", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], RegistroInput.prototype, "ufCrm", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], RegistroInput.prototype, "especialidades", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], RegistroInput.prototype, "instituicao", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], RegistroInput.prototype, "matricula", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], RegistroInput.prototype, "instituicaoEnsino", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], RegistroInput.prototype, "curso", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], RegistroInput.prototype, "periodo", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], RegistroInput.prototype, "endereco", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], RegistroInput.prototype, "cidade", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], RegistroInput.prototype, "uf", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], RegistroInput.prototype, "cep", void 0);
RegistroInput = __decorate([
    (0, graphql_1.InputType)()
], RegistroInput);
exports.RegistroInput = RegistroInput;
let RefreshTokenInput = class RefreshTokenInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], RefreshTokenInput.prototype, "refreshToken", void 0);
RefreshTokenInput = __decorate([
    (0, graphql_1.InputType)()
], RefreshTokenInput);
exports.RefreshTokenInput = RefreshTokenInput;
let RecuperacaoSenhaInput = class RecuperacaoSenhaInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], RecuperacaoSenhaInput.prototype, "email", void 0);
RecuperacaoSenhaInput = __decorate([
    (0, graphql_1.InputType)()
], RecuperacaoSenhaInput);
exports.RecuperacaoSenhaInput = RecuperacaoSenhaInput;
let RedefinirSenhaInput = class RedefinirSenhaInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], RedefinirSenhaInput.prototype, "token", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], RedefinirSenhaInput.prototype, "novaSenha", void 0);
RedefinirSenhaInput = __decorate([
    (0, graphql_1.InputType)()
], RedefinirSenhaInput);
exports.RedefinirSenhaInput = RedefinirSenhaInput;
let Token = class Token {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Token.prototype, "access_token", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Token.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Token.prototype, "sub", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Roles),
    __metadata("design:type", String)
], Token.prototype, "role", void 0);
Token = __decorate([
    (0, graphql_1.ObjectType)()
], Token);
exports.Token = Token;
//# sourceMappingURL=auth.type.js.map