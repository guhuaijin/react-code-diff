"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPrototypeAccess(context, target) {
    return context === target
        || (context.constructor !== target.constructor
            && Object.getPrototypeOf(this).constructor === target.constructor);
}
exports.isPrototypeAccess = isPrototypeAccess;
//# sourceMappingURL=isPrototypeAccess.js.map