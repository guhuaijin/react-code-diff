"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isObject = require("lodash/isObject");
var isFunction = require("lodash/isFunction");
var isString = require("lodash/isString");
function isMethodOrPropertyDecoratorArgs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.length >= 2
        && isObject(args[0])
        && isString(args[1])
        && isFunction(args[0].constructor)
        && args[0].constructor.prototype === args[0];
}
exports.isMethodOrPropertyDecoratorArgs = isMethodOrPropertyDecoratorArgs;
//# sourceMappingURL=isDecoratorArgs.js.map