import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import config from 'config';
import { Roles } from '../../../enums/role.enum';
import { Status } from '../../../enums/status.entities';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  TableInheritance,
  UpdateDateColumn,
} from 'typeorm';
import { EncryptionTransformer } from 'typeorm-encrypted';

@Entity('users')
@TableInheritance({ column: { type: 'enum', enum: Roles, name: 'userType' } })
@ObjectType()
export class UserEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column({ length: 200 })
  nomeCompleto: string;

  @Field(() => String)
  @Column({ unique: true, length: 100 })
  email: string;

  @HideField()
  @Column({
    type: 'varchar',
    nullable: false,
    transformer: new EncryptionTransformer(config.get('encrypt')),
  })
  senha: string;

  @Field(() => Roles)
  @Column({
    type: 'enum',
    enum: Roles,
    nullable: false,
  })
  tipoUsuario: Roles;

  @Field(() => Status)
  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
    nullable: false,
  })
  status: Status;

  @Field(() => Date)
  @CreateDateColumn({ name: 'dataCriacao' })
  dataCriacao: Date;

  @Field(() => Date)
  @UpdateDateColumn({ name: 'dataAtualizacao' })
  dataAtualizacao: Date;

  // Campos opcionais para perfil
  @Field(() => String, { nullable: true })
  @Column({ nullable: true, length: 20 })
  telefone?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, length: 20 })
  celular?: string;

  @Field(() => Date, { nullable: true })
  @Column({ type: 'date', nullable: true })
  dataUltimoAcesso?: Date;
} 