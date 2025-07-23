// ✅ Array of book objects
const books = [
  { title: "Rise Of Morning Shift", authorName: "Musharof A Musa", releaseYear: 2022 },
  { title: "Journey Of Next Genious", authorName: "Md Shakil Talukder", releaseYear: 2023 },
  { title: "Negetive Side of Smartphone", authorName: "Mahfuj Hussain Nadim", releaseYear: 2024 },
  { title: "1984", authorName: "George Orwell", releaseYear: 1949 },
  { title: "Brave New World", authorName: "Aldous Huxley", releaseYear: 1932 },
  { title: "Fahrenheit 451", authorName: "Ray Bradbury", releaseYear: 1953 },
  { title: "To Kill a Mockingbird", authorName: "Harper Lee", releaseYear: 1960 }
];


//Function to compare two book objects by their releaseYear
function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

/*
Filter books released on or before 1950
- .filter() method creates a new array containing only the books where releaseYear is 1950 or earlier
- This new array is saved in 'filteredBooks'
*/
let filteredBooks = books.filter(book => book.releaseYear <= 1950);

filteredBooks.sort(sortByYear);

