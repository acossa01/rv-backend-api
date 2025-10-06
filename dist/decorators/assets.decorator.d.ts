import { Roles } from '../enums/role.enum';
export declare const Assets: (...roles: Roles[]) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
