import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { SalaVREntity } from './sala-vr.entity';
import { UserEntity } from 'src/modules/usuarios/entities/user.entity';
import { MedicoEntity } from 'src/modules/usuarios/entities/medico.entity';

@Entity('sessoes_vr')
@ObjectType()
export class SessaoVREntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column({ length: 200 })
  titulo: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  descricao?: string;

  // Status da sessão
  @Field(() => String, { defaultValue: 'AGENDADA' })
  @Column({ 
    type: 'enum', 
    enum: ['AGENDADA', 'EM_ANDAMENTO', 'PAUSADA', 'FINALIZADA', 'CANCELADA'],
    default: 'AGENDADA'
  })
  status: string;

  // Datas da sessão
  @Field(() => Date)
  @Column({ type: 'timestamp' })
  dataInicio: Date;

  @Field(() => Date, { nullable: true })
  @Column({ type: 'timestamp', nullable: true })
  dataFim?: Date;

  @Field(() => Number, { nullable: true })
  @Column({ type: 'int', nullable: true })
  duracaoMinutos?: number;

  // Configurações da sessão
  @Field(() => Boolean, { defaultValue: false })
  @Column({ type: 'boolean', default: false })
  ehPrivada: boolean;

  @Field(() => Number, { defaultValue: 1 })
  @Column({ type: 'int', default: 1 })
  maxParticipantes: number;

  // Dados específicos da sessão VR
  @Field(() => String, { nullable: true })
  @Column({ type: 'json', nullable: true })
  configuracaoVR?: any;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, length: 500 })
  cenarioVR?: string;

  // Relacionamentos
  @Field(() => SalaVREntity)
  @ManyToOne(() => SalaVREntity, (sala) => sala.sessoes)
  sala: SalaVREntity;

  @Field(() => String)
  @Column()
  salaId: string;

  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity)
  criador: UserEntity;

  @Field(() => String)
  @Column()
  criadorId: string;

  @Field(() => MedicoEntity, { nullable: true })
  @ManyToOne(() => MedicoEntity, { nullable: true })
  orientador?: MedicoEntity;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  orientadorId?: string;

  @Field(() => [UserEntity])
  @ManyToMany(() => UserEntity)
  @JoinTable({
    name: 'participantes_sessao',
    joinColumn: { name: 'sessaoId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'participanteId', referencedColumnName: 'id' }
  })
  participantes: UserEntity[];

  // Controle de progresso
  @Field(() => String, { nullable: true })
  @Column({ type: 'json', nullable: true })
  progressoSessao?: any;

  @Field(() => Number, { defaultValue: 0 })
  @Column({ type: 'decimal', precision: 3, scale: 2, default: 0 })
  avaliacaoMedia?: number;

  // Datas de controle
  @Field(() => Date)
  @CreateDateColumn({ name: 'dataCriacao' })
  dataCriacao: Date;

  @Field(() => Date)
  @UpdateDateColumn({ name: 'dataAtualizacao' })
  dataAtualizacao: Date;
} 