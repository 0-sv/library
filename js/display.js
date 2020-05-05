let myLibrary = [];
let myTable = document.getElementsByTagName("table")[0]

function createTableRow (book) {
    const tr = document.createElement("tr");
    Object.values(book).forEach(function (v) {
        const col = tr.insertCell(-1);
        col.innerHTML = v;
    });
    return tr;
}

function createTableHeaderRow (book) {
    const tr = document.createElement("tr");
    Object.keys(book).forEach(function (k) {
        const th = document.createElement("th");
        th.innerHTML = k;
        tr.appendChild(th);
    })
    return tr;
}

function renderTable() {
    myTable.innerHTML = "";
    myTable.appendChild(createTableHeaderRow(new Book()));
    myLibrary.forEach(function (book) {
        myTable.appendChild(createTableRow(book));
    });
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}