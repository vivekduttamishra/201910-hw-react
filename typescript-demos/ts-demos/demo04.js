"use strict";
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.toString = function () {
        return "Person [Name=" + this.name + ",Age=" + this.age + "]";
    };
    return Person;
}());
