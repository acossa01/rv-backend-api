import { ConteudoEducacionalService } from './conteudo-educacional.service';
import { ConteudoEducacionalEntity } from './entities/conteudo-educacional.entity';
import { TipoConteudo } from '../../enums/conteudo-educacional.enum';  
import { ConteudoEducacionalInput, AtualizarConteudoEducacionalInput } from './dto/conteudo-educacional.input';
export declare class ConteudoEducacionalResolver {
    private readonly conteudoService;
    constructor(conteudoService: ConteudoEducacionalService);
    obterConteudosPermitidos(user: any): Promise<ConteudoEducacionalEntity[]>;
    obterConteudoPorId(id: string, user: any): Promise<ConteudoEducacionalEntity>;
    buscarPorTipo(tipo: TipoConteudo, user: any): Promise<ConteudoEducacionalEntity[]>;
    buscarPorNivel(nivel: string, user: any): Promise<ConteudoEducacionalEntity[]>;
    obterConteudosGerais(user: any): Promise<ConteudoEducacionalEntity[]>;
    obterConteudosAprendizadoClinico(user: any): Promise<ConteudoEducacionalEntity[]>;
    obterConteudosCirurgia(user: any): Promise<ConteudoEducacionalEntity[]>;
    criarConteudo(dados: ConteudoEducacionalInput, user: any): Promise<ConteudoEducacionalEntity>;
    atualizarConteudo(id: string, dados: AtualizarConteudoEducacionalInput, user: any): Promise<ConteudoEducacionalEntity>;
    avaliarConteudo(id: string, nota: number, user: any): Promise<ConteudoEducacionalEntity>;
}
