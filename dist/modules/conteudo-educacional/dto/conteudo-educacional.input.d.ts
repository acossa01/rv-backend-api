import { TipoConteudo } from '../../../enums/conteudo-educacional.enum';
export declare class ConteudoEducacionalInput {
    titulo: string;
    descricao: string;
    tipoConteudo: TipoConteudo;
    conteudoDetalhado?: string;
    urlModeloVR?: string;
    urlTextura?: string;
    tagsVR?: string[];
    nivelDificuldade?: string;
    duracaoEstimadaMinutos?: number;
    dadosEspecificos?: string;
    versao?: string;
}
export declare class AtualizarConteudoEducacionalInput {
    titulo?: string;
    descricao?: string;
    tipoConteudo?: TipoConteudo;
    conteudoDetalhado?: string;
    urlModeloVR?: string;
    urlTextura?: string;
    tagsVR?: string[];
    nivelDificuldade?: string;
    duracaoEstimadaMinutos?: number;
    dadosEspecificos?: string;
    versao?: string;
}
