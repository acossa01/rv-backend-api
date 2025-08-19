import { registerEnumType } from '@nestjs/graphql';

export enum TipoConteudo {
  GERAL = 'GERAL',
  APRENDIZADO_CLINICO = 'APRENDIZADO_CLINICO',
  CIRURGIA = 'CIRURGIA'
}

registerEnumType(TipoConteudo, {
  name: 'TipoConteudo',
  description: 'Tipos de conteúdo educacional disponíveis na plataforma VR',
}); 