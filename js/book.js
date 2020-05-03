let myLibrary = [];
function addBookToLibrary (book) {
    myLibrary.push(book);
}

class Book {
    constructor ({ title = "Title", author = "Author", nPages = "Number of Pages", isRead = true } = {}) {
        this.title = title;
        this.author = author;
        this.nPages = nPages;
        this.isRead = isRead;
    }
}

Book.prototype.createTableRow = function () {
    const tr = document.createElement("tr");
    Object.values(this).forEach(function (v) {
        const col = tr.insertCell(-1);
        col.innerHTML = v;
    }) 
    return tr;
}

Book.prototype.createTableHeaderRow = function () {
    const tr = document.createElement("tr");
    Object.keys(this).forEach(function (k) {
        const th = document.createElement("th");
        th.innerHTML = k;
        tr.appendChild(th);
    })
    return tr;
}