import { Field, ObjectType } from '@nestjs/graphql';
import { ChildEntity, Column, OneToMany } from 'typeorm';
import { UserEntity } from './user.entity';
import { Roles } from '../../../enums/role.enum';
@ChildEntity(Roles.USUARIO_COMUM)
@ObjectType()
export class UsuarioComumEntity extends UserEntity {
  // Histórico médico básico
  @Field(() => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  historicoMedico?: string;

  @Field(() => [String], { nullable: true })
  @Column({ type: 'simple-array', nullable: true })
  alergias?: string[];

  @Field(() => [String], { nullable: true })
  @Column({ type: 'simple-array', nullable: true })
  medicamentosUso?: string[];

  // Informações para agendamento
  @Field(() => String, { nullable: true })
  @Column({ nullable: true, length: 100 })
  endereco?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, length: 50 })
  cidade?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, length: 2 })
  uf?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, length: 10 })
  cep?: string;

  // Progresso no conteúdo educacional
  @Field(() => Number, { defaultValue: 0 })
  @Column({ type: 'int', default: 0 })
  totalConteudosVisualizados: number;

  @Field(() => Date, { nullable: true })
  @Column({ type: 'timestamp', nullable: true })
  ultimoConteudoVisualizado?: Date;
} 