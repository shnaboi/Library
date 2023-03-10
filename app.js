const BookDiv = document.getElementsByClassName('book-div')

let myLibrary = [{
    title: "bible", 
    author: "Jesus", 
    pages: "69420", 
    yn: "no"
    }];

function Book(title, author, pages, yn) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.yn = yn;
    this.info = () => `${title} by ${author}, ${pages} pages, ${yn}`;
}

function addBook() {
    
}
function pushBook() {
    myLibrary.push()
}



// function Fiction() {};
// Fiction.prototype = Object.create(Book.prototype);

let test = new Book('a', 'b', 69, 'yes');

BookDiv.textContent = "test";

console.log(test);
console.log(myLibrary)