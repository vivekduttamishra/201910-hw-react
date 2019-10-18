"use strict";
function average() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var number = numbers_1[_a];
        sum += number;
    }
    return sum / numbers.length;
}
console.log('average(1,2,3,4)', average(1, 2, 3, 4));
