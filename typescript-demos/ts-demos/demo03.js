"use strict";
function average() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, params_1 = params; _a < params_1.length; _a++) {
        var number = params_1[_a];
        sum += number;
    }
    return sum / params.length;
}
var values = [1, 2, 3, 4, 5];
var result = average.apply(void 0, values);
console.log("average of " + values + " is " + result);
