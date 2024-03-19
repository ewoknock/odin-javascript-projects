const library = [];

class Book {
    constructor(title, author, pages, read  = false){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleRead(){
        this.read = !this.read;
    }
}

const dialog = document.querySelector("dialog");
const showButton = document.getElementById("show-dialog-btn");
const closeButton = document.getElementById("close-dialog-btn");
const table = document.querySelector("table tbody");

const redRising = new Book("Red Rising", "Pierce Brown", 382, true);
const mistborn = new Book("Mistborn", "Brandon Sanderson", 669, true);

addBookToLibrary(redRising);
addBookToLibrary(mistborn);


function addBookToLibrary(book){
    library.push(book);

    bookIndex = library.indexOf(book);

    table.appendChild(createBookRow(book, bookIndex));
}

function createBookRow(book, bookIndex){
    const row = document.createElement('tr');

    row.dataset.bookIndex = bookIndex;

    row.appendChild(createCell(book.title));
    row.appendChild(createCell(book.author));
    row.appendChild(createCell(book.pages));
    row.appendChild(createCell("delete placeholder"));
    row.appendChild(createCell(book.read));

    return row;
}

function createCell(content){
    const cell = document.createElement('td');
    const cellContent = document.createTextNode(content);

    cell.appendChild(cellContent);

    return cell;
}

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});