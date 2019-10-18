"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lengthy = /** @class */ (function () {
    function Lengthy(length) {
        this._length = length;
    }
    Object.defineProperty(Lengthy.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (newLength) {
            if (newLength > 0)
                this._length = newLength;
        },
        enumerable: true,
        configurable: true
    });
    return Lengthy;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(length, width) {
        var _this = _super.call(this, length) || this;
        _this.width = width;
        return _this;
    }
    Rectangle.prototype.toString = function () {
        return "Rectangle[" + this.width + "," + this.length + "]";
    };
    return Rectangle;
}(Lengthy));
var Road = /** @class */ (function (_super) {
    __extends(Road, _super);
    function Road(endPoint1, length, endPoint2) {
        var _this = _super.call(this, length) || this;
        _this.EndPoint1 = endPoint1;
        _this.EndPoint2 = endPoint2;
        return _this;
    }
    Road.prototype.toString = function () {
        return this.EndPoint1 + "<--" + this.length + "-->" + this.EndPoint2;
    };
    return Road;
}(Lengthy));
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.toString = function () {
        return "Person [ " + this.name + " ]";
    };
    return Person;
}());
function printLengthInfo(obj) {
    console.log("length of " + obj + " is " + obj.length);
}
(function () {
    var p1 = new Person('Vivek');
    console.log(p1);
    var rect = new Rectangle(3, 4);
    var road = new Road('Bangalore', 160, 'Mysore');
    printLengthInfo(rect);
    printLengthInfo(road);
    //printLengthInfo(p1); //not lengthy
})();
