"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defer = require("lodash/defer");
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
/**
 * Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to func when it's invoked.
 *
 * @param {...*} [args] Additional arguments to invoke the function with
 * @example
 *
 * class MyClass {
 *   value = 100;
 *
 *   @Defer()
 *   add(a) {
 *     this.value += a;
 *   }
 * }
 *
 * const myClass = new MyClass();
 *
 * myClass.add(10);
 *
 * myClass.value; // => 100;
 *
 * setTimeout(() => {
 *   myClass.value; // => 110;
 * }, 0);
 */
exports.Defer = factory_1.DecoratorFactory.createDecorator(new factory_1.DecoratorConfig(defer, new applicators_1.InvokeApplicator(), { setter: true, optionalParams: true }));
exports.defer = exports.Defer;
exports.default = exports.Defer;
//# sourceMappingURL=defer.js.map