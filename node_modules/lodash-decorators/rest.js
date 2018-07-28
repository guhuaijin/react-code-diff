"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rest = require("lodash/rest");
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
exports.Rest = factory_1.DecoratorFactory.createDecorator(new factory_1.DecoratorConfig(rest, new applicators_1.PreValueApplicator(), { optionalParams: true }));
exports.rest = exports.Rest;
exports.default = exports.Rest;
//# sourceMappingURL=rest.js.map