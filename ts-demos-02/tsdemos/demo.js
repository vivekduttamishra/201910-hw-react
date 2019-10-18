"use strict";
//optional parameter method
function table(value, times) {
    if (times === void 0) { times = 10; }
    for (var i = 1; i <= times; i++) {
        console.log(value + "*" + i, value * i);
    }
}
table(19, 10);
table(17, 5);
table(16);
