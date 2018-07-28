"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var unary = require("lodash/unary");
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
exports.Unary = factory_1.DecoratorFactory.createDecorator(new factory_1.DecoratorConfig(unary, new applicators_1.PreValueApplicator(), { optionalParams: true }));
exports.unary = exports.Unary;
exports.default = exports.Unary;
//# sourceMappingURL=unary.js.map