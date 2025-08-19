import { InputType, Field, ID } from '@nestjs/graphql';
import { TipoSala } from 'src/enums/tipo-sala.enum';

@InputType()
export class CriarSessaoVRInput {
  @Field(() => ID)
  salaId: string;

  @Field(() => String, { nullable: true })
  orientadorId?: string;

  @Field(() => Number, { nullable: true })
  maxParticipantes?: number;

  @Field(() => Date, { nullable: true })
  dataInicio?: Date;
}

@InputType()
export class CriarSalaVRInput {
  @Field(() => String)
  nome: string;

  @Field(() => TipoSala)
  tipoSala: TipoSala;

  @Field(() => Number)
  capacidadeMaxima: number;

  @Field(() => [String], { nullable: true })
  rolesPermitidos?: string[];

  @Field(() => String, { nullable: true })
  descricao?: string;
} 