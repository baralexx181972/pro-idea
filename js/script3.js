// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure", "biopic"],
//     rating: 8.38,
//     // location: {
//     //     country: "Jamaica",
//     //     city: "Ocho Rios",
//     //   }

// };

// book.pageCount = 849;
// book.location = {};
// book.location.city = 'fff';
// book.location.town = 'ddd';
// // book.genres = "love story";
// console.log(book);

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

//1. Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"
// const str = prompt('Какое официальное название JavaScript?').toLowerCase();

// if( str === 'ECMAScript'.toLowerCase()){
//     alert('Верно!');
// } else {
// alert('Не знаете? ECMAScript!');
// }
// ----------------------------------
// /4. Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести стороку "Отменено"
//В противном случае вывксти строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// const userInput = prompt('Введите логин');
// console.log(userInput);

// if (userInput === 'Админ') {
//   const userPass = prompt('Введите пароль');
//   if (userPass) {
//     if (userPass === 'Я главный') {
//       console.log('Здравствуйте');
//     } else {
//       console.log('Неверный пароль');
//     }
//   } else {
//     console.log('Отменено');
//   }
// } else {
//   console.log('Я вас не знаю');
// }

// const userPrint = prompt('Введите логин');
// console.log(userPrint);

// if(userPrint === 'Админ'){
//     const userPass = prompt('Введите пароль');
// if(userPass){
//     if(userPass === 'Я главный'){
//         console.log('Здравствуйте');
//     } else {
//         console.log('Неверный пароль');
//     }

// } else {
//     console.log('Отменено');
// }
// } else {
//     console.log("Я вас не знаю");
// }

// const propName = "name";
// const user = {
//   age: 25,
//   // Имя этого свойства будет взято из значения переменной propName
//   [propName]: "Генри Сибола",
//   inputName(){
//     console.log('Hello');
// },
// };

// console.log(user.age); // "Генри Сибола"
// user.books = {
//     cost: 25,
//     genres: 'thriller',
  
// }
// console.log(user)
// if('cost' in user.books){
//     console.log(user.books.cost);
// }
// for(let key in user){
//     // console.log(key);
//     console.log(`${key} = ${user[key]}`);
// }
// const arr = user;
// console.log(arr === user);
// user.inputName();

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   let propCount = 0;
//   const keys = Object.keys(book);
//   console.log(propCount = keys.length);
//   for ( const key of keys){
// propCount += key.length;
// console.log(propCount);
//   }
//   const values = Object.values(book);
//   console.log(values);
//   console.log(keys);
//   console.log(book[keys]);

//   for( const key of keys){
//     //   console.log(key);
//       console.log(`${key} - ${book[key]}`);
//   }

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "На берегу спокойных вод",
//       author: "Роберт Шекли",
//       rating: 8.51,
//     },
//     {
//       title: "Сон смешного человека",
//       author: "Федор Достоевский",
//       rating: 7.75,
//     },
//   ];
//   const arrTitle = [];
//   const totalRate = 0;
//   for( const book of books){
//       console.log(`${book.author} - ${book.title}`);
    
     
//     //   for(const book of books){
//           arrTitle.push(book.title)
//       }
//       console.log(arrTitle);

//  const countTotalSalary = { mango: 100, poly: 150, alfred: 80 }
//  let totalSalary = 0;
// //  for(const salary of countTotalSalary){
//     const salary = Object.values(countTotalSalary);
//     for (const salaries of salary){
//         totalSalary += salaries;
//     }
//      console.log(totalSalary);

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
//   for(const color of colors){
//     hexColors.push(color.hex);
//     rgbColors.push(Object.values(color.rgb));
//   }
//  console.log(hexColors);
//  console.log(rgbColors);

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {
//       const values = [];
//     for ( const product of products){
//         if (product[productName]){
//             values.push(product[productName]);
//         }
//         }
//         console.log(values);
//     }

// // console.log(Object.values(productName));
  
  
//     // Change code above this line
  
//   getProductPrice('price');

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
//   for( const product of products){
//   if(product.name.includes(productName)){
//     console.log(product.price * product.quantity);
    
//   } else{console.log(0);}

// }
  
//   }
  
//   calculateTotalPrice('Droid');
//     Пиши код выше этой строки

    // function makeTask(data) {
    //     const completed = false;
    //     const category = "General";
    //     const priority = "Normal";
    //     // Change code below this line
    //   return {category, priority, ...data,completed, };
    //     // Change code above this line
    //   }
    //   console.log(
    //   makeTask({
    //     category: "Homemade",
    //      priority: "Low", 
    //      text: "Take out the trash"
    //   }));

    // function add(...args) {
    //     let sum = 0;
    //     for( const arg of args){
    //       sum += arg;
          
    //     }
    //     console.log(sum);
    //     // Change code above this line
        
    //   }
      
    //   add(1, 2, 3, 4,);
    // function addOverNum(firstNumber, ...args) {
    //     let total = 0;
      
    //     for (const arg of args) {
    //       if( firstNumber < arg){
    //       total += arg;
    //       }
    //     }
      
    //     console.log( total);
    //     // Change code above this line
    //   }
    //   addOverNum(7, 1, 3, 5, 10,22,);

    // const products = [
    //         { name: "Radar", price: 1300, quantity: true },
    //         { name: "Scanner", price: 2700, quantity: false},
    //         { name: "Droid", price: 400, quantity: true },
    //         { name: "Grip", price: 1200, quantity: false },
    //       ];

    //       const productByStatus = {
    //           online: [],
    //           offline: [],
    //            }

    //     for( const product of products){
    //     //    if(product.quantity) ?  
    //     product.quantity 

    //     ?  productByStatus.online.push(product.name) 
    //      : productByStatus.offline.push(product.name);
      

    // }
    
    // console.log(productByStatus.online);        

    // console.log(productByStatus.offline);


    // const bookShelf = {
    //     books: ["Последнее королевство"],
    //     getBooks() {
    //       console.log(this);
    //     },
    //   };
    //   bookShelf.getBooks();

    // const bookShelf = {
    //     books: ["The last kingdom", "Haze", "The guardian of dreams"],
    //     updateBook(oldName, newName) {
    //       // Change code below this line
    //       let str = 0;
    //   for( const book of this.books){
    //       if( book === oldName ){
    //           console.log(book);
    //         //  str = this.books.indexOf(book);
    //         //  console.log(str);
    //         console.log(this.books.splice(this.books.indexOf(book),1,newName));
    //         console.log(this.books);
    //       }
    //   }
      
      
      
    //       // Change code above this line
    //     },
    //   };
    //  bookShelf.updateBook("Haze", "Dungeon chronicles");

//     const indices = [];
// const array = ['a', 'b', 'a', 'c', 'a', 'd'];
// const element = 'a';
// let idx = array.indexOf(element);
// while (idx != -1) {
//   indices.push(idx);
//   idx = array.indexOf(element, idx + 1);
// }

// console.log(indices);

// const a = [
//     { x: 1},
//     { y: 2},
//     { z: 3},
// ];
// const b = [...a];
// a[0].x=1000;
// console.log(a);
// console.log(b);

// const book = {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["historical prose", "adventure"],
//         rating: 8.38,
//       };
// const { title, author: writer, genres, rating} = book; 

//       console.log(writer);
//       console.log(title);

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//       // Change code below this line
  
//   for(const potion of this.potions){
//     if(potion === potionName){
//       this.potions.splice(this.potions.indexOf(potion),1)
//     }
//   }
  
//       // Change code above this line
//     },
//   };
//   atTheOldToad.removePotion('Dragon breath');


// const autors = {
//   kivi: 3,
//   poly: 5,
//   sasha: 8,
//   oscar:6,
// };
// const entries = Object.entries(autors);

// for ( const [ name, raiting]  of entries){
//   // const name = entrie[0];
//   // const raiting = entrie[1];
//   // const [ name, raiting] = entrie;
//   console.log(name, raiting);
// }

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     const arrPotion = [];
//     for ( const potion of this.potions){
//       arrPotion.push(potion);
//     }
//     return arrPotion;
//   },
//   addPotion(newPotion) {
//     for( const potion of this.potions){
//     if (potion.name === newPotion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//   }

//     this.potions.push(newPotion);
//     return newPotion;
//   },
//   removePotion(potionName) {
//     // const potionIndex = this.potions.indexOf(potionName);

//     // if (potionIndex === -1) {
//     //   return `Potion ${potionName} is not in inventory!`;
//     // }

//     // this.potions.splice(potionIndex, 1);

//     for( let i = 0; i < this.potions.length; i+=1){
//     // console.log(this.potions[i]);
//       if(potionName === this.potions[i].name){
//         console.log('Yes', potionName);
//         this.potions.splice(i,1);
//         return this.potions;
//       } 

//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   countTotalPrice(){
//     const {potions} = this;
// let total = 0;
// for(const {price} of potions){
//   total += price;
// }
// return total;
//   },
//   updatePotionName(oldName, newName) {
//     console.table(this.potions);
//     // for ( let i = 0; i < this.potions.length; i += 1){
//     //   if(oldName === this.potions[i].name){
//     //     console.log(this.potions[i]);
//     //     this.potions[i].name = newName;
//     //     console.table(this.potions);
//     //     return this.potions;
//     //   }
//     // }
//   //   console.log(this.potions);

//     for( const potion of this.potions){
//       if( potion.name === oldName ){

//         potion.name = newName;
//         console.table(this.potions);
//       }   
//   }
//   return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// // console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// // console.log(atTheOldToad.getPotions());
// // console.log(atTheOldToad.removePotion( "Stone skin"));
//     console.log(atTheOldToad.updatePotionName("Speed potion", "Polymorth"));
// // console.log(atTheOldToad.countTotalPrice());
  
  