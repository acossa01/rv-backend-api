import { Field, ObjectType } from '@nestjs/graphql';
import { ChildEntity, Column, OneToMany } from 'typeorm';
import { UserEntity } from './user.entity';
import { Roles } from 'src/enums/role.enum';
import { EstudanteEntity } from './estudante.entity';

@ChildEntity(Roles.MEDICO)
@ObjectType()
export class MedicoEntity extends UserEntity {
  @Field(() => String)
  @Column({ length: 20, unique: true })
  crm: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, length: 2 })
  ufCrm?: string;

  @Field(() => [String])
  @Column({ type: 'simple-array' })
  especialidades: string[];

  @Field(() => Number, { defaultValue: 0 })
  @Column({ type: 'int', default: 0 })
  anosExperiencia: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, length: 200 })
  instituicao?: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  biografia?: string;

  // Informações profissionais
  @Field(() => String, { nullable: true })
  @Column({ nullable: true, length: 100 })
  enderecoConsultorio?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, length: 50 })
  cidadeConsultorio?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, length: 2 })
  ufConsultorio?: string;

  // Capacidades na plataforma
  @Field(() => Boolean, { defaultValue: false })
  @Column({ type: 'boolean', default: false })
  podeCriarConteudo: boolean;

  @Field(() => Boolean, { defaultValue: false })
  @Column({ type: 'boolean', default: false })
  ehProfessor: boolean;

  // Estatísticas
  @Field(() => Number, { defaultValue: 0 })
  @Column({ type: 'int', default: 0 })
  totalConteudosCriados: number;

  @Field(() => Number, { defaultValue: 0 })
  @Column({ type: 'int', default: 0 })
  totalEstudantesOrientados: number;

  // Relacionamentos
  @Field(() => [EstudanteEntity], { nullable: true })
  @OneToMany(() => EstudanteEntity, (estudante) => estudante.orientador, {
    nullable: true,
  })
  estudantesOrientados?: EstudanteEntity[];
} 