import { InputType, Field } from '@nestjs/graphql';
import { TipoConteudo } from 'src/enums/conteudo-educacional.enum';

@InputType()
export class ConteudoEducacionalInput {
  @Field(() => String)
  titulo: string;

  @Field(() => String)
  descricao: string;

  @Field(() => TipoConteudo)
  tipoConteudo: TipoConteudo;

  @Field(() => String, { nullable: true })
  conteudoDetalhado?: string;

  @Field(() => String, { nullable: true })
  urlModeloVR?: string;

  @Field(() => String, { nullable: true })
  urlTextura?: string;

  @Field(() => [String], { nullable: true })
  tagsVR?: string[];

  @Field(() => String, { nullable: true })
  nivelDificuldade?: string;

  @Field(() => Number, { nullable: true })
  duracaoEstimadaMinutos?: number;

  @Field(() => String, { nullable: true, description: 'Campo JSON serializado em string (opcional)' })
  dadosEspecificos?: string;

  @Field(() => String, { nullable: true })
  versao?: string;
}

@InputType()
export class AtualizarConteudoEducacionalInput {
  @Field(() => String, { nullable: true })
  titulo?: string;

  @Field(() => String, { nullable: true })
  descricao?: string;

  @Field(() => TipoConteudo, { nullable: true })
  tipoConteudo?: TipoConteudo;

  @Field(() => String, { nullable: true })
  conteudoDetalhado?: string;

  @Field(() => String, { nullable: true })
  urlModeloVR?: string;

  @Field(() => String, { nullable: true })
  urlTextura?: string;

  @Field(() => [String], { nullable: true })
  tagsVR?: string[];

  @Field(() => String, { nullable: true })
  nivelDificuldade?: string;

  @Field(() => Number, { nullable: true })
  duracaoEstimadaMinutos?: number;

  @Field(() => String, { nullable: true, description: 'Campo JSON serializado em string (opcional)' })
  dadosEspecificos?: string;

  @Field(() => String, { nullable: true })
  versao?: string;
} 