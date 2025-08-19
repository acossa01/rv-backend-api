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
exports.SessoesVRResolver = exports.SalasVRResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const salas_vr_service_1 = require("./salas-vr.service");
const sala_vr_entity_1 = require("./entities/sala-vr.entity");
const sessao_vr_entity_1 = require("./entities/sessao-vr.entity");
const tipo_sala_enum_1 = require("../../enums/tipo-sala.enum");
const auth_decorator_1 = require("../../decorators/auth.decorator");
const currentUser_decorator_1 = require("../../decorators/currentUser.decorator");
const role_enum_1 = require("../../enums/role.enum");
const jwt_guard_1 = require("../../guards/jwt.guard");
const salas_vr_input_1 = require("./dto/salas-vr.input");
let SalasVRResolver = class SalasVRResolver {
    constructor(salasVRService) {
        this.salasVRService = salasVRService;
    }
    async obterSalasDisponiveis(user) {
        return this.salasVRService.obterSalasDisponiveis(user.role);
    }
    async obterSalasPorTipo(tipo, user) {
        return this.salasVRService.obterSalasPorTipo(tipo, user.role);
    }
    async obterSalasComuns(user) {
        return this.salasVRService.obterSalasPorTipo(tipo_sala_enum_1.TipoSala.COMUM, user.role);
    }
    async obterSalasTecnicas(user) {
        return this.salasVRService.obterSalasPorTipo(tipo_sala_enum_1.TipoSala.TECNICA, user.role);
    }
    async obterSalasCirurgia(user) {
        return this.salasVRService.obterSalasPorTipo(tipo_sala_enum_1.TipoSala.CIRURGIA, user.role);
    }
    async obterSessoesAtivas(user) {
        return this.salasVRService.obterSessoesAtivas(user.role);
    }
    async criarSessao(dados, user) {
        return this.salasVRService.criarSessao(dados, user.userID, user.role);
    }
    async participarSessao(sessaoId, user) {
        return this.salasVRService.participarSessao(sessaoId, user.userID, user.role);
    }
    async finalizarSessao(sessaoId, user) {
        return this.salasVRService.finalizarSessao(sessaoId, user.userID, user.role);
    }
    async criarSala(dados, user) {
        return this.salasVRService.criarSala(dados, user.role);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [sala_vr_entity_1.SalaVREntity], {
        name: 'salasVRDisponiveis',
        description: 'Lista todas as salas VR disponíveis para o usuário logado'
    }),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SalasVRResolver.prototype, "obterSalasDisponiveis", null);
__decorate([
    (0, graphql_1.Query)(() => [sala_vr_entity_1.SalaVREntity], {
        name: 'salasPorTipo',
        description: 'Lista salas VR filtradas por tipo específico'
    }),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, graphql_1.Args)('tipo', { type: () => tipo_sala_enum_1.TipoSala })),
    __param(1, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SalasVRResolver.prototype, "obterSalasPorTipo", null);
__decorate([
    (0, graphql_1.Query)(() => [sala_vr_entity_1.SalaVREntity], {
        name: 'salasComuns',
        description: 'Lista salas comuns acessíveis a todos os usuários'
    }),
    (0, auth_decorator_1.Auth)(role_enum_1.Roles.USUARIO_COMUM, role_enum_1.Roles.ESTUDANTE, role_enum_1.Roles.MEDICO),
    __param(0, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SalasVRResolver.prototype, "obterSalasComuns", null);
__decorate([
    (0, graphql_1.Query)(() => [sala_vr_entity_1.SalaVREntity], {
        name: 'salasTecnicas',
        description: 'Lista salas técnicas (acesso para estudantes e médicos)'
    }),
    (0, auth_decorator_1.Auth)(role_enum_1.Roles.ESTUDANTE, role_enum_1.Roles.MEDICO),
    __param(0, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SalasVRResolver.prototype, "obterSalasTecnicas", null);
__decorate([
    (0, graphql_1.Query)(() => [sala_vr_entity_1.SalaVREntity], {
        name: 'salasCirurgia',
        description: 'Lista salas de cirurgia (acesso apenas para médicos)'
    }),
    (0, auth_decorator_1.Auth)(role_enum_1.Roles.MEDICO),
    __param(0, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SalasVRResolver.prototype, "obterSalasCirurgia", null);
__decorate([
    (0, graphql_1.Query)(() => [sessao_vr_entity_1.SessaoVREntity], {
        name: 'sessoesVRAtivas',
        description: 'Lista sessões de VR que estão em andamento'
    }),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SalasVRResolver.prototype, "obterSessoesAtivas", null);
__decorate([
    (0, graphql_1.Mutation)(() => sessao_vr_entity_1.SessaoVREntity, {
        name: 'criarSessaoVR',
        description: 'Cria uma nova sessão de realidade virtual'
    }),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, graphql_1.Args)('dados')),
    __param(1, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [salas_vr_input_1.CriarSessaoVRInput, Object]),
    __metadata("design:returntype", Promise)
], SalasVRResolver.prototype, "criarSessao", null);
__decorate([
    (0, graphql_1.Mutation)(() => sessao_vr_entity_1.SessaoVREntity, {
        name: 'participarSessaoVR',
        description: 'Participar de uma sessão VR existente'
    }),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, graphql_1.Args)('sessaoId', { type: () => graphql_1.ID })),
    __param(1, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SalasVRResolver.prototype, "participarSessao", null);
__decorate([
    (0, graphql_1.Mutation)(() => sessao_vr_entity_1.SessaoVREntity, {
        name: 'finalizarSessaoVR',
        description: 'Finaliza uma sessão VR (apenas criador ou orientador)'
    }),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, graphql_1.Args)('sessaoId', { type: () => graphql_1.ID })),
    __param(1, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SalasVRResolver.prototype, "finalizarSessao", null);
__decorate([
    (0, graphql_1.Mutation)(() => sala_vr_entity_1.SalaVREntity, {
        name: 'criarSalaVR',
        description: 'Cria uma nova sala de realidade virtual (apenas médicos)'
    }),
    (0, auth_decorator_1.Auth)(role_enum_1.Roles.MEDICO),
    __param(0, (0, graphql_1.Args)('dados')),
    __param(1, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [salas_vr_input_1.CriarSalaVRInput, Object]),
    __metadata("design:returntype", Promise)
], SalasVRResolver.prototype, "criarSala", null);
SalasVRResolver = __decorate([
    (0, graphql_1.Resolver)(() => sala_vr_entity_1.SalaVREntity),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __metadata("design:paramtypes", [salas_vr_service_1.SalasVRService])
], SalasVRResolver);
exports.SalasVRResolver = SalasVRResolver;
let SessoesVRResolver = class SessoesVRResolver {
};
SessoesVRResolver = __decorate([
    (0, graphql_1.Resolver)(() => sessao_vr_entity_1.SessaoVREntity)
], SessoesVRResolver);
exports.SessoesVRResolver = SessoesVRResolver;
//# sourceMappingURL=salas-vr.resolver.js.map