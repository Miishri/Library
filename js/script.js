var Book = /** @class */ (function () {
    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    Object.defineProperty(Book.prototype, "Author", {
        get: function () {
            return this.author;
        },
        set: function (value) {
            this.author = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "Title", {
        get: function () {
            return this.title;
        },
        set: function (value) {
            this.title = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "Pages", {
        get: function () {
            return this.pages;
        },
        set: function (value) {
            this.pages = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "Read", {
        get: function () {
            return this.read;
        },
        set: function (value) {
            this.read = value;
        },
        enumerable: false,
        configurable: true
    });
    return Book;
}());
var plus = document.getElementById('add');
var form = document.querySelector('.newBook');
var shelf = [];
var book = new Book("thomas", "bob", 3, true);
//# sourceMappingURL=script.js.map