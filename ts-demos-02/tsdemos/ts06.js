"use strict";
//p1 is an object of a new type
//implicitly derived from the current object
//it is not any.
var p1 = {
    name: 'Vivek',
    email: 'vivek@conceptarchitect.in'
};
//the type of p1  only supports name and email
//it doesn't support phone
//p1.phone='9036084835';
var p2 = {
    name: "Sanjay",
    Email: 'san@yahoo.com'
};
p2.phone = '93939393'; //works because p2 is of type any
var p3 = {
    name: 'Shivanshi',
    Email: 'shivanshi@gmail.com',
    phone: '93939393'
};
//p3.phone='99399393'; //doesn't work as p3 doesn't have phone
//console.log('phone',person.phone);
function printPeopleInfo() {
    var people = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        people[_i] = arguments[_i];
    }
    for (var _a = 0, people_1 = people; _a < people_1.length; _a++) {
        var person_1 = people_1[_a];
        console.log(person_1.name + "\t" + person_1.email);
    }
}
printPeopleInfo(p1, p2, p3);
