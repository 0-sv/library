addBookToLibrary(new Book("The Hobbit", "Tolkien", 300, true));

function render(library, table) {
    library.forEach(function (book) {
        table.appendChild(book.createTableRow());
    });
}

render(myLibrary, document.getElementsByTagName("table")[0])