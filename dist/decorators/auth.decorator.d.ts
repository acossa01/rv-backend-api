import { Roles } from 'src/enums/role.enum';
export declare const Auth: (...roles: Roles[]) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
