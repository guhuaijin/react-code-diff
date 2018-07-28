"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var once = require("lodash/once");
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
/**
 * Creates a function that is restricted to invoking func once. Repeat calls to the function return the value of the first invocation.
 * @example
 * class MyClass {
 *   value: number = 0;
 *
 *   @Once()
 *   fn(): number {
 *     return ++this.value;
 *   }
 * }
 *
 * const myClass = new MyClass();
 *
 * myClass.fn(); //=> 1
 * myClass.fn(); //=> 1
 * myClass.fn(); //=> 1
 */
exports.Once = factory_1.DecoratorFactory.createInstanceDecorator(new factory_1.DecoratorConfig(once, new applicators_1.PreValueApplicator(), { setter: true, optionalParams: true }));
exports.once = exports.Once;
exports.default = exports.Once;
//# sourceMappingURL=once.js.map