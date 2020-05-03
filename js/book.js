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

Book.prototype.renderTableRow = function () {
    const tr = document.createElement("tr");
    Object.values(this).forEach(function (v) {
        const col = tr.insertCell(-1);
        col.innerHTML = v;
    }) 
    return tr;
}