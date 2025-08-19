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
exports.ConteudoEducacionalResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const conteudo_educacional_service_1 = require("./conteudo-educacional.service");
const conteudo_educacional_entity_1 = require("./entities/conteudo-educacional.entity");
const conteudo_educacional_enum_1 = require("../../enums/conteudo-educacional.enum");
const auth_decorator_1 = require("../../decorators/auth.decorator");
const currentUser_decorator_1 = require("../../decorators/currentUser.decorator");
const role_enum_1 = require("../../enums/role.enum");
const jwt_guard_1 = require("../../guards/jwt.guard");
const conteudo_educacional_input_1 = require("./dto/conteudo-educacional.input");
let ConteudoEducacionalResolver = class ConteudoEducacionalResolver {
    constructor(conteudoService) {
        this.conteudoService = conteudoService;
    }
    async obterConteudosPermitidos(user) {
        return this.conteudoService.obterConteudosPermitidos(user.role);
    }
    async obterConteudoPorId(id, user) {
        return this.conteudoService.obterConteudoPorId(id, user.role);
    }
    async buscarPorTipo(tipo, user) {
        return this.conteudoService.buscarPorTipo(tipo, user.role);
    }
    async buscarPorNivel(nivel, user) {
        return this.conteudoService.buscarPorNivel(nivel, user.role);
    }
    async obterConteudosGerais(user) {
        return this.conteudoService.buscarPorTipo(conteudo_educacional_enum_1.TipoConteudo.GERAL, user.role);
    }
    async obterConteudosAprendizadoClinico(user) {
        return this.conteudoService.buscarPorTipo(conteudo_educacional_enum_1.TipoConteudo.APRENDIZADO_CLINICO, user.role);
    }
    async obterConteudosCirurgia(user) {
        return this.conteudoService.buscarPorTipo(conteudo_educacional_enum_1.TipoConteudo.CIRURGIA, user.role);
    }
    async criarConteudo(dados, user) {
        const payload = Object.assign({}, dados);
        if (typeof payload.dadosEspecificos === 'string') {
            try {
                payload.dadosEspecificos = JSON.parse(payload.dadosEspecificos);
            }
            catch (_a) { }
        }
        return this.conteudoService.criarConteudo(payload, user.userID, user.role);
    }
    async atualizarConteudo(id, dados, user) {
        const payload = Object.assign({}, dados);
        if (typeof payload.dadosEspecificos === 'string') {
            try {
                payload.dadosEspecificos = JSON.parse(payload.dadosEspecificos);
            }
            catch (_a) { }
        }
        return this.conteudoService.atualizarConteudo(id, payload, user.userID, user.role);
    }
    async avaliarConteudo(id, nota, user) {
        if (nota < 1 || nota > 5) {
            throw new Error('A nota deve estar entre 1 e 5');
        }
        return this.conteudoService.avaliarConteudo(id, nota, user.role);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [conteudo_educacional_entity_1.ConteudoEducacionalEntity], {
        name: 'meuConteudoEducacional',
        description: 'Lista todos os conteúdos educacionais disponíveis para o usuário logado'
    }),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConteudoEducacionalResolver.prototype, "obterConteudosPermitidos", null);
__decorate([
    (0, graphql_1.Query)(() => conteudo_educacional_entity_1.ConteudoEducacionalEntity, {
        name: 'conteudoEducacionalPorId',
        description: 'Obtém um conteúdo específico por ID, verificando permissões'
    }),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __param(1, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ConteudoEducacionalResolver.prototype, "obterConteudoPorId", null);
__decorate([
    (0, graphql_1.Query)(() => [conteudo_educacional_entity_1.ConteudoEducacionalEntity], {
        name: 'conteudosPorTipo',
        description: 'Lista conteúdos filtrados por tipo específico'
    }),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, graphql_1.Args)('tipo', { type: () => conteudo_educacional_enum_1.TipoConteudo })),
    __param(1, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ConteudoEducacionalResolver.prototype, "buscarPorTipo", null);
__decorate([
    (0, graphql_1.Query)(() => [conteudo_educacional_entity_1.ConteudoEducacionalEntity], {
        name: 'conteudosPorNivel',
        description: 'Lista conteúdos filtrados por nível de dificuldade'
    }),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, graphql_1.Args)('nivel', { type: () => String })),
    __param(1, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ConteudoEducacionalResolver.prototype, "buscarPorNivel", null);
__decorate([
    (0, graphql_1.Query)(() => [conteudo_educacional_entity_1.ConteudoEducacionalEntity], {
        name: 'conteudosGeraisParaUsuarios',
        description: 'Lista específica de conteúdos gerais para usuários comuns'
    }),
    (0, auth_decorator_1.Auth)(role_enum_1.Roles.USUARIO_COMUM, role_enum_1.Roles.ESTUDANTE, role_enum_1.Roles.MEDICO),
    __param(0, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConteudoEducacionalResolver.prototype, "obterConteudosGerais", null);
__decorate([
    (0, graphql_1.Query)(() => [conteudo_educacional_entity_1.ConteudoEducacionalEntity], {
        name: 'conteudosAprendizadoClinico',
        description: 'Lista conteúdos de aprendizado clínico (estudantes e médicos apenas)'
    }),
    (0, auth_decorator_1.Auth)(role_enum_1.Roles.ESTUDANTE, role_enum_1.Roles.MEDICO),
    __param(0, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConteudoEducacionalResolver.prototype, "obterConteudosAprendizadoClinico", null);
__decorate([
    (0, graphql_1.Query)(() => [conteudo_educacional_entity_1.ConteudoEducacionalEntity], {
        name: 'conteudosCirurgia',
        description: 'Lista conteúdos de cirurgia (apenas médicos)'
    }),
    (0, auth_decorator_1.Auth)(role_enum_1.Roles.MEDICO),
    __param(0, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConteudoEducacionalResolver.prototype, "obterConteudosCirurgia", null);
__decorate([
    (0, graphql_1.Mutation)(() => conteudo_educacional_entity_1.ConteudoEducacionalEntity, {
        name: 'criarConteudoEducacional',
        description: 'Cria um novo conteúdo educacional (apenas médicos)'
    }),
    (0, auth_decorator_1.Auth)(role_enum_1.Roles.MEDICO),
    __param(0, (0, graphql_1.Args)('dados')),
    __param(1, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [conteudo_educacional_input_1.ConteudoEducacionalInput, Object]),
    __metadata("design:returntype", Promise)
], ConteudoEducacionalResolver.prototype, "criarConteudo", null);
__decorate([
    (0, graphql_1.Mutation)(() => conteudo_educacional_entity_1.ConteudoEducacionalEntity, {
        name: 'atualizarConteudoEducacional',
        description: 'Atualiza conteúdo existente (apenas o autor médico)'
    }),
    (0, auth_decorator_1.Auth)(role_enum_1.Roles.MEDICO),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __param(1, (0, graphql_1.Args)('dados')),
    __param(2, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, conteudo_educacional_input_1.AtualizarConteudoEducacionalInput, Object]),
    __metadata("design:returntype", Promise)
], ConteudoEducacionalResolver.prototype, "atualizarConteudo", null);
__decorate([
    (0, graphql_1.Mutation)(() => conteudo_educacional_entity_1.ConteudoEducacionalEntity, {
        name: 'avaliarConteudo',
        description: 'Avaliar um conteúdo educacional (nota de 1 a 5)'
    }),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __param(1, (0, graphql_1.Args)('nota', { type: () => Number })),
    __param(2, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Object]),
    __metadata("design:returntype", Promise)
], ConteudoEducacionalResolver.prototype, "avaliarConteudo", null);
ConteudoEducacionalResolver = __decorate([
    (0, graphql_1.Resolver)(() => conteudo_educacional_entity_1.ConteudoEducacionalEntity),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __metadata("design:paramtypes", [conteudo_educacional_service_1.ConteudoEducacionalService])
], ConteudoEducacionalResolver);
exports.ConteudoEducacionalResolver = ConteudoEducacionalResolver;
//# sourceMappingURL=conteudo-educacional.resolver.js.map