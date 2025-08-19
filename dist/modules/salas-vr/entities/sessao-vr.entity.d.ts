import { SalaVREntity } from './sala-vr.entity';
import { UserEntity } from 'src/modules/usuarios/entities/user.entity';
import { MedicoEntity } from 'src/modules/usuarios/entities/medico.entity';
export declare class SessaoVREntity {
    id: string;
    titulo: string;
    descricao?: string;
    status: string;
    dataInicio: Date;
    dataFim?: Date;
    duracaoMinutos?: number;
    ehPrivada: boolean;
    maxParticipantes: number;
    configuracaoVR?: any;
    cenarioVR?: string;
    sala: SalaVREntity;
    salaId: string;
    criador: UserEntity;
    criadorId: string;
    orientador?: MedicoEntity;
    orientadorId?: string;
    participantes: UserEntity[];
    progressoSessao?: any;
    avaliacaoMedia?: number;
    dataCriacao: Date;
    dataAtualizacao: Date;
}
