const plus = document.getElementById('add');
const form = document.querySelector('.newBook');

let bookShelf = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    
    author() {
        return this.author;
    }
    title() {
        return this.title;
    }
    pages() {
        return this.pages;
    }
    read() {
        return this.read;
    }
}

const makeBook = new Book("thomas", "bob", )