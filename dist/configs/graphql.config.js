"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const configs = config_1.default.get('graphql');
exports.default = Object.assign(Object.assign({}, configs), { cors: true, autoSchemaFile: true, context: ({ req, connection }) => connection ? { req: connection.context } : { req } });
//# sourceMappingURL=graphql.config.js.map