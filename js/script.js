"use strict";
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    get Author() {
        return this.author;
    }
    get Title() {
        return this.title;
    }
    get Pages() {
        return this.pages;
    }
    get Read() {
        return this.read;
    }
    set Author(value) {
        this.author = value;
    }
    set Title(value) {
        this.title = value;
    }
    set Pages(value) {
        this.pages = value;
    }
    set Read(value) {
        this.read = value;
    }
}
let shelf = [];
const book = new Book("thomas", "bob", 3, true);
const plus = document.getElementById('add');
const display = document.querySelector('.newBook');
plus.addEventListener('click', () => {
    display.setAttribute('style', 'visiblity: visible;');
});
const addBook = document.getElementById('addButton');
const form = document.getElementById('bookForm');
addBook.addEventListener('click', (e) => {
    e.preventDefault();
    display.setAttribute('style', 'visiblity: hidden;');
});
//# sourceMappingURL=script.js.map