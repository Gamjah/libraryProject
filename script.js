// Book Array
const myLibrary = [];

// Book Constructor
function Book(title, pages) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.pages = pages;
}

// take params, create a book then store it in the array
function addBookToLibrary(book) {
    myLibrary.push(book);
}

const book1 = new Book("The Great Gatsby", 180)
addBookToLibrary(book1);
console.log(myLibrary);

