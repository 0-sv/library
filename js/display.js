function renderTable(library, table) {
    table.innerHTML = "";
    table.appendChild(new Book().createTableHeaderRow());
    library.forEach(function (book) {
        table.appendChild(book.createTableRow());
    });
}

const table = document.getElementsByTagName("table")[0]
renderTable(myLibrary, table)