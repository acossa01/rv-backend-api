import {
  Controller,
  Get,
  NotFoundException,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { Assets } from './decorators/assets.decorator';
import { Roles } from './enums/role.enum';

@Controller('assets')
export class AppController {
  @Assets(Roles.MEDICO)
  @Get('/*')
  assets(@Req() req, @Res() res) {
    if (req.user)
      return res.sendFile(
        req.path,
        { root: './', index: false },
        (err: Error) => {
          if (err) {
            const error = new NotFoundException(err.message);
            res.status(error.getStatus()).send(error.getResponse());
          }
        },
      );
    throw new UnauthorizedException();
  }
}
