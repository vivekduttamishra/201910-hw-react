"use strict";
var Human = /** @class */ (function () {
    /*
    private name:string;
    private email:string;

    constructor(name:string,email:string){
        this.name=name;
        this.email=email;
    }
    */
    function Human(_name, _email) {
        this._name = _name;
        this._email = _email;
    }
    Object.defineProperty(Human.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            if (value.indexOf("@") !== -1)
                this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Human.prototype.toString = function () {
        return "Human [Name=" + this.name + ",Email=" + this.email + "]";
    };
    Human.prototype.work = function () {
        console.log(this.name + " works!!!");
    };
    return Human;
}());
var h1 = new Human('Vivek', 'vivek@conceptarchitect.in');
console.log(h1);
console.log(h1.name); //internally calls h1.name() get function
h1.email = 'vivek'; //calls h1.set name('vivek') function
console.log(h1);
h1.email = '@vivek'; //should allows adding this text
console.log(h1);
