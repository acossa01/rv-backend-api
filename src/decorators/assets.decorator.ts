import { Roles } from 'src/enums/role.enum';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuards } from 'src/guards/role.guard';
import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';

export const Assets = (...roles: Roles[]) => {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(AuthGuard('jwt'), RoleGuards),
  );
};
