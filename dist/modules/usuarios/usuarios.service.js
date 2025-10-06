"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const role_enum_1 = require("../../enums/role.enum");
const status_entities_1 = require("../../enums/status.entities");
const bcrypt = __importStar(require("bcrypt"));
let UsuariosService = (() => {
    let _classDecorators = [(0, common_1.Injectable)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var UsuariosService = _classThis = class {
        constructor(userRepository, usuarioComumRepository, medicoRepository, estudanteRepository) {
            this.userRepository = userRepository;
            this.usuarioComumRepository = usuarioComumRepository;
            this.medicoRepository = medicoRepository;
            this.estudanteRepository = estudanteRepository;
        }
        /**
         * Encontrar usuário por email para autenticação
         */
        async findByEmail(email) {
            return this.userRepository.findOne({
                where: { email, status: status_entities_1.Status.ACTIVE },
            });
        }
        /**
         * Encontrar usuário por ID
         */
        async findById(id) {
            return this.userRepository.findOne({
                where: { id, status: status_entities_1.Status.ACTIVE },
            });
        }
        /**
         * Criar usuário comum
         */
        async criarUsuarioComum(dados) {
            // Verificar se email já existe
            const existeEmail = await this.userRepository.findOne({
                where: { email: dados.email },
            });
            if (existeEmail) {
                throw new common_1.ConflictException('Email já está em uso');
            }
            // Hash da senha
            const senhaHash = await bcrypt.hash(dados.senha, 10);
            const novoUsuario = this.usuarioComumRepository.create({
                ...dados,
                senha: senhaHash,
                tipoUsuario: role_enum_1.Roles.USUARIO_COMUM,
                status: status_entities_1.Status.ACTIVE,
            });
            return this.usuarioComumRepository.save(novoUsuario);
        }
        /**
         * Criar médico
         */
        async criarMedico(dados) {
            // Verificar se email já existe
            const existeEmail = await this.userRepository.findOne({
                where: { email: dados.email },
            });
            if (existeEmail) {
                throw new common_1.ConflictException('Email já está em uso');
            }
            // Verificar se CRM já existe
            const existeCRM = await this.medicoRepository.findOne({
                where: { crm: dados.crm },
            });
            if (existeCRM) {
                throw new common_1.ConflictException('CRM já está cadastrado');
            }
            // Hash da senha
            const senhaHash = await bcrypt.hash(dados.senha, 10);
            const novoMedico = this.medicoRepository.create({
                ...dados,
                senha: senhaHash,
                tipoUsuario: role_enum_1.Roles.MEDICO,
                status: status_entities_1.Status.ACTIVE,
            });
            return this.medicoRepository.save(novoMedico);
        }
        /**
         * Criar estudante
         */
        async criarEstudante(dados) {
            // Verificar se email já existe
            const existeEmail = await this.userRepository.findOne({
                where: { email: dados.email },
            });
            if (existeEmail) {
                throw new common_1.ConflictException('Email já está em uso');
            }
            // Verificar se matrícula já existe
            const existeMatricula = await this.estudanteRepository.findOne({
                where: { matricula: dados.matricula },
            });
            if (existeMatricula) {
                throw new common_1.ConflictException('Matrícula já está cadastrada');
            }
            // Hash da senha
            const senhaHash = await bcrypt.hash(dados.senha, 10);
            const novoEstudante = this.estudanteRepository.create({
                ...dados,
                senha: senhaHash,
                tipoUsuario: role_enum_1.Roles.ESTUDANTE,
                status: status_entities_1.Status.ACTIVE,
            });
            return this.estudanteRepository.save(novoEstudante);
        }
        /**
         * Validar credenciais do usuário
         */
        async validarCredenciais(email, senha) {
            const usuario = await this.findByEmail(email);
            if (!usuario) {
                return null;
            }
            const senhaValida = await bcrypt.compare(senha, usuario.senha);
            if (!senhaValida) {
                return null;
            }
            // Atualizar último acesso
            await this.atualizarUltimoAcesso(usuario.id);
            // Retornar usuário sem a senha
            const { senha: _, ...usuarioSemSenha } = usuario;
            return usuarioSemSenha;
        }
        /**
         * Obter perfil completo do usuário baseado no tipo
         */
        async obterPerfilCompleto(userId) {
            const usuario = await this.findById(userId);
            if (!usuario) {
                throw new common_1.NotFoundException('Usuário não encontrado');
            }
            let perfilCompleto;
            switch (usuario.tipoUsuario) {
                case role_enum_1.Roles.USUARIO_COMUM:
                    perfilCompleto = await this.usuarioComumRepository.findOne({
                        where: { id: userId },
                    });
                    break;
                case role_enum_1.Roles.MEDICO:
                    perfilCompleto = await this.medicoRepository.findOne({
                        where: { id: userId },
                        relations: ['estudantesOrientados'],
                    });
                    break;
                case role_enum_1.Roles.ESTUDANTE:
                    perfilCompleto = await this.estudanteRepository.findOne({
                        where: { id: userId },
                        relations: ['orientador'],
                    });
                    break;
                default:
                    perfilCompleto = usuario;
            }
            if (!perfilCompleto) {
                throw new common_1.NotFoundException('Perfil não encontrado');
            }
            return perfilCompleto;
        }
        /**
         * Atualizar último acesso
         */
        async atualizarUltimoAcesso(userId) {
            await this.userRepository.update(userId, {
                dataUltimoAcesso: new Date(),
            });
        }
        /**
         * Alterar status do usuário
         */
        async alterarStatusUsuario(userId, novoStatus) {
            const usuario = await this.findById(userId);
            if (!usuario) {
                throw new common_1.NotFoundException('Usuário não encontrado');
            }
            await this.userRepository.update(userId, { status: novoStatus });
            return this.findById(userId);
        }
        /**
         * Listar usuários por tipo
         */
        async listarUsuariosPorTipo(tipo) {
            return this.userRepository.find({
                where: { tipoUsuario: tipo, status: status_entities_1.Status.ACTIVE },
                order: { nomeCompleto: 'ASC' },
            });
        }
        /**
         * Buscar médicos para orientação
         */
        async buscarMedicosOrientadores() {
            return this.medicoRepository.find({
                where: {
                    status: status_entities_1.Status.ACTIVE,
                    ehProfessor: true,
                },
                order: { nomeCompleto: 'ASC' },
            });
        }
    };
    __setFunctionName(_classThis, "UsuariosService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UsuariosService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UsuariosService = _classThis;
})();
exports.UsuariosService = UsuariosService;
