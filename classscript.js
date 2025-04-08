class Book {
    constructor(name, pages) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.pages = pages;
    }
}

class Library {
    constructor() {
        this.libraryShelf = [];
    }

    addBook(book) {
        this.libraryShelf.push(book);
        console.log(`Book added: ${book.name} (ID: ${book.id})`);
    }

    listBooks() {
        console.log("Books in the library:");
        this.libraryShelf.forEach((book, index) => {
            console.log(`${index + 1}. ${book.name} - ${book.pages} pages (ID: ${book.id})`);
        });
    }
}

// Create a library instance
let library = new Library();

// Create book instances
let book1 = new Book("Almanack of Naval", 100);
let book2 = new Book("Clean Code", 464);

// Add books to the library
library.addBook(book1);
library.addBook(book2);

// List all books in the library
library.listBooks();