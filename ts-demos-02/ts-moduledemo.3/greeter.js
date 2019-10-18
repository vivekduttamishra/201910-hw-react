define(["require", "exports", "./logger"], function (require, exports, logger) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Greeter = /** @class */ (function () {
        function Greeter(name) {
            this.name = name;
        }
        Greeter.prototype.greet = function () {
            logger.log("Hello " + this.name);
        };
        return Greeter;
    }());
    exports.Greeter = Greeter;
});
