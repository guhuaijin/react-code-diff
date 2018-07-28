"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
var utils_1 = require("./utils");
/**
 * Returns the first argument from the function regardless of
 * the decorated functions return value.
 */
exports.Tap = factory_1.DecoratorFactory.createDecorator(new factory_1.DecoratorConfig(function (fn) { return utils_1.returnAtIndex(fn, 0); }, new applicators_1.PreValueApplicator(), { optionalParams: true }));
exports.tap = exports.Tap;
exports.default = exports.Tap;
//# sourceMappingURL=tap.js.map