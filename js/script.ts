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

const plus = document.getElementById('add');
const form = document.querySelector('.newBook');

let shelf: Book[] = [];

const book = new Book("thomas", "bob", 3, true)
