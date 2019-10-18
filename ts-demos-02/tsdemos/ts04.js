"use strict";
function listAll(header) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    console.log(header);
    for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
        var value = values_1[_a];
        console.log(value);
    }
    console.log('------------');
}
listAll('First 4 Primes', 2, 3, 5, 7);
listAll('Next 4 Primes', 11, 13, 17, 19);
listAll('Few Indian Leaders', 'Mahatma Gandhi', 'Bhagat Singh');
