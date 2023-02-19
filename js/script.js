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
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const form = document.getElementById('bookForm');
addBook.addEventListener('click', (e) => {
    e.preventDefault();
    display.setAttribute('style', 'visiblity: hidden;');
    const book = new Book(title.value, author.value, Number(pages.value), Boolean(read.value));
    shelf.push(book);
    createBook(book);
    form.reset();
});
const library = document.querySelector(".library");
function createBook(value) {
    const div = document.createElement('div');
    div.classList.add('book');
    const title = document.createElement('h1');
    title.innerText = value.Title.charAt(0).toUpperCase() + value.Title.substring(1, value.Title.length);
    div.appendChild(title);
    const author = document.createElement('h2');
    author.innerText = value.Author.charAt(0).toUpperCase() + value.Author.substring(1, value.Author.length);
    div.appendChild(author);
    const pages = document.createElement('h4');
    pages.innerText = value.Pages.toString();
    div.appendChild(pages);
    const read = document.createElement('h6');
    if (value.Read) {
        read.innerText = "Book is read!";
    }
    else {
        pages.innerText = "Book not read!";
    }
    div.appendChild(read);
    library.appendChild(div);
}
//# sourceMappingURL=script.js.map