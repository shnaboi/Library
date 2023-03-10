const BookDiv = document.querySelector('.book-div')

let myLibrary = [{
    title: "bible", 
    author: "Jesus", 
    pages: "69420", 
    read: false
    }, 
    {
    title: "book2", 
    author: "BallsAss", 
    pages: "12", 
    read: true
    }];

// a function to append info of book to card
function createBookElement(el, content, className) {
    const element = document.createElement(el);
    element.textContent = content;
    element.setAttribute('class', className);
    return element;
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
    bookItem.appendChild(
        createBookElement('h1', `Read?: ${book.read}`, "book-info"));
    BookDiv.insertAdjacentElement("afterbegin", bookItem);
}

// a function to display books on document
function renderBooks() {
    myLibrary.map((book, index) => {
        createBookItem(book, index)
    })
}

renderBooks();

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => `${title} by ${author}, ${pages} pages, ${read}`;
}

// a function to add book in document
function addBook() {
    
}

// a function to push user made book to myLibrary
function pushBook() {
    myLibrary.push()
}

// function Fiction() {};
// Fiction.prototype = Object.create(Book.prototype);

let test = new Book('a', 'b', 69, 'yes');

console.log(test);
console.log(myLibrary)