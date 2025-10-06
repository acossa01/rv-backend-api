import { Field, ID, ObjectType } from '@nestjs/graphql';
import { TipoSala, StatusSala } from '../../../enums/tipo-sala.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { SessaoVREntity } from './sessao-vr.entity';

@Entity('salas_vr')
@ObjectType()
export class SalaVREntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column({ length: 100 })
  nome: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  descricao?: string;

  @Field(() => TipoSala)
  @Column({
    type: 'enum',
    enum: TipoSala,
    nullable: false,
  })
  tipoSala: TipoSala;

  @Field(() => StatusSala)
  @Column({
    type: 'enum',
    enum: StatusSala,
    default: StatusSala.DISPONIVEL,
  })
  statusSala: StatusSala;

  // Configurações da sala
  @Field(() => Number)
  @Column({ type: 'int', default: 1 })
  capacidadeMaxima: number;

  @Field(() => Boolean, { defaultValue: true })
  @Column({ type: 'boolean', default: true })
  permiteMultiusuarios: boolean;

  @Field(() => Boolean, { defaultValue: false })
  @Column({ type: 'boolean', default: false })
  requerOrientador: boolean;

  // Metadados específicos do VR
  @Field(() => String, { nullable: true })
  @Column({ nullable: true, length: 500 })
  ambienteVR?: string;

  @Field(() => [String], { nullable: true })
  @Column({ type: 'simple-array', nullable: true })
  equipamentosDisponiveis?: string[];

  @Field(() => [String], { nullable: true })
  @Column({ type: 'simple-array', nullable: true })
  ferramentasVR?: string[];

  // Restrições de acesso por role
  @Field(() => [String])
  @Column({ type: 'simple-array' })
  rolesPermitidos: string[];

  // Configurações de instruções
  @Field(() => Boolean, { defaultValue: false })
  @Column({ type: 'boolean', default: false })
  permiteInstrucaoIndividual: boolean;

  @Field(() => Boolean, { defaultValue: true })
  @Column({ type: 'boolean', default: true })
  funcionaIndependente: boolean;

  // Estatísticas
  @Field(() => Number, { defaultValue: 0 })
  @Column({ type: 'int', default: 0 })
  totalSessoes: number;

  @Field(() => Number, { defaultValue: 0 })
  @Column({ type: 'int', default: 0 })
  totalHorasUso: number;

  // Relacionamentos
  @Field(() => [SessaoVREntity], { nullable: true })
  @OneToMany(() => SessaoVREntity, (sessao) => sessao.sala, { nullable: true })
  sessoes?: SessaoVREntity[];

  // Datas de controle
  @Field(() => Date)
  @CreateDateColumn({ name: 'dataCriacao' })
  dataCriacao: Date;

  @Field(() => Date)
  @UpdateDateColumn({ name: 'dataAtualizacao' })
  dataAtualizacao: Date;

  @Field(() => Date, { nullable: true })
  @Column({ type: 'timestamp', nullable: true })
  ultimaManutencao?: Date;
} 