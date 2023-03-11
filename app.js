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

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => `${title} by ${author}, ${pages} pages, ${read}`;
}

function addBook() {
    
}
function pushBook() {
    myLibrary.push()
}

function renderBooks() {
    myLibrary.map((title, index) => {
        createBookItem(title, index)
    })
}


// function Fiction() {};
// Fiction.prototype = Object.create(Book.prototype);

let test = new Book('a', 'b', 69, 'yes');

BookDiv.textContent = "test";

console.log(test);
console.log(myLibrary)