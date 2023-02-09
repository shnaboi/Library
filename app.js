function Book(title, author, pages, yn) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.yn = yn;
    this.info = () => `${title} by ${author}, ${pages} pages, ${yn}`;
}

// function Fiction() {};
// Fiction.prototype = Object.create(Book.prototype);

let test = new Book('a', 'b', 69, 'yes');



console.log(test)