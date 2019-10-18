"use strict";
/// <reference path="./logger.ts" />
var utils;
(function (utils) {
    var Greeter = /** @class */ (function () {
        function Greeter(name) {
            this.name = name;
        }
        Greeter.prototype.greet = function () {
            utils.log("Hello " + this.name);
        };
        return Greeter;
    }());
    utils.Greeter = Greeter;
})(utils || (utils = {}));
