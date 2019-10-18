"use strict";
//lets create a type called Person
//Person is an alias for type defined here!!!
//p1 is an object
var e1 = {
    name: 'Vivek',
    email: 'vivek@conceptarchitect.in'
};
var e2 = {
    name: { firstName: 'Sanjay' },
    email: 'san@yahoo.com'
};
var e3 = {
    name: { firstName: 'Shivanshi', lastName: 'Mishra' },
    email: 'shivanshi@gmail.com',
    phone: '93939393900'
};
//p3.phone='99399393'; //doesn't work as p3 doesn't have phone
//console.log('phone',person.phone);
function printEmployeeInfo() {
    var people = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        people[_i] = arguments[_i];
    }
    for (var _a = 0, people_1 = people; _a < people_1.length; _a++) {
        var person_1 = people_1[_a];
        var name;
        //which of the possible value name contains? string or Name
        if (typeof (person_1.name) === 'string')
            name = person_1.name;
        else
            name = person_1.name.firstName + " " + (person_1.name.lastName ? person_1.name.lastName : '');
        console.log(name + "\t" + person_1.email + "\t" + person_1.phone);
    }
}
printEmployeeInfo(e1, e2, e3);
