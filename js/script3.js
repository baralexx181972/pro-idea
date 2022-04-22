const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure", "biopic"],
    rating: 8.38,
    // location: {
    //     country: "Jamaica",
    //     city: "Ocho Rios",
    //   }

};

book.pageCount = 849;
book.location = {};
book.location.city = 'fff';
book.location.town = 'ddd';
// book.genres = "love story";
console.log(book);

// const bookShelf = {
//   books: ["The Last Kingdom", "Drakula"],
//   getBooks() {
//     return this.books
//   },
//   addBook(bookName){
//       this.books.push(bookName);
//   },
//   removeBook(bookName){
//       const bookIndex = this.books.indexOf(bookName);
//       console.log(bookIndex);
//       this.books.splice(bookIndex, 2);
//   },
// };

// bookShelf.autors = ['name', 'year'];

// console.log(bookShelf);

// // Перед точкой стоит объект bookShelf,
// // поэтому при вызове метода, this будет хранить ссылку на него.
// console.log(bookShelf.getBooks());
// bookShelf.addBook('Batman');
// console.log(bookShelf.getBooks());
// bookShelf.removeBook('Drakula');
// console.log(bookShelf.getBooks());

