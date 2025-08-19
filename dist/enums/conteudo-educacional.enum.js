"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoConteudo = void 0;
const graphql_1 = require("@nestjs/graphql");
var TipoConteudo;
(function (TipoConteudo) {
    TipoConteudo["GERAL"] = "GERAL";
    TipoConteudo["APRENDIZADO_CLINICO"] = "APRENDIZADO_CLINICO";
    TipoConteudo["CIRURGIA"] = "CIRURGIA";
})(TipoConteudo = exports.TipoConteudo || (exports.TipoConteudo = {}));
(0, graphql_1.registerEnumType)(TipoConteudo, {
    name: 'TipoConteudo',
    description: 'Tipos de conteúdo educacional disponíveis na plataforma VR',
});
//# sourceMappingURL=conteudo-educacional.enum.js.map