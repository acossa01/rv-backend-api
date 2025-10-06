"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusResolver = exports.Status = void 0;
const graphql_1 = require("@nestjs/graphql");
var Status;
(function (Status) {
    Status["ACTIVE"] = "ATIVO";
    Status["INACTIVE"] = "INATIVO";
})(Status || (exports.Status = Status = {}));
(0, graphql_1.registerEnumType)(Status, {
    name: 'Status',
});
exports.StatusResolver = {
    ACTIVE: 'ATIVO',
    INACTIVE: 'INATIVO',
};
