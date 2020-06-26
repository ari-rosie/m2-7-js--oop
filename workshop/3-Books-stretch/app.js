class Book {
    constructor(title, genre, author, isRead, img) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = isRead || false;
        this.img = img;
    }
}

class BookList {
constructor() {
    this.books = [];
    this.lastRead = null;
    this.currentlyReading = null;
}

add = (Book) => {
    this.books.push(Book);
    if (!this.currentlyReading) this.currentlyReading = Book;
}

getNumRead = () => {
    let read = 0;
    this.books.forEach(book => {
    if(book.isRead) read++;
    });
    return read;
}

getNumUnread = () => {
    let unread = 0;
    this.books.forEach(book => {
    if(!book.isRead) unread++;
    });
    return unread;
}

finishReading = (title) => {
    let book = this.books.filter((book) => book.title === title);
    this.currentlyReading = null;
    this.lastRead = book;
}

startReading = (title) => {
    let book = this.books.filter((book) => book.title === title);
    this.currentlyReading = book;
}
}

const homeLibrary = new BookList();

homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King','', 'url(imgs/Shiningnovel.jpg)'));
homeLibrary.add(new Book('American Gods', 'Fiction', 'Neil Gaiman','', 'url(imgs/americangods.jpg)'));
homeLibrary.add(
new Book('Eloquent JavaScript', 'Programming', 'Marijn Haverbeke', true, 'url(imgs/eloJS.jpg)')
);
homeLibrary.add(new Book('The Eire Affair', 'Fantasy', 'Jasper Fforde','', 'url(imgs/eyreaffair.jpg)'));
homeLibrary.add(
new Book('The Revisionists', 'Science-fiction', 'thomas Mullen','', 'url(imgs/revisionists.jpg)')
);

homeLibrary.add(new Book('Animal Farm', 'political satire', 'George Orwell', true, 'url(imgs/animalfarm.jpg)'));
homeLibrary.add(new Book('Sulphuric Acid', 'novel', 'Amelie Nothomb', true, 'url(imgs/sulphacid.jpg)'));
homeLibrary.add(new Book('Life of hunger', 'novel', 'Amelie Nothomb', false, 'url(imgs/lifehunger.jpg)'));

//DOM VARIABLE
const library = document.querySelector('#library');
const currentBook = document.querySelector('#current');
const previousBooks = document.querySelector('#previous');

//adding books to HTML library
homeLibrary.books.forEach(book => {
    let bookDiv = document.createElement('DIV');
    bookDiv.setAttribute('class', 'book');
    library.appendChild(bookDiv);
    bookDiv.innerText = `${book.title}`;
    bookDiv.style.backgroundImage = `${book.img}`;
    console.log(book.img);
});

//adding book currently reading
const addCurrentBook = (book) => {
    let bookTitle = document.createElement('h2');
    bookTitle.innerText = `${book.title}`;    
    currentBook.appendChild(bookTitle);}

addCurrentBook(homeLibrary.currentlyReading);