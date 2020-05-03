let myLibrary = [];

function Book(title, author, nPages, isRead) {
    this.title = title;
    this.author = author;
    this.nPages = nPages;
    this.isRead = isRead;
    this.info = function() {
        let isReadStr = "";
        if (isRead) isReadStr = "read";
        else isReadStr = "not read yet";
        return this.title + " by " + this.author + ", " + this.nPages + " pages, " + isReadStr + ".";
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}