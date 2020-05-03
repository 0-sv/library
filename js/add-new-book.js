const btn = document.getElementsByTagName("button")[0];
const table = document.getElementsByTagName("table")[0];
btn.addEventListener("click", function (e) {
    const form = document.createElement("form");
    table.parentNode.insertBefore(form, table.nextSibling);
})