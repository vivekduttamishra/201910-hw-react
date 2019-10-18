"use strict";
function log(message) {
    console.log(message);
}
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
///<reference path="./greeter.ts" />
var greeter = new Greeter("Javascript");
greeter.greet();
