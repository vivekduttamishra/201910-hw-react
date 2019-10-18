"use strict";
var books = [
    { title: "Harry Potter Part 1", author: "J.K.Rowling", price: 250 },
    { title: "Harry Potter Part 2", author: "J.K.Rowling", price: 150 },
    { title: "Harry Potter Part 3", author: "J.K.Rowling", price: 450 },
    { title: "Harry Potter Part 4", author: "J.K.Rowling", price: 400 },
    { title: "Harry Potter Part 5", author: "J.K.Rowling", price: 500 },
    { title: "Harry Potter Part 6", author: "J.K.Rowling", price: 480 },
    { title: "Harry Potter Part 7", author: "J.K.Rowling", price: 425 },
    { title: "Shiva Triology Part 1", author: "Amish", price: 225 },
    { title: "Shiva Triology Part 2", author: "Amish", price: 350 },
    { title: "Shiva Triology Part 3", author: "Amish", price: 450 }
];
var SearchEngine = /** @class */ (function () {
    function SearchEngine(records) {
        this.records = records;
    }
    SearchEngine.prototype.search = function (condition, param) {
        var result = [];
        for (var _i = 0, _a = this.records; _i < _a.length; _i++) {
            var record = _a[_i];
            if (condition(record, param))
                result.push(record);
        }
        return result;
    };
    ;
    return SearchEngine;
}());
var BookPrinter = /** @class */ (function () {
    function BookPrinter() {
    }
    BookPrinter.print = function (caption, books) {
        console.log(caption);
        for (var i = 0; i < books.length; i++) {
            var book = books[i];
            console.log(book.title + "\t" + book.author + "\t" + book.price);
        }
    };
    return BookPrinter;
}());
BookPrinter.print("All Books", books);
var se = new SearchEngine(books);
var matchAuthor = function (book, authorName) {
    return book.author.toLocaleLowerCase() === authorName.toLocaleLowerCase();
};
var amishBooks = se.search(matchAuthor, "Amish");
BookPrinter.print("Books by Amish", amishBooks);
var matchPartialTitle = function (book, title) {
    return book.title.toLocaleLowerCase().indexOf(title.toLocaleLowerCase()) >= 0;
};
var harryPotterBooks = se.search(matchPartialTitle, "Harry");
BookPrinter.print("Harry Potter Books", harryPotterBooks);
var matchPriceRange = function (book, range) {
    return book.price >= range.min && book.price < range.max;
};
var midRangeBooks = se.search(matchPriceRange, { min: 400, max: 500 });
BookPrinter.print("Books in range 400-500", midRangeBooks);
