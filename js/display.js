addBookToLibrary(new Book("The Hobbit", "Tolkien", 300, true));

function renderTable(library, table) {
    table.appendChild(library[0].createTableHeaderRow());
    library.forEach(function (book) {
        table.appendChild(book.createTableRow());
    });
}

renderTable(myLibrary, document.getElementsByTagName("table")[0])