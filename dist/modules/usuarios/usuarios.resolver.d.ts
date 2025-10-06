import { UsuariosService } from './usuarios.service';
import { UserEntity } from './entities/user.entity';
import { UsuarioComumEntity } from './entities/usuario-comum.entity';
import { MedicoEntity } from './entities/medico.entity';
import { EstudanteEntity } from './entities/estudante.entity';
import { Roles } from '../../enums/role.enum';
export declare class UsuariosResolver {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    obterMeuPerfilCompleto(user: any): Promise<UserEntity>;
    buscarUsuarioPorId(id: string): Promise<UserEntity>;
    listarUsuariosPorTipo(tipo: Roles): Promise<UserEntity[]>;
    listarMedicosOrientadores(): Promise<MedicoEntity[]>;
    listarUsuariosComuns(): Promise<UsuarioComumEntity[]>;
    listarEstudantes(): Promise<EstudanteEntity[]>;
    listarMedicos(): Promise<MedicoEntity[]>;
}
