import { registerEnumType } from '@nestjs/graphql';

export enum TipoSala {
  COMUM = 'COMUM',
  TECNICA = 'TECNICA', 
  CIRURGIA = 'CIRURGIA'
}

export enum StatusSala {
  DISPONIVEL = 'DISPONIVEL',
  EM_USO = 'EM_USO',
  MANUTENCAO = 'MANUTENCAO'
}

registerEnumType(TipoSala, {
  name: 'TipoSala',
  description: 'Tipos de salas disponíveis na plataforma VR',
});

registerEnumType(StatusSala, {
  name: 'StatusSala',
  description: 'Status das salas VR',
}); 