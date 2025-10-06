import { SalasVRService } from './salas-vr.service';
import { SalaVREntity } from './entities/sala-vr.entity';
import { SessaoVREntity } from './entities/sessao-vr.entity';
import { TipoSala } from '../../enums/tipo-sala.enum';
import { CriarSessaoVRInput, CriarSalaVRInput } from './dto/salas-vr.input';
export declare class SalasVRResolver {
    private readonly salasVRService;
    constructor(salasVRService: SalasVRService);
    obterSalasDisponiveis(user: any): Promise<SalaVREntity[]>;
    obterSalasPorTipo(tipo: TipoSala, user: any): Promise<SalaVREntity[]>;
    obterSalasComuns(user: any): Promise<SalaVREntity[]>;
    obterSalasTecnicas(user: any): Promise<SalaVREntity[]>;
    obterSalasCirurgia(user: any): Promise<SalaVREntity[]>;
    obterSessoesAtivas(user: any): Promise<SessaoVREntity[]>;
    criarSessao(dados: CriarSessaoVRInput, user: any): Promise<SessaoVREntity>;
    participarSessao(sessaoId: string, user: any): Promise<SessaoVREntity>;
    finalizarSessao(sessaoId: string, user: any): Promise<SessaoVREntity>;
    criarSala(dados: CriarSalaVRInput, user: any): Promise<SalaVREntity>;
}
export declare class SessoesVRResolver {
}
