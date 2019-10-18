"use strict";
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.slope = function () {
        return this.y / this.x;
    };
    Point.prototype.toString = function () {
        return "Point(" + this.x + "," + this.y + ")";
    };
    Point.prototype.distance = function (p2) {
        var dx = p2.x - this.x;
        var dy = p2.y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    return Point;
}());
var p1 = new Point(5, 5);
console.log("p1 is " + p1);
var origin = new Point(0, 0);
//Point.prototype.toString= function(){return  `Point ${this.x} ${this.y}`;};
console.log("distance between " + p1 + " and " + origin + " is " + p1.distance(origin));
