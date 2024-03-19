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
const bookForm = document.querySelector("form");
const table = document.querySelector("table tbody");

const redRising = new Book("Red Rising", "Pierce Brown", 382, true);
const mistborn = new Book("Mistborn", "Brandon Sanderson", 669, true);

addBookToLibrary(redRising);
addBookToLibrary(mistborn);


function addBookToLibrary(book){
    library.push(book);

    bookIndex = library.indexOf(book);

    table.appendChild(createBookRow(book, bookIndex));
    
    updateDeleteButtonEventListeners();
}

function createBookRow(book, bookIndex){
    const row = document.createElement('tr');

    row.dataset.bookIndex = bookIndex;

    row.appendChild(createCell(book.title));
    row.appendChild(createCell(book.author));
    row.appendChild(createCell(book.pages));
    row.appendChild(createButtonCell("Delete", "delete-button", bookIndex));
    row.appendChild(createCell(book.read));

    return row;
}

function createCell(content){
    const cell = document.createElement('td');
    const cellContent = document.createTextNode(content);

    cell.appendChild(cellContent);

    return cell;
}

function createButtonCell(buttonType, btnClass, bookIndex){
    const cell = document.createElement('td');
    const btn = document.createElement('button');

    const btnContent = document.createTextNode(buttonType);

    btn.dataset.bookIndex = bookIndex;
    btn.classList.add(btnClass);

    btn.appendChild(btnContent);
    cell.appendChild(btn);

    return cell;
}

function updateDeleteButtonEventListeners(){
    let deleteButtons = document.querySelectorAll('.delete-button');

    deleteButtons.forEach((btn) => {
        btn.addEventListener('click', function() {
            const bookIndex = this.dataset.bookIndex;
            delete library[bookIndex];

            const bookRow = btn.parentElement.parentElement;
            bookRow.remove();
        });
    });
}

bookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const newBook = new Book(title, author, pages, read);

    addBookToLibrary(newBook);
    bookForm.reset();
    dialog.close();
});

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});