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

//map function used
function displayBooks(books){
  return books.map(book => `${book.title}, ${book.author},${book.pages}`).join();
}
//map function
function getBookSummaries(booksArray){
 const result = booksArray.map(books => books.about);
 return result;
}

//filter function used to find 
function getBooksByAuthor(bookObjects,authorName){
  const result = bookObjects.filter(authorN => authorN.author==authorName);
  return result;
}

//reduce function used to get output
function getTotalPages(booksArray) {
  return booksArray.reduce((total, book) => total + book.pages, 0);
}


/*Create four new variables: libraryBooks, bookSummaries,
 booksByArvidKahl, and totalPagesOfBooksInLibrary. Set them all to the calling of displayBooks(), 
 getBookSummaries(), getBooksByAuthor(), and getTotalPages() respectively with the appropriate
parameters.

Log all the variables to the console.

With that, your library manager workshop is complete. */

