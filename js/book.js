let myLibrary = [];
function addBookToLibrary (book) {
    myLibrary.push(book);
}

function Book(title, author, nPages, isRead) {
    this.title = title;
    this.author = author;
    this.nPages = nPages;
    this.isRead = isRead;
}

function BookHeader() {
    this.title = "Title";
    this.author = "Author";
    this.nPages = "Number of Pages";
    this.isRead = "Has been read";
}

BookHeader.prototype = Object.create(Book.prototype);