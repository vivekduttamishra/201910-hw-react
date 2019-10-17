"use strict";
//implicit user defined type
;
//explicit defintion
var humans = [
    {
        name: { firstName: 'Vivek', middleName: 'Dutta', lastName: 'Mishra' },
        email: 'vivek@conceptarchitect.in'
    },
    {
        name: { firstName: 'Sanjay', lastName: 'Mall' },
        email: 'sanjay@conceptarchitect.in'
    },
    {
        name: 'Shivanshi Mishra',
        email: 'shivanshi@conceptarchitect.in'
    }
];
for (var _i = 0, humans_1 = humans; _i < humans_1.length; _i++) {
    var human = humans_1[_i];
    if (typeof (human.name) === 'string')
        console.log(human.name + " " + human.email + " " + human.age);
    else {
        var name_1 = human.name;
        console.log(name_1.firstName + " " + name_1.lastName + " " + human.email + " " + human.age);
    }
}
