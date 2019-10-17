"use strict";
//implicit user defined type
//explicit defintion
var employees = [
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
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var employee = employees_1[_i];
    if (typeof (employee.name) === 'string')
        console.log(employee.name + " " + employee.email + " " + employee.age);
    else {
        var name_1 = employee.name;
        console.log(name_1.firstName + " " + name_1.lastName + " " + employee.email + " " + employee.age);
    }
}
