"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
exports.CurrentUser = (0, common_1.createParamDecorator)((data, context) => {
    var _a;
    const ctx = graphql_1.GqlExecutionContext.create(context);
    const c = ctx.getContext();
    return ((_a = c === null || c === void 0 ? void 0 : c.req) === null || _a === void 0 ? void 0 : _a.user) || c.user;
});
//# sourceMappingURL=currentUser.decorator.js.map