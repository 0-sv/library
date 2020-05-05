const parentTable = document.querySelector("table");
parentTable.addEventListener("click", removeHandler, false);

function removeHandler(e) {
    console.log(e.target.parentNode.parentNode.id);
    myLibrary.splice(parseInt(e.target.parentNode.parentNode.id)-1, 1);
    renderTable();
}