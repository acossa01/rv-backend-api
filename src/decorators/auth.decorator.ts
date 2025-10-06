import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { Roles } from '../enums/role.enum';
import { JwtGuard } from '../guards/jwt.guard';
import { RoleGuards } from '../guards/role.guard';

export const Auth = (...roles: Roles[]) => {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(JwtGuard, RoleGuards),
  );
};
