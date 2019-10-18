"use strict";
//you can specify the type
function avg() {
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
console.log('avg(2,3)', avg(2, 3));
console.log('avg(2,3,9,5)', avg(2, 3, 9, 4));
console.log('avg(10,20,30)', avg(10, 20, 30));
console.log('avg("hello","world")', avg("hello", "world"));
