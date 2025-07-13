const books = [
  {
    title: "Musa on the go",
    authorName: "Musa",
    releaseYear: 2017
  },
  {
    title: "Musa Never go",
    authorName: "Musa Ahmed",
    releaseYear: 2017
  },
  {
    title: "Musa Will Go",
    authorName: "Steve McConnell", 
    releaseYear: 2004
  }
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}
