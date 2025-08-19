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
exports.SalasVRService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sala_vr_entity_1 = require("./entities/sala-vr.entity");
const sessao_vr_entity_1 = require("./entities/sessao-vr.entity");
const tipo_sala_enum_1 = require("../../enums/tipo-sala.enum");
const role_enum_1 = require("../../enums/role.enum");
let SalasVRService = class SalasVRService {
    constructor(salaRepository, sessaoRepository) {
        this.salaRepository = salaRepository;
        this.sessaoRepository = sessaoRepository;
    }
    async obterSalasDisponiveis(userRole) {
        return this.salaRepository.find({
            where: {
                statusSala: tipo_sala_enum_1.StatusSala.DISPONIVEL,
            },
            order: { nome: 'ASC' },
        });
    }
    async obterSalasPorTipo(tipo, userRole) {
        this.verificarPermissaoAcessoSala(tipo, userRole);
        return this.salaRepository.find({
            where: {
                tipoSala: tipo,
                statusSala: tipo_sala_enum_1.StatusSala.DISPONIVEL,
            },
            order: { nome: 'ASC' },
        });
    }
    async criarSessao(dadosSessao, criadorId, userRole) {
        const sala = await this.salaRepository.findOne({
            where: { id: dadosSessao.salaId },
        });
        if (!sala) {
            throw new common_1.NotFoundException('Sala não encontrada');
        }
        this.verificarPermissaoAcessoSala(sala.tipoSala, userRole);
        if (sala.requerOrientador && !dadosSessao.orientadorId) {
            if (userRole !== role_enum_1.Roles.MEDICO) {
                throw new common_1.ForbiddenException('Esta sala requer um médico orientador');
            }
            dadosSessao.orientadorId = criadorId;
        }
        const novaSessao = this.sessaoRepository.create(Object.assign(Object.assign({}, dadosSessao), { criadorId, dataInicio: dadosSessao.dataInicio || new Date(), maxParticipantes: Math.min(dadosSessao.maxParticipantes || 1, sala.capacidadeMaxima) }));
        const sessaoSalva = await this.sessaoRepository.save(novaSessao);
        await this.salaRepository.increment({ id: sala.id }, 'totalSessoes', 1);
        return sessaoSalva;
    }
    async participarSessao(sessaoId, participanteId, userRole) {
        const sessao = await this.sessaoRepository.findOne({
            where: { id: sessaoId },
            relations: ['sala', 'participantes'],
        });
        if (!sessao) {
            throw new common_1.NotFoundException('Sessão não encontrada');
        }
        this.verificarPermissaoAcessoSala(sessao.sala.tipoSala, userRole);
        if (sessao.participantes.length >= sessao.maxParticipantes) {
            throw new common_1.ForbiddenException('Sessão já está lotada');
        }
        const jaParticipa = sessao.participantes.some(p => p.id === participanteId);
        if (jaParticipa) {
            throw new common_1.ForbiddenException('Você já está participando desta sessão');
        }
        return sessao;
    }
    async obterSessoesAtivas(userRole) {
        return this.sessaoRepository.find({
            where: {
                status: 'EM_ANDAMENTO',
            },
            relations: ['sala', 'criador', 'orientador'],
            order: { dataInicio: 'DESC' },
        });
    }
    async finalizarSessao(sessaoId, usuarioId, userRole) {
        const sessao = await this.sessaoRepository.findOne({
            where: { id: sessaoId },
            relations: ['sala'],
        });
        if (!sessao) {
            throw new common_1.NotFoundException('Sessão não encontrada');
        }
        if (sessao.criadorId !== usuarioId && sessao.orientadorId !== usuarioId) {
            throw new common_1.ForbiddenException('Apenas o criador ou orientador podem finalizar a sessão');
        }
        sessao.status = 'FINALIZADA';
        sessao.dataFim = new Date();
        if (sessao.dataInicio && sessao.dataFim) {
            sessao.duracaoMinutos = Math.floor((sessao.dataFim.getTime() - sessao.dataInicio.getTime()) / (1000 * 60));
        }
        const sessaoFinalizada = await this.sessaoRepository.save(sessao);
        if (sessao.duracaoMinutos) {
            const horasUso = Math.floor(sessao.duracaoMinutos / 60);
            if (horasUso > 0) {
                await this.salaRepository.increment({ id: sessao.salaId }, 'totalHorasUso', horasUso);
            }
        }
        return sessaoFinalizada;
    }
    async criarSala(dadosSala, userRole) {
        if (userRole !== role_enum_1.Roles.MEDICO) {
            throw new common_1.ForbiddenException('Apenas médicos podem criar salas');
        }
        const rolesPermitidos = this.obterRolesPadraoParaTipoSala(dadosSala.tipoSala);
        const novaSala = this.salaRepository.create(Object.assign(Object.assign({}, dadosSala), { rolesPermitidos, statusSala: tipo_sala_enum_1.StatusSala.DISPONIVEL }));
        return this.salaRepository.save(novaSala);
    }
    obterRolesPadraoParaTipoSala(tipoSala) {
        switch (tipoSala) {
            case tipo_sala_enum_1.TipoSala.COMUM:
                return [role_enum_1.Roles.USUARIO_COMUM, role_enum_1.Roles.ESTUDANTE, role_enum_1.Roles.MEDICO];
            case tipo_sala_enum_1.TipoSala.TECNICA:
                return [role_enum_1.Roles.ESTUDANTE, role_enum_1.Roles.MEDICO];
            case tipo_sala_enum_1.TipoSala.CIRURGIA:
                return [role_enum_1.Roles.MEDICO];
            default:
                return [];
        }
    }
    verificarPermissaoAcessoSala(tipoSala, userRole) {
        const rolesPermitidos = this.obterRolesPadraoParaTipoSala(tipoSala);
        if (!rolesPermitidos.includes(userRole)) {
            throw new common_1.ForbiddenException(`Usuário com role ${userRole} não tem permissão para acessar salas do tipo ${tipoSala}`);
        }
    }
};
SalasVRService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sala_vr_entity_1.SalaVREntity)),
    __param(1, (0, typeorm_1.InjectRepository)(sessao_vr_entity_1.SessaoVREntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SalasVRService);
exports.SalasVRService = SalasVRService;
//# sourceMappingURL=salas-vr.service.js.map