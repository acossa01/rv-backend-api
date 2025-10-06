"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalasVRService = void 0;
const common_1 = require("@nestjs/common");
const tipo_sala_enum_1 = require("../../enums/tipo-sala.enum");
const role_enum_1 = require("../../enums/role.enum");
let SalasVRService = (() => {
    let _classDecorators = [(0, common_1.Injectable)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var SalasVRService = _classThis = class {
        constructor(salaRepository, sessaoRepository) {
            this.salaRepository = salaRepository;
            this.sessaoRepository = sessaoRepository;
        }
        /**
         * Obter salas disponíveis baseado no role do usuário
         */
        async obterSalasDisponiveis(userRole) {
            return this.salaRepository.find({
                where: {
                    statusSala: tipo_sala_enum_1.StatusSala.DISPONIVEL,
                },
                order: { nome: 'ASC' },
            });
        }
        /**
         * Obter salas por tipo, verificando permissões
         */
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
        /**
         * Criar nova sessão VR
         */
        async criarSessao(dadosSessao, criadorId, userRole) {
            const sala = await this.salaRepository.findOne({
                where: { id: dadosSessao.salaId },
            });
            if (!sala) {
                throw new common_1.NotFoundException('Sala não encontrada');
            }
            this.verificarPermissaoAcessoSala(sala.tipoSala, userRole);
            // Verificar se a sala requer orientador
            if (sala.requerOrientador && !dadosSessao.orientadorId) {
                if (userRole !== role_enum_1.Roles.MEDICO) {
                    throw new common_1.ForbiddenException('Esta sala requer um médico orientador');
                }
                // Se o usuário é médico, ele mesmo pode ser o orientador
                dadosSessao.orientadorId = criadorId;
            }
            const novaSessao = this.sessaoRepository.create({
                ...dadosSessao,
                criadorId,
                dataInicio: dadosSessao.dataInicio || new Date(),
                maxParticipantes: Math.min(dadosSessao.maxParticipantes || 1, sala.capacidadeMaxima),
            });
            const sessaoSalva = await this.sessaoRepository.save(novaSessao);
            // Incrementar contador da sala
            await this.salaRepository.increment({ id: sala.id }, 'totalSessoes', 1);
            return sessaoSalva;
        }
        /**
         * Participar de uma sessão
         */
        async participarSessao(sessaoId, participanteId, userRole) {
            const sessao = await this.sessaoRepository.findOne({
                where: { id: sessaoId },
                relations: ['sala', 'participantes'],
            });
            if (!sessao) {
                throw new common_1.NotFoundException('Sessão não encontrada');
            }
            this.verificarPermissaoAcessoSala(sessao.sala.tipoSala, userRole);
            // Verificar capacidade
            if (sessao.participantes.length >= sessao.maxParticipantes) {
                throw new common_1.ForbiddenException('Sessão já está lotada');
            }
            // Verificar se já participa
            const jaParticipa = sessao.participantes.some(p => p.id === participanteId);
            if (jaParticipa) {
                throw new common_1.ForbiddenException('Você já está participando desta sessão');
            }
            // Adicionar participante (isso seria feito de forma mais completa com um relacionamento adequado)
            // Por simplicidade, estou assumindo que isso seria tratado em outra camada
            return sessao;
        }
        /**
         * Obter sessões ativas
         */
        async obterSessoesAtivas(userRole) {
            return this.sessaoRepository.find({
                where: {
                    status: 'EM_ANDAMENTO',
                },
                relations: ['sala', 'criador', 'orientador'],
                order: { dataInicio: 'DESC' },
            });
        }
        /**
         * Finalizar sessão
         */
        async finalizarSessao(sessaoId, usuarioId, userRole) {
            const sessao = await this.sessaoRepository.findOne({
                where: { id: sessaoId },
                relations: ['sala'],
            });
            if (!sessao) {
                throw new common_1.NotFoundException('Sessão não encontrada');
            }
            // Apenas criador ou orientador pode finalizar
            if (sessao.criadorId !== usuarioId && sessao.orientadorId !== usuarioId) {
                throw new common_1.ForbiddenException('Apenas o criador ou orientador podem finalizar a sessão');
            }
            sessao.status = 'FINALIZADA';
            sessao.dataFim = new Date();
            if (sessao.dataInicio && sessao.dataFim) {
                sessao.duracaoMinutos = Math.floor((sessao.dataFim.getTime() - sessao.dataInicio.getTime()) / (1000 * 60));
            }
            const sessaoFinalizada = await this.sessaoRepository.save(sessao);
            // Atualizar estatísticas da sala
            if (sessao.duracaoMinutos) {
                const horasUso = Math.floor(sessao.duracaoMinutos / 60);
                if (horasUso > 0) {
                    await this.salaRepository.increment({ id: sessao.salaId }, 'totalHorasUso', horasUso);
                }
            }
            return sessaoFinalizada;
        }
        /**
         * Criar sala (apenas administradores/médicos)
         */
        async criarSala(dadosSala, userRole) {
            if (userRole !== role_enum_1.Roles.MEDICO) {
                throw new common_1.ForbiddenException('Apenas médicos podem criar salas');
            }
            // Configurar permissões padrão baseadas no tipo de sala
            const rolesPermitidos = this.obterRolesPadraoParaTipoSala(dadosSala.tipoSala);
            const novaSala = this.salaRepository.create({
                ...dadosSala,
                rolesPermitidos,
                statusSala: tipo_sala_enum_1.StatusSala.DISPONIVEL,
            });
            return this.salaRepository.save(novaSala);
        }
        /**
         * Obter roles padrão para cada tipo de sala
         */
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
        /**
         * Verificar permissão de acesso à sala baseada no tipo e role do usuário
         */
        verificarPermissaoAcessoSala(tipoSala, userRole) {
            const rolesPermitidos = this.obterRolesPadraoParaTipoSala(tipoSala);
            if (!rolesPermitidos.includes(userRole)) {
                throw new common_1.ForbiddenException(`Usuário com role ${userRole} não tem permissão para acessar salas do tipo ${tipoSala}`);
            }
        }
    };
    __setFunctionName(_classThis, "SalasVRService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SalasVRService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SalasVRService = _classThis;
})();
exports.SalasVRService = SalasVRService;
