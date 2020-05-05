function createForm(book) {
    const form = document.createElement("form");
    Object.keys(book).forEach(function (k) {
        const label = document.createElement("label");
        label.innerHTML = k;

        const input = document.createElement("input");
        input.type = "text";
        input.name = k;

        form.appendChild(label);
        form.appendChild(input);
    });
    
    const submit = document.createElement("input");
    submit.type = "submit";
    form.appendChild(submit);
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let formObj = {};
        document.querySelectorAll('input[type="text"]').forEach(function (node) {
            formObj[node.name] = node.value;
        });
        myLibrary.push(new Book(formObj))
        renderTable(myLibrary, table);
        document.querySelector("form").innerHTML = "";
    });
    return form;
}

const btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", function (e) {
    const form = createForm(new Book());
    this.parentNode.insertBefore(form, this.nextSibling);
})