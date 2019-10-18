"use strict";
/// <reference path="./logger.ts" />
var Greeter = /** @class */ (function () {
    function Greeter(name) {
        this.name = name;
    }
    Greeter.prototype.greet = function () {
        log("Hello " + this.name);
    };
    return Greeter;
}());
