let myLibrary = [];
let myTable = document.getElementsByTagName("table")[0]

function createRemoveButton() {
    const button = document.createElement("button");
    button.textContent = "Remove";
    button.setAttribute("class", "remove");
    return button;
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

function createTableRow (book) {
    const tr = document.createElement("tr");
    Object.values(book).forEach(function (v) {
        const col = tr.insertCell(-1);
        col.innerHTML = v;
    });
    const remove = tr.insertCell(-1);
    const removeBtn = createRemoveButton();
    remove.appendChild(removeBtn);
    return tr;
}

function renderTable() {
    myTable.innerHTML = "";
    myTable.appendChild(createTableHeaderRow(new Book()));
    myLibrary.forEach(function (book) {
        myTable.appendChild(createTableRow(book));
    });
    const nodes = document.querySelectorAll("tr");
    let idx = 0;
    nodes.forEach(function (n) {
        n.setAttribute("id", idx);
        idx++;
    });
}

function addBookToLibrary(bookParam) {
    myLibrary.push(new Book(bookParam));
    renderTable();
}