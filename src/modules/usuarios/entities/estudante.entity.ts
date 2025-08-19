import { Field, ObjectType } from '@nestjs/graphql';
import { ChildEntity, Column, ManyToOne, OneToMany } from 'typeorm';
import { UserEntity } from './user.entity';
import { Roles } from 'src/enums/role.enum';
import { MedicoEntity } from './medico.entity';

@ChildEntity(Roles.ESTUDANTE)
@ObjectType()
export class EstudanteEntity extends UserEntity {
  @Field(() => String)
  @Column({ length: 20 })
  matricula: string;

  @Field(() => String)
  @Column({ length: 200 })
  instituicaoEnsino: string;

  @Field(() => String)
  @Column({ length: 100 })
  curso: string;

  @Field(() => Number)
  @Column({ type: 'int' })
  periodo: number;

  @Field(() => Number, { defaultValue: 2024 })
  @Column({ type: 'int', default: 2024 })
  anoIngresso: number;

  @Field(() => Date, { nullable: true })
  @Column({ type: 'date', nullable: true })
  previsaoConclusao?: Date;

  // Área de especialização
  @Field(() => [String], { nullable: true })
  @Column({ type: 'simple-array', nullable: true })
  areasInteresse?: string[];

  // Progresso acadêmico
  @Field(() => Number, { defaultValue: 0 })
  @Column({ type: 'decimal', precision: 3, scale: 2, default: 0 })
  notaMedia: number;

  @Field(() => Number, { defaultValue: 0 })
  @Column({ type: 'int', default: 0 })
  horasEstudoCompletadas: number;

  @Field(() => Number, { defaultValue: 0 })
  @Column({ type: 'int', default: 0 })
  simulacoesRealizadas: number;

  @Field(() => Number, { defaultValue: 0 })
  @Column({ type: 'int', default: 0 })
  casosClinicosEstudados: number;

  // Nível de proficiência em VR
  @Field(() => String, { defaultValue: 'INICIANTE' })
  @Column({ 
    type: 'enum', 
    enum: ['INICIANTE', 'INTERMEDIARIO', 'AVANCADO'],
    default: 'INICIANTE'
  })
  nivelVR: string;

  // Relacionamentos
  @Field(() => MedicoEntity, { nullable: true })
  @ManyToOne(() => MedicoEntity, (medico) => medico.estudantesOrientados, {
    nullable: true,
  })
  orientador?: MedicoEntity;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  orientadorId?: string;

  // Histórico de progresso
  @Field(() => Date, { nullable: true })
  @Column({ type: 'timestamp', nullable: true })
  ultimaSimulacao?: Date;

  @Field(() => Date, { nullable: true })
  @Column({ type: 'timestamp', nullable: true })
  ultimoCasoClinico?: Date;
} 