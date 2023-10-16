const myLibrary = [];

function createBook(title, author, pages, read) {
    const getName = () => title;
    const getAuthor = () => author;
    const getPages = () => pages;
    const isRead = () => read;
    const setRead = (value) => {
        read = value;
    }

    return { getName, getAuthor, getPages, isRead, setRead };
}

function addBookToLibrary(name, author, pages, read) {
    const book = createBook(name, author, pages, read);
    myLibrary.push(book);
}

function clearBooksGrid() {
    const grid = document.getElementById("books-grid");
    const addButton = grid.lastChild;
    grid.innerHTML = "";
    grid.appendChild(addButton);
}