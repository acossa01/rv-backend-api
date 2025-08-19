"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusSala = exports.TipoSala = void 0;
const graphql_1 = require("@nestjs/graphql");
var TipoSala;
(function (TipoSala) {
    TipoSala["COMUM"] = "COMUM";
    TipoSala["TECNICA"] = "TECNICA";
    TipoSala["CIRURGIA"] = "CIRURGIA";
})(TipoSala = exports.TipoSala || (exports.TipoSala = {}));
var StatusSala;
(function (StatusSala) {
    StatusSala["DISPONIVEL"] = "DISPONIVEL";
    StatusSala["EM_USO"] = "EM_USO";
    StatusSala["MANUTENCAO"] = "MANUTENCAO";
})(StatusSala = exports.StatusSala || (exports.StatusSala = {}));
(0, graphql_1.registerEnumType)(TipoSala, {
    name: 'TipoSala',
    description: 'Tipos de salas disponíveis na plataforma VR',
});
(0, graphql_1.registerEnumType)(StatusSala, {
    name: 'StatusSala',
    description: 'Status das salas VR',
});
//# sourceMappingURL=tipo-sala.enum.js.map