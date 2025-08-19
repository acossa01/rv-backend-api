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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const usuarios_service_1 = require("./usuarios.service");
const user_entity_1 = require("./entities/user.entity");
const usuario_comum_entity_1 = require("./entities/usuario-comum.entity");
const medico_entity_1 = require("./entities/medico.entity");
const estudante_entity_1 = require("./entities/estudante.entity");
const auth_decorator_1 = require("../../decorators/auth.decorator");
const currentUser_decorator_1 = require("../../decorators/currentUser.decorator");
const role_enum_1 = require("../../enums/role.enum");
const jwt_guard_1 = require("../../guards/jwt.guard");
let UsuariosResolver = class UsuariosResolver {
    constructor(usuariosService) {
        this.usuariosService = usuariosService;
    }
    async obterMeuPerfilCompleto(user) {
        return this.usuariosService.obterPerfilCompleto(user.userID);
    }
    async buscarUsuarioPorId(id) {
        return this.usuariosService.obterPerfilCompleto(id);
    }
    async listarUsuariosPorTipo(tipo) {
        return this.usuariosService.listarUsuariosPorTipo(tipo);
    }
    async listarMedicosOrientadores() {
        return this.usuariosService.buscarMedicosOrientadores();
    }
    async listarUsuariosComuns() {
        return this.usuariosService.listarUsuariosPorTipo(role_enum_1.Roles.USUARIO_COMUM);
    }
    async listarEstudantes() {
        return this.usuariosService.listarUsuariosPorTipo(role_enum_1.Roles.ESTUDANTE);
    }
    async listarMedicos() {
        return this.usuariosService.listarUsuariosPorTipo(role_enum_1.Roles.MEDICO);
    }
};
__decorate([
    (0, graphql_1.Query)(() => user_entity_1.UserEntity, {
        name: 'meuPerfilCompleto',
        description: 'Obtém o perfil completo do usuário logado com dados específicos do tipo'
    }),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuariosResolver.prototype, "obterMeuPerfilCompleto", null);
__decorate([
    (0, graphql_1.Query)(() => user_entity_1.UserEntity, {
        name: 'usuarioPorId',
        description: 'Buscar usuário por ID (apenas médicos)'
    }),
    (0, auth_decorator_1.Auth)(role_enum_1.Roles.MEDICO),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuariosResolver.prototype, "buscarUsuarioPorId", null);
__decorate([
    (0, graphql_1.Query)(() => [user_entity_1.UserEntity], {
        name: 'usuariosPorTipo',
        description: 'Listar usuários filtrados por tipo (apenas médicos)'
    }),
    (0, auth_decorator_1.Auth)(role_enum_1.Roles.MEDICO),
    __param(0, (0, graphql_1.Args)('tipo', { type: () => role_enum_1.Roles })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuariosResolver.prototype, "listarUsuariosPorTipo", null);
__decorate([
    (0, graphql_1.Query)(() => [medico_entity_1.MedicoEntity], {
        name: 'medicosOrientadores',
        description: 'Lista médicos disponíveis para orientação de estudantes'
    }),
    (0, auth_decorator_1.Auth)(role_enum_1.Roles.ESTUDANTE, role_enum_1.Roles.MEDICO),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuariosResolver.prototype, "listarMedicosOrientadores", null);
__decorate([
    (0, graphql_1.Query)(() => [usuario_comum_entity_1.UsuarioComumEntity], {
        name: 'usuariosComuns',
        description: 'Lista todos os usuários comuns (apenas médicos)'
    }),
    (0, auth_decorator_1.Auth)(role_enum_1.Roles.MEDICO),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuariosResolver.prototype, "listarUsuariosComuns", null);
__decorate([
    (0, graphql_1.Query)(() => [estudante_entity_1.EstudanteEntity], {
        name: 'estudantes',
        description: 'Lista todos os estudantes (apenas médicos)'
    }),
    (0, auth_decorator_1.Auth)(role_enum_1.Roles.MEDICO),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuariosResolver.prototype, "listarEstudantes", null);
__decorate([
    (0, graphql_1.Query)(() => [medico_entity_1.MedicoEntity], {
        name: 'medicos',
        description: 'Lista todos os médicos (apenas médicos)'
    }),
    (0, auth_decorator_1.Auth)(role_enum_1.Roles.MEDICO),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuariosResolver.prototype, "listarMedicos", null);
UsuariosResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_entity_1.UserEntity),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosService])
], UsuariosResolver);
exports.UsuariosResolver = UsuariosResolver;
//# sourceMappingURL=usuarios.resolver.js.map