"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var once = require("lodash/once");
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
/**
 * Creates a function that is restricted to invoking func once. Repeat calls to the function return the value of the first invocation.
 * This is shared across all instances of the class.
 * @example
 * const value = 0;
 *
 * class MyClass {
 *   @Once()
 *   fn(): number {
 *     return ++value;
 *   }
 * }
 *
 * const myClass = new MyClass();
 * const myClass2 = new MyClass();
 *
 * myClass.fn(); //=> 1
 * myClass2.fn(); //=> 1
 */
exports.OnceAll = factory_1.DecoratorFactory.createDecorator(new factory_1.DecoratorConfig(once, new applicators_1.PreValueApplicator(), { setter: true, optionalParams: true }));
exports.onceAll = exports.OnceAll;
exports.default = exports.OnceAll;
//# sourceMappingURL=onceAll.js.map