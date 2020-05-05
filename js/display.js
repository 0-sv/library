let myLibrary = [];
let myTable = document.getElementsByTagName("table")[0]

function createTableHeaderRow (book) {
    const tr = document.createElement("tr");
    Object.keys(book).forEach(function (k) {
        const th = document.createElement("th");
        th.innerHTML = k;
        tr.appendChild(th);
    })
    return tr;
}

function createTableRow (book) {
    const tr = document.createElement("tr");
    Object.values(book).forEach(function (v) {
        const col = tr.insertCell(-1);
        col.innerHTML = v;
    });
    return tr;
}

function renderTable() {
    myTable.innerHTML = "";
    myTable.appendChild(createTableHeaderRow(new Book()));
    myLibrary.forEach(function (book) {
        myTable.appendChild(createTableRow(book));
    });
}

function addBookToLibrary(bookParam) {
    myLibrary.push(new Book(bookParam));
    renderTable();
    const nodes = document.querySelectorAll("tr");
    let idx = 0;
    nodes.forEach(function (n) {
        n.setAttribute("id", idx);
        idx++;
    });
}