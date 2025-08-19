import { Field, ID, ObjectType } from '@nestjs/graphql';
import { TipoConteudo } from 'src/enums/conteudo-educacional.enum';
import { Status } from 'src/enums/status.entities';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MedicoEntity } from 'src/modules/usuarios/entities/medico.entity';

@Entity('conteudo_educacional')
@ObjectType()
export class ConteudoEducacionalEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column({ length: 200 })
  titulo: string;

  @Field(() => String)
  @Column({ type: 'text' })
  descricao: string;

  @Field(() => TipoConteudo)
  @Column({
    type: 'enum',
    enum: TipoConteudo,
    nullable: false,
  })
  tipoConteudo: TipoConteudo;

  @Field(() => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  conteudoDetalhado?: string;

  // Metadados para VR
  @Field(() => String, { nullable: true })
  @Column({ nullable: true, length: 500 })
  urlModeloVR?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, length: 500 })
  urlTextura?: string;

  @Field(() => [String], { nullable: true })
  @Column({ type: 'simple-array', nullable: true })
  tagsVR?: string[];

  // Configurações de dificuldade
  @Field(() => String, { defaultValue: 'BASICO' })
  @Column({ 
    type: 'enum', 
    enum: ['BASICO', 'INTERMEDIARIO', 'AVANCADO', 'ESPECIALISTA'],
    default: 'BASICO'
  })
  nivelDificuldade: string;

  @Field(() => Number, { defaultValue: 0 })
  @Column({ type: 'int', default: 0 })
  duracaoEstimadaMinutos: number;

  // Dados específicos para diferentes tipos de conteúdo
  @Field(() => String, { nullable: true })
  @Column({ type: 'json', nullable: true })
  dadosEspecificos?: any;

  // Sistema de versionamento
  @Field(() => String, { defaultValue: '1.0.0' })
  @Column({ length: 20, default: '1.0.0' })
  versao: string;

  @Field(() => Status)
  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
    nullable: false,
  })
  status: Status;

  // Estatísticas de uso
  @Field(() => Number, { defaultValue: 0 })
  @Column({ type: 'int', default: 0 })
  totalVisualizacoes: number;

  @Field(() => Number, { defaultValue: 0 })
  @Column({ type: 'decimal', precision: 3, scale: 2, default: 0 })
  avaliacaoMedia: number;

  @Field(() => Number, { defaultValue: 0 })
  @Column({ type: 'int', default: 0 })
  totalAvaliacoes: number;

  // Relacionamentos
  @Field(() => MedicoEntity, { nullable: true })
  @ManyToOne(() => MedicoEntity, { nullable: true })
  autorMedico?: MedicoEntity;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  autorMedicoId?: string;

  // Datas de controle
  @Field(() => Date)
  @CreateDateColumn({ name: 'dataCriacao' })
  dataCriacao: Date;

  @Field(() => Date)
  @UpdateDateColumn({ name: 'dataAtualizacao' })
  dataAtualizacao: Date;

  @Field(() => Date, { nullable: true })
  @Column({ type: 'timestamp', nullable: true })
  dataPublicacao?: Date;
} 