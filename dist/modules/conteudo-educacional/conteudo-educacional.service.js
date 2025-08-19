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
exports.ConteudoEducacionalService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const conteudo_educacional_entity_1 = require("./entities/conteudo-educacional.entity");
const conteudo_educacional_enum_1 = require("../../enums/conteudo-educacional.enum");
const role_enum_1 = require("../../enums/role.enum");
const status_entities_1 = require("../../enums/status.entities");
let ConteudoEducacionalService = class ConteudoEducacionalService {
    constructor(conteudoRepository) {
        this.conteudoRepository = conteudoRepository;
    }
    async obterConteudosPermitidos(userRole) {
        const tiposPermitidos = this.obterTiposPermitidosPorRole(userRole);
        return this.conteudoRepository.find({
            where: {
                tipoConteudo: tiposPermitidos.length === 1 ? tiposPermitidos[0] : undefined,
                status: status_entities_1.Status.ACTIVE,
            },
            relations: ['autorMedico'],
            order: { dataCriacao: 'DESC' },
        });
    }
    async obterConteudoPorId(id, userRole) {
        const conteudo = await this.conteudoRepository.findOne({
            where: { id, status: status_entities_1.Status.ACTIVE },
            relations: ['autorMedico'],
        });
        if (!conteudo) {
            throw new common_1.NotFoundException('Conteúdo não encontrado');
        }
        this.verificarPermissaoAcesso(conteudo.tipoConteudo, userRole);
        await this.incrementarVisualizacao(id);
        return conteudo;
    }
    async buscarPorTipo(tipo, userRole) {
        this.verificarPermissaoAcesso(tipo, userRole);
        return this.conteudoRepository.find({
            where: {
                tipoConteudo: tipo,
                status: status_entities_1.Status.ACTIVE,
            },
            relations: ['autorMedico'],
            order: { avaliacaoMedia: 'DESC', totalVisualizacoes: 'DESC' },
        });
    }
    async buscarPorNivel(nivel, userRole) {
        const tiposPermitidos = this.obterTiposPermitidosPorRole(userRole);
        return this.conteudoRepository.find({
            where: {
                nivelDificuldade: nivel,
                status: status_entities_1.Status.ACTIVE,
                tipoConteudo: tiposPermitidos.length === 1 ? tiposPermitidos[0] : undefined,
            },
            relations: ['autorMedico'],
            order: { avaliacaoMedia: 'DESC' },
        });
    }
    async criarConteudo(dadosConteudo, autorId, userRole) {
        if (userRole !== role_enum_1.Roles.MEDICO) {
            throw new common_1.ForbiddenException('Apenas médicos podem criar conteúdo');
        }
        const novoConteudo = this.conteudoRepository.create(Object.assign(Object.assign({}, dadosConteudo), { autorMedicoId: autorId, dataPublicacao: new Date() }));
        return this.conteudoRepository.save(novoConteudo);
    }
    async atualizarConteudo(id, dadosAtualizacao, userId, userRole) {
        if (userRole !== role_enum_1.Roles.MEDICO) {
            throw new common_1.ForbiddenException('Apenas médicos podem atualizar conteúdo');
        }
        const conteudo = await this.conteudoRepository.findOne({
            where: { id },
            relations: ['autorMedico'],
        });
        if (!conteudo) {
            throw new common_1.NotFoundException('Conteúdo não encontrado');
        }
        if (conteudo.autorMedicoId !== userId) {
            throw new common_1.ForbiddenException('Você só pode atualizar seus próprios conteúdos');
        }
        Object.assign(conteudo, dadosAtualizacao);
        return this.conteudoRepository.save(conteudo);
    }
    async avaliarConteudo(id, nota, userRole) {
        const conteudo = await this.obterConteudoPorId(id, userRole);
        const totalAvaliacoes = conteudo.totalAvaliacoes + 1;
        const novaMedia = ((conteudo.avaliacaoMedia * conteudo.totalAvaliacoes) + nota) / totalAvaliacoes;
        conteudo.avaliacaoMedia = Number(novaMedia.toFixed(2));
        conteudo.totalAvaliacoes = totalAvaliacoes;
        return this.conteudoRepository.save(conteudo);
    }
    async incrementarVisualizacao(id) {
        await this.conteudoRepository.increment({ id }, 'totalVisualizacoes', 1);
    }
    obterTiposPermitidosPorRole(role) {
        switch (role) {
            case role_enum_1.Roles.USUARIO_COMUM:
                return [conteudo_educacional_enum_1.TipoConteudo.GERAL];
            case role_enum_1.Roles.ESTUDANTE:
                return [conteudo_educacional_enum_1.TipoConteudo.GERAL, conteudo_educacional_enum_1.TipoConteudo.APRENDIZADO_CLINICO];
            case role_enum_1.Roles.MEDICO:
                return [conteudo_educacional_enum_1.TipoConteudo.GERAL, conteudo_educacional_enum_1.TipoConteudo.APRENDIZADO_CLINICO, conteudo_educacional_enum_1.TipoConteudo.CIRURGIA];
            default:
                return [];
        }
    }
    verificarPermissaoAcesso(tipoConteudo, userRole) {
        const tiposPermitidos = this.obterTiposPermitidosPorRole(userRole);
        if (!tiposPermitidos.includes(tipoConteudo)) {
            throw new common_1.ForbiddenException(`Usuário com role ${userRole} não tem permissão para acessar conteúdo do tipo ${tipoConteudo}`);
        }
    }
};
ConteudoEducacionalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(conteudo_educacional_entity_1.ConteudoEducacionalEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ConteudoEducacionalService);
exports.ConteudoEducacionalService = ConteudoEducacionalService;
//# sourceMappingURL=conteudo-educacional.service.js.map