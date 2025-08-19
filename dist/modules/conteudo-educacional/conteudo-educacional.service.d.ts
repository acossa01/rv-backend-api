import { Repository } from 'typeorm';
import { ConteudoEducacionalEntity } from './entities/conteudo-educacional.entity';
import { TipoConteudo } from 'src/enums/conteudo-educacional.enum';
import { Roles } from 'src/enums/role.enum';
export declare class ConteudoEducacionalService {
    private readonly conteudoRepository;
    constructor(conteudoRepository: Repository<ConteudoEducacionalEntity>);
    obterConteudosPermitidos(userRole: Roles): Promise<ConteudoEducacionalEntity[]>;
    obterConteudoPorId(id: string, userRole: Roles): Promise<ConteudoEducacionalEntity>;
    buscarPorTipo(tipo: TipoConteudo, userRole: Roles): Promise<ConteudoEducacionalEntity[]>;
    buscarPorNivel(nivel: string, userRole: Roles): Promise<ConteudoEducacionalEntity[]>;
    criarConteudo(dadosConteudo: Partial<ConteudoEducacionalEntity>, autorId: string, userRole: Roles): Promise<ConteudoEducacionalEntity>;
    atualizarConteudo(id: string, dadosAtualizacao: Partial<ConteudoEducacionalEntity>, userId: string, userRole: Roles): Promise<ConteudoEducacionalEntity>;
    avaliarConteudo(id: string, nota: number, userRole: Roles): Promise<ConteudoEducacionalEntity>;
    private incrementarVisualizacao;
    private obterTiposPermitidosPorRole;
    private verificarPermissaoAcesso;
}
