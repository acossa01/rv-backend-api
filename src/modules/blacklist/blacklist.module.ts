import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlacklistedToken } from './blacklisted-token.entity';
import { BlacklistService } from './blacklist.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([BlacklistedToken])],
  providers: [BlacklistService],
  exports: [BlacklistService],
})
export class BlacklistModule {} 