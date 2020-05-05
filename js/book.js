class Book {
    constructor ({ title = "Title", author = "Author", nPages = "Number of Pages", isRead = true  } = {}) {
        this.title = title;
        this.author = author;
        this.nPages = nPages;
        this.isRead = isRead;
    }
}