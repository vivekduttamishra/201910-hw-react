"use strict";
var rect = {
    length: 20,
    width: 40
};
var road = {
    length: 160,
    endPoint1: 'Bangalore',
    endPoint2: 'Mysore'
};
var person = {
    name: 'Vivek'
};
function printLength(obj) {
    console.log("length of " + obj + " is " + obj.length);
}
var Movie = /** @class */ (function () {
    function Movie(title, length) {
        this.title = title;
        this.length = length;
    }
    Movie.prototype.toString = function () {
        return "Movie[" + this.title + "]";
    };
    return Movie;
}());
(function () {
    printLength(rect);
    printLength(road);
    //printLength(person); //not lengthy
    printLength('Hello World');
    printLength(new Movie('Harry Potter 1', 132));
})();
