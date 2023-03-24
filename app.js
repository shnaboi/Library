const BookDiv = document.querySelector('.book-div');
const addBook = document.querySelector('.add-btn');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.close');

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
})

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
})

addBook.addEventListener('click', () => {
    modal.style.display = 'block';
})

// let myLibrary = [];
let myLibrary = [{
    title: "bible", 
    author: "Jesus", 
    pages: "69420", 
    read: true,
    id: 1
    }, 
    {
    title: "book2", 
    author: "BallsAss", 
    pages: "12", 
    read: true,
    id: 2
    }];

// LOADS LOCOAL STORAGE ON PAGE LOAD
function addLocalStorage() {
    myLibrary = JSON.parse(localStorage.getItem('library'));
    saveLibrary();
}



// a function to append info of book to card
function createBookElement(el, content, className) {
    const element = document.createElement(el);
    element.textContent = content;
    element.setAttribute('class', className);
    return element;
}

// a function to create the read button 
function createReadElement(bookItem, book) {
    let read = document.createElement('div');
    read.setAttribute('class', 'book-read');
    read.appendChild(createBookElement('h1', "Read?", "book-info"));
    let input = document.createElement('input');
    input.setAttribute('type', 'checkbox')
    // input.addEventListener('click', (e) => {
    //     if(e.target.checked) {
    //         bookItem.setAttribute('class', 'read-checked')
    //         book.read = true;
    //     } else {
    //         bookItem.setAttribute('class', 'read-unchecked');
    //         book.read = false;
    //     }
    // });
    // if (book.read) {
    //     input.checked = true;
    //     bookItem.setAttribute('class', 'read-checked')
    // }
    read.appendChild(input);
    return read;
}

// a function to create dom object (card) of book
function createBookItem(book, index) {
    const bookItem = document.createElement('div');
    bookItem.setAttribute('id', index)
    bookItem.setAttribute('key', index)
    bookItem.setAttribute('class', 'card book')
    bookItem.appendChild(
        createBookElement('h1', `Title: ${book.title}`, "book-info"));
    bookItem.appendChild(
        createBookElement('h1', `Author: ${book.author}`, "book-info"));
    bookItem.appendChild(
        createBookElement('h1', `Pages: ${book.pages}`, "book-info"));

    bookItem.appendChild(createReadElement(bookItem, book));

    bookItem.appendChild(createBookButtons());

    bookItem.querySelector('.delete').addEventListener('click', () => {
        deleteBook(index);
    })

    bookItem.querySelector('.edit-btn').addEventListener('click', () => {
        editBook(index);
    })

    BookDiv.insertAdjacentElement("afterbegin", bookItem);
    console.log(index);
}

// a function to add edit & remove buttons with event listeners
function createBookButtons(bookItem, book) {
    const bookButtons = document.createElement('div');
    bookButtons.setAttribute('class', 'book-buttons')
    const removeIcon = document.createElement('button');
    removeIcon.style.backgroundImage = "url('../SVG/book-remove.svg')";
    removeIcon.setAttribute('class', 'delete')
    const editIcon = document.createElement('button');
    editIcon.style.backgroundImage = "url('../SVG/pencil.svg')";
    editIcon.setAttribute('class', 'edit-btn');
    bookButtons.appendChild(editIcon);
    bookButtons.appendChild(removeIcon);
    return bookButtons;
}

function deleteBook(index) {
    myLibrary.splice(index, 1)
    saveLibrary();
}

// CLICKING THE EDIT BUTTON
function editBook(book) {
    modal.style.display = 'block';
    document.querySelector('.form-title').textContent = 'Edit Book';
    let editThis = myLibrary[book];
    // console.log(editThis);
    // console.log(editThis.title)
    document.querySelector('#book-title').value = editThis.title;
    document.querySelector('#book-author').value = editThis.author;
    document.querySelector('#book-pages').value = editThis.pages;
    document.querySelector('#book-read').checked = editThis.read;
    myLibrary.splice(book, 1);
}

// a function to display books on document
function renderBooks() {
    BookDiv.textContent = "";
    myLibrary.map((book, index) => {
        createBookItem(book, index)
    })
}

// SAVE TO LOCAL STORAGE AFTER ADDING / EDITING BOOK
function saveLibrary() {
    localStorage.setItem('library', JSON.stringify(myLibrary));
    renderBooks();
    console.log(myLibrary.length)
}

// Add book / edit book form 
const editBookForm = document.querySelector('.edit-book-form');
editBookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    let newBook = {};
    for (let [key, value] of data) {
        // if (key === "book-read") {
        //     newBook["book-read"] = true;
        // }
        newBook[key] = value;
    } 
    pushBook(newBook["book-title"], 
    newBook["book-author"], 
    newBook["book-pages"], 
    newBook["book-read"]);
    editBookForm.reset();
    modal.style.display = 'none';
})

// a function to push user made book to myLibrary
function pushBook(title, author, pages, read) {
    let id = myLibrary.length;
    if (document.querySelector('.form-title').textContent == 'Edit Book') {
        myLibrary.splice
    }
    myLibrary.push(new Book(title, author, pages, read, id));
    saveLibrary();
}

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = myLibrary.length + 1;
    this.info = () => `${title} by ${author}, has ${pages} pages, ${read}`;
}

// call renderBooks() or addLocalStorage() for testing
renderBooks();
// addLocalStorage();