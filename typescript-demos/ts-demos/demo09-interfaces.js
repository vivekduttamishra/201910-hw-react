"use strict";
var FixedStack = /** @class */ (function () {
    function FixedStack() {
        this.values = [];
    }
    FixedStack.prototype.push = function (obj) {
        this.values.push(obj);
    };
    FixedStack.prototype.pop = function () {
        if (this.isEmpty())
            throw Error('Stack UnderFlow');
        return this.values.pop();
    };
    FixedStack.prototype.isEmpty = function () {
        return values.length === 0;
    };
    FixedStack.prototype.isFull = function () {
        return false;
    };
    return FixedStack;
}());
