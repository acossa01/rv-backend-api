import { registerEnumType } from '@nestjs/graphql';

export enum Status {
  ACTIVE = 'ATIVO',
  INACTIVE = 'INATIVO',
}

registerEnumType(Status, {
  name: 'Status',
});

export const StatusResolver: Record<keyof typeof Status, any> = {
  ACTIVE: 'ATIVO',
  INACTIVE: 'INATIVO',
};
