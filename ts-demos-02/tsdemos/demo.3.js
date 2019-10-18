"use strict";
var Person = /** @class */ (function () {
    function Person(name, email, phone) {
        if (email === void 0) { email = ""; }
        if (phone === void 0) { phone = ""; }
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    //return is available in TYPESCRIPT not in ES2015
    Person.prototype.toString = function () {
        return "Person[" + this.name + "," + this.email + "," + this.phone + "]"; //ES2015
    };
    //... is available in ES2015
    // static and void is part of Typescript
    Person.printList = function () {
        var people = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            people[_i] = arguments[_i];
        }
        //for-of is part of ES2015
        for (var _a = 0, people_1 = people; _a < people_1.length; _a++) {
            var person_1 = people_1[_a];
            console.log(person_1.name + "\t" + person_1.email + "\t" + person_1.phone);
        }
    };
    return Person;
}());
(function () {
    var p1 = new Person("Vivek", "vivek@conceptarchitect.in", "9036084835");
    var p2 = new Person("Sanjay", "san@gmail.com");
    var p3 = new Person('Shivanshi', '', "999393939");
    Person.printList(p1, p2, p3);
})();
