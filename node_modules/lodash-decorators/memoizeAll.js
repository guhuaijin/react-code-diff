"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var memoize = require("lodash/memoize");
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
/**
 * Memoizes a function on the prototype instead of the instance. All instances of the class use the same memoize cache.
 * @param {Function} [resolver] Optional resolver
 */
exports.MemoizeAll = factory_1.DecoratorFactory.createDecorator(new factory_1.DecoratorConfig(memoize, new applicators_1.MemoizeApplicator(), { optionalParams: true }));
exports.memoizeAll = exports.MemoizeAll;
exports.default = exports.MemoizeAll;
//# sourceMappingURL=memoizeAll.js.map