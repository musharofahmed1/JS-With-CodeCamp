//step: 1
let library = [{
    //step: 2: Inside array create  object
    title: "Your Next Five Moves: Master the Art of Business Strategy",
    author: "Patrick Bet-David and Greg Dinkin",
    about: "A book on how to plan ahead",
    pages: 320
 },

 //another obj
  {
    title: "Atomic Habits",
    author: "James Clear",
    about: "A practical book about discarding bad habits and building good ones",
    pages: 320
  }

];

function displayBooks(books){
  return books.map(book => `${book.title}, ${book.author},${book.pages}`).join();
}

function getBookSummaries(booksArray){
 const result = booksArray.map(books => books.about);
 return result;
}

function getBooksByAuthor(bookObjects,authorName){
  const result = bookObjects.filter(authorN => authorN.author==authorName);
  return result;
}
function getTotalPages(booksArray) {
  return booksArray.reduce((total, book) => total + book.pages, 0);
}

const libraryBooks = displayBooks(library);
const bookSummaries = getBookSummaries(library);
const booksByArvidKahl = getBooksByAuthor(library, "Arvid Kahl");
const totalPagesOfBooksInLibrary = getTotalPages(library);

console.log(libraryBooks);
console.log(bookSummaries);
console.log(booksByArvidKahl);
console.log(totalPagesOfBooksInLibrary);

