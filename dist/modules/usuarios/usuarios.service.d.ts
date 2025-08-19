import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { UsuarioComumEntity } from './entities/usuario-comum.entity';
import { MedicoEntity } from './entities/medico.entity';
import { EstudanteEntity } from './entities/estudante.entity';
import { Roles } from 'src/enums/role.enum';
import { Status } from 'src/enums/status.entities';
export declare class UsuariosService {
    private readonly userRepository;
    private readonly usuarioComumRepository;
    private readonly medicoRepository;
    private readonly estudanteRepository;
    constructor(userRepository: Repository<UserEntity>, usuarioComumRepository: Repository<UsuarioComumEntity>, medicoRepository: Repository<MedicoEntity>, estudanteRepository: Repository<EstudanteEntity>);
    findByEmail(email: string): Promise<UserEntity | null>;
    findById(id: string): Promise<UserEntity | null>;
    criarUsuarioComum(dados: Partial<UsuarioComumEntity>): Promise<UsuarioComumEntity>;
    criarMedico(dados: Partial<MedicoEntity>): Promise<MedicoEntity>;
    criarEstudante(dados: Partial<EstudanteEntity>): Promise<EstudanteEntity>;
    validarCredenciais(email: string, senha: string): Promise<UserEntity | null>;
    obterPerfilCompleto(userId: string): Promise<UserEntity>;
    atualizarUltimoAcesso(userId: string): Promise<void>;
    alterarStatusUsuario(userId: string, novoStatus: Status): Promise<UserEntity>;
    listarUsuariosPorTipo(tipo: Roles): Promise<UserEntity[]>;
    buscarMedicosOrientadores(): Promise<MedicoEntity[]>;
}
