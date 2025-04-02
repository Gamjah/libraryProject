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

const book1 = new Book("The Great Gatsby", 180);
addBookToLibrary(book1);

const book2 = new Book("Tantric massages", 100);
addBookToLibrary(book2);

function arrayChecker(array) {
    for (let i =0; i < array.length; i++ ){
        console.log(array[i])
    }
}

document.getElementById("bookForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    console.log("Form submitted!"); // Debugging log

    // Retrieve input values
    const title = document.getElementById("name").value;
    const pages = parseInt(document.getElementById("pages").value, 10);

    // Create a new book and add it to the library
    const newBook = new Book(title, pages);
    addBookToLibrary(newBook);

    // Log the updated library
    console.log("Updated library:", myLibrary);
    arrayChecker(myLibrary);
});