"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bind = require("lodash/bind");
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
/**
 * Creates a function that invokes func with the this binding of thisArg and partials prepended to the arguments it receives.
 *
 * The _.bind.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for partially applied arguments.
 *
 * Note: Unlike native Function#bind, this method doesn't set the "length" property of bound functions.
 * @param {...*} [partials] The argument to be partially applied.
 * @example
 *
 * class MyClass {
 *   @Bind()
 *   bound() {
 *     return this;
 *   }
 *
 *   unbound() {
 *     return this;
 *   }
 * }
 *
 * const myClass = new MyClass();
 *
 * myClass.bound.call(null); // => myClass {}
 * myClass.unbound.call(null); // => null
 */
exports.Bind = factory_1.DecoratorFactory.createInstanceDecorator(new factory_1.DecoratorConfig(bind, new applicators_1.BindApplicator(), {
    optionalParams: true
}));
exports.bind = exports.Bind;
exports.default = exports.Bind;
//# sourceMappingURL=bind.js.map