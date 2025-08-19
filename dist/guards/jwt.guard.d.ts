import { ExecutionContext } from '@nestjs/common';
import { BlacklistService } from 'src/modules/blacklist/blacklist.service';
declare const JwtGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtGuard extends JwtGuard_base {
    private blacklist;
    constructor(blacklist: BlacklistService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    getRequest(context: ExecutionContext): any;
}
export {};
