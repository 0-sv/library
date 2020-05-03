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