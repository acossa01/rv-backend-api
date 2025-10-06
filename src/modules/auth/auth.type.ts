import { ArgsType, Field, InputType, ObjectType } from '@nestjs/graphql';
import { Roles } from '../../enums/role.enum';
import { Status } from '../../enums/status.entities';

@ObjectType()
export class UsuarioResponse {
  @Field(() => String)
  id: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  nomeCompleto: string;

  @Field(() => Roles)
  tipoUsuario: Roles;

  @Field(() => Status)
  status: Status;
}

@ObjectType()
export class LoginResponse {
  @Field(() => String)
  access_token: string;

  @Field(() => String)
  refresh_token: string;

  @Field(() => UsuarioResponse)
  user: UsuarioResponse;

  @Field(() => String)
  email: string;

  @Field(() => String)
  sub: string;

  @Field(() => Roles)
  role: Roles;

  @Field(() => String)
  nomeCompleto: string;
}

@InputType()
export class LoginInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  senha: string;
}

@InputType()
export class RegistroInput {
  @Field(() => String)
  nomeCompleto: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  senha: string;

  @Field(() => Roles)
  tipoUsuario: Roles;

  @Field(() => String, { nullable: true })
  telefone?: string;

  @Field(() => String, { nullable: true })
  celular?: string;

  // Campos específicos para médicos
  @Field(() => String, { nullable: true })
  crm?: string;

  @Field(() => String, { nullable: true })
  ufCrm?: string;

  @Field(() => [String], { nullable: true })
  especialidades?: string[];

  @Field(() => String, { nullable: true })
  instituicao?: string;

  // Campos específicos para estudantes
  @Field(() => String, { nullable: true })
  matricula?: string;

  @Field(() => String, { nullable: true })
  instituicaoEnsino?: string;

  @Field(() => String, { nullable: true })
  curso?: string;

  @Field(() => Number, { nullable: true })
  periodo?: number;

  // Campos específicos para usuários comuns
  @Field(() => String, { nullable: true })
  endereco?: string;

  @Field(() => String, { nullable: true })
  cidade?: string;

  @Field(() => String, { nullable: true })
  uf?: string;

  @Field(() => String, { nullable: true })
  cep?: string;
}

@InputType()
export class RefreshTokenInput {
  @Field(() => String)
  refreshToken: string;
}

@InputType()
export class RecuperacaoSenhaInput {
  @Field(() => String)
  email: string;
}

@InputType()
export class RedefinirSenhaInput {
  @Field(() => String)
  token: string;

  @Field(() => String)
  novaSenha: string;
}

// Manter compatibilidade com código antigo (deprecated)
@ObjectType()
export class Token {
  @Field(() => String)
  access_token: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  sub: string;

  @Field(() => Roles)
  role: Roles;
}
