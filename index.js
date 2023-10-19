const myLibrary = [];

function createBook(title, author, pages, read) {
    const getTitle = () => title;
    const getAuthor = () => author;
    const getPages = () => pages;
    const isRead = () => read;
    const setRead = (value) => {
        read = value;
    }

    return { getTitle, getAuthor, getPages, isRead, setRead };
}

function addBookToLibrary(name, author, pages, read) {
    const book = createBook(name, author, pages, read);
    const bookCard = createHTMLBook(book);
    const booksGrid = document.getElementById("books-grid");
    booksGrid.insertBefore(bookCard, booksGrid.lastChild.previousSibling);
    myLibrary.push(book);
}

function createHTMLBook(bookData) {
    const book = document.createElement("div");
    book.className = "book-card grid-elem";

    const info = document.createElement("div");
    info.className = "book-data";
    book.appendChild(info);

    const title = document.createElement("div");
    title.innerText = `"${bookData.getTitle()}"`;
    title.className = "book-title";
    info.appendChild(title);

    const author = document.createElement("div");
    author.innerText = bookData.getAuthor();
    author.className = "book-author";
    info.appendChild(author);

    const nPages = bookData.getPages();
    const pages = document.createElement("div");
    pages.innerText = `${nPages} page${nPages > 1 ? 's' : null}`;
    pages.className = "book-pages";
    info.appendChild(pages);

    const readButton = document.createElement("button");
    readButton.onclick = () => {
        bookData.setRead(!bookData.isRead());
        book.classList.replace(bookData.isRead() ? "not-read" : "read", bookData.isRead() ? "read" : "not-read");
        readButton.innerText = bookData.isRead() ? "Not read" : "Read";
    };
    book.classList.add(bookData.isRead() ? "read" : "not-read");
    readButton.className = "book-button";
    readButton.innerText = bookData.isRead() ? "Not read" : "Read";
    book.appendChild(readButton);

    return book;
}

function clearBooksGrid() {
    const grid = document.getElementById("books-grid");
    const addButton = grid.lastChild;
    grid.innerHTML = "";
    grid.appendChild(addButton);
}

addBookToLibrary("Prueba", "Dani", 2, false);