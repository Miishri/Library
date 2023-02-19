class Book {
    private title: string;
    private author:string;
    private pages:number;
    private read:boolean;

    constructor(title:string, author:string, pages:number, read:boolean) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    
    get Author(): string {
        return this.author;
    }
    get Title(): string {
        return this.title;
    }
    get Pages(): number {
        return this.pages;
    }
    get Read(): boolean {
        return this.read;
    }

    set Author(value: string) {
        this.author = value;
    }
    set Title(value: string){
        this.title = value;
    }
    set Pages(value: number) {
        this.pages = value;
    }
    set Read(value: boolean) {
        this.read = value;
    }
}

let shelf: Book[] = [];
const book = new Book("thomas", "bob", 3, true);

const plus = document.getElementById('add');
const display = document.querySelector('.newBook');

plus.addEventListener('click', () => {
    display.setAttribute('style', 'visiblity: visible;');
})

const addBook = document.getElementById('addButton');
const title: HTMLInputElement = <HTMLInputElement> document.getElementById("title");
const author: HTMLInputElement = <HTMLInputElement> document.getElementById("author");
const pages: HTMLInputElement = <HTMLInputElement> document.getElementById("pages");
const read: HTMLInputElement = <HTMLInputElement> document.getElementById("read");

const form: HTMLFormElement = <HTMLFormElement> document.getElementById('bookForm');
addBook.addEventListener('click', (e) => {
    e.preventDefault();
    display.setAttribute('style', 'visiblity: hidden;');
    const book = new Book(title.value, author.value, Number(pages.value), Boolean(read.value));
    shelf.push(book);
    createBook(book);
    form.reset();  
})

const library = document.querySelector(".library");

function createBook(value: Book) {
    const div = document.createElement('div');
    div.classList.add('book');

    const title = document.createElement('h1');
    title.innerText = value.Title.charAt(0).toUpperCase() + value.Title.substring(1, value.Title.length);
    div.appendChild(title);

    const author = document.createElement('h2');
    author.innerText = value.Author.charAt(0).toUpperCase() + value.Author.substring(1, value.Author.length)
    div.appendChild(author);

    const pages = document.createElement('h4');
    pages.innerText = value.Pages.toString();
    div.appendChild(pages);

    const read = document.createElement('h6');
    if (value.Read) {
        read.innerText = "Book is read!";
    }else {
        pages.innerText = "Book not read!";
    }
    div.appendChild(read);

    library.appendChild(div);
}