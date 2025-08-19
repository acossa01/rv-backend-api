"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = void 0;
const graphql_1 = require("@nestjs/graphql");
var Roles;
(function (Roles) {
    Roles["USUARIO_COMUM"] = "USUARIO_COMUM";
    Roles["MEDICO"] = "MEDICO";
    Roles["ESTUDANTE"] = "ESTUDANTE";
})(Roles = exports.Roles || (exports.Roles = {}));
(0, graphql_1.registerEnumType)(Roles, {
    name: 'UserRole',
    description: 'Tipos de usuários do sistema de realidade virtual para oftalmologia',
});
//# sourceMappingURL=role.enum.js.map