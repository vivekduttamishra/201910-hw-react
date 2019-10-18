define(["require", "exports", "./greeter", "./greeter"], function (require, exports, g, greeter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var greeter = new g.Greeter("Typescript");
    greeter.greet();
    var greeter2 = new greeter_1.Greeter('Javascript');
});
