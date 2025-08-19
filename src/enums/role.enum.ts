import { registerEnumType } from '@nestjs/graphql';

export enum Roles {
  USUARIO_COMUM = 'USUARIO_COMUM',
  MEDICO = 'MEDICO',
  ESTUDANTE = 'ESTUDANTE'
}

registerEnumType(Roles, {
  name: 'UserRole',
  description: 'Tipos de usuários do sistema de realidade virtual para oftalmologia',
});
