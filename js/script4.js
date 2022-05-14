// const doMath =function(a,b,callback){
// const result =  callback(a,b);
// console.log(result);
// }

// const add = function(x,y){
//     return x+y;
// }
// doMath(3,4,add);

//   // Функция высшего порядка
//   function registerGuest(name, callback) {
//     console.log(`Регистрируем гостя ${name}.`, greet(name));
//     callback(name);
//   }

// // Колбэк-функция
// function greet(name) {
//     return `Добро пожаловать ${name}.`;
//   }

//   registerGuest("lkjlkj", greet);

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   }

//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
//   });
//   // Change code below this line

//   makePizza("Ultracheese", function eatPizza(pizzaName){
//     console.log(`Eating pizza ${pizzaName}.`);
//   } );

//   makePizza("Royal Grand",deliverPizza);

// function processCall(recipient) {
//     // Имитируем доступность абонента случайным числом
//     const isRecipientAvailable = Math.random() > 0.5;

//     if (!isRecipientAvailable) {
//       console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//       // Логика активации автоответчика
//     } else {
//       console.log(`Соединяем с ${recipient}, ожидайте...`);
//       // Логика принятия звонка
//     }
//   }

//   processCall("Манго");

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line

//     orderedItems.forEach(function(element) {
//         totalPrice += element;
//     });

//     // Change code above this line
//     console.log(totalPrice);
//   }

//   calculateTotalPrice([1,2,3,4,5,62]);

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line

//     numbers.forEach( function (element) {
//         if ( element > value){
//             filteredNumbers.push(element);
//         }
//     });

//     // Change code above this line
//     console.log(filteredNumbers);
//     return filteredNumbers;

//   }

//   filterArray([12, 24, 8, 41, 76], 20);

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line

//     firstArray.forEach(function(element) {
//        if(secondArray.includes(element)){
//            commonElements.push(element);
//        }
//     });

//     // for (let i = 0; i < firstArray.length; i += 1) {
//     //   if (secondArray.includes(firstArray[i])) {
//     //     commonElements.push(firstArray[i]);
//     //   }
//     // }
//   console.log(commonElements);
//     return commonElements;
//     // Change code above this line
//   }
//   getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);

// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;

//     orderedItems.forEach((item) => {
//       totalPrice += item;
//     });
//   console.log(totalPrice);
//     return totalPrice;
//   }

//   calculateTotalPrice([1,2,3,4,5,6,]);

// const calculateTotalPrice = (orderedItems)

// const filter = function(array, test){
//     const filteredArray = [];
//     for (const el of array){
//         console.log(el);
//         const passed = test(el);
//         if (passed){
//             filteredArray.push(el);
//         }
//     }
//     return filteredArray;
// };

// const callback1 = function(value){
//     return value <= 3;
// };

// const r1 = filter([1,2,3,4,5,], callback1);
// console.log(r1);

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 300, isFresh: false },
//     { name: 'bananas', quantity: 450, isFresh: true },
// ];
// const getFruitsWiyhQuantity = function (fruit){
//     return fruit.quantity >=250;
// };

// const r2 = filter(fruits, getFruitsWiyhQuantity);
// console.log(r2);

// function changeEven(numbers, value) {
//     // Change code below this line
//     const newArray = [];
//     numbers.forEach( item => {
//       if (item % 2 === 0) {
//         newArray.push(item + value);

//       } else{
//       newArray.push(item);}
//     });
//     console.log(newArray);
//     // Change code above this line
//   }

//   changeEven([6,5,9,9,18,8,8,17,11,18,17,5,21,23,12,23,21,8,11,21,14], 21 );

// Change code below this line
// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       skills: ["non", "amet", "ipsum"],
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       skills: ["lorem", "veniam", "culpa"],
//       gender: "female",
//       age: 39,
//     },
//   ];
//   const getUserNames = users => users.map(user => user.name);
//       console.log([getUserNames]);

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(value => value %2 === 0) ;
// const oddNumbers = numbers.filter(value => value %2 !== 0) ;
// console.log(evenNumbers);

// const users = [
//         {
//           name: "Moore Hensley",
//           email: "moorehensley@indexia.com",
//           eyeColor: "blue",
//           friends: ["Sharron Pace"],
//           isActive: false,
//           balance: 2811,
//           skills: ["ipsum", "lorem"],
//           gender: "male",
//           age: 37,
//         },
//         {
//           name: "Sharlene Bush",
//           email: "sharlenebush@tubesys.com",
//           eyeColor: "blue",
//           friends: ["Briana Decker", "Sharron Pace"],
//           isActive: true,
//           balance: 3821,
//           skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//           gender: "female",
//           age: 34,
//         },
//         {
//           name: "Ross Vazquez",
//           email: "rossvazquez@xinware.com",
//           eyeColor: "green",
//           friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//           isActive: false,
//           balance: 3793,
//           skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//           gender: "male",
//           age: 24,
//         },
//         {
//           name: "Elma Head",
//           email: "elmahead@omatom.com",
//           eyeColor: "green",
//           friends: ["Goldie Gentry", "Aisha Tran"],
//           isActive: true,
//           balance: 2278,
//           skills: ["adipisicing", "irure", "velit"],
//           gender: "female",
//           age: 21,
//         },
//         {
//           name: "Carey Barr",
//           email: "careybarr@nurali.com",
//           eyeColor: "blue",
//           friends: ["Jordan Sampson", "Eddie Strong"],
//           isActive: true,
//           balance: 3951,
//           skills: ["ex", "culpa", "nostrud"],
//           gender: "male",
//           age: 27,
//         },
//         {
//           name: "Blackburn Dotson",
//           email: "blackburndotson@furnigeer.com",
//           eyeColor: "brown",
//           friends: ["Jacklyn Lucas", "Linda Chapman"],
//           isActive: false,
//           balance: 1498,
//           skills: ["non", "amet", "ipsum"],
//           gender: "male",
//           age: 38,
//         },
//         {
//           name: "Sheree Anthony",
//           email: "shereeanthony@kog.com",
//           eyeColor: "brown",
//           friends: ["Goldie Gentry", "Briana Decker"],
//           isActive: true,
//           balance: 2764,
//           skills: ["lorem", "veniam", "culpa"],
//           gender: "female",
//           age: 39,
//         },
//       ];
// console.table(users);
//       const userNames = users.map(user => user.name);
//     //   console.log(userNames);

//       const updateBalance = users.map(user => ({
//               ...user,
//               balance: user.balance * 1.2,
//           }));

//     // console.table(updateBalance);

//     const userIdName = 'Blackburn Dotson';

// const updateGender = users.map(user =>

//     userIdName === user.name
//     ? {...user, gender: 'female'}
//    : user,
// );
// console.table(updateGender);

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getTotalBalanceByGender = (users, gender) =>
//   [...users]
//     .filter(user => user.gender === gender)
//     .reduce((total, user) => {
//       return total + user.balance;
//     }, 0);
// console.log(getTotalBalanceByGender(users, 'male'));

// const getSortedFriends = users =>
//   users
//     .flatMap(user => user.friends)
//     .filter((user, index, array) => array.indexOf(user) === index)
//     .sort((a, b) => a.localeCompare(b));
// console.log(getSortedFriends(users));

// Массив имен всех пользователей у которых есть друг с указанным именем.
// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// const getUsersWithFriend = (users, friendName) =>
//   users.filter(user => user.friends.includes(friendName)).map(user => user.name);

// console.log(getUsersWithFriend(users, 'Briana Decker'));

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = users.sort((a, b) => a.balance - b.balance);
// const ascendingScores = users.sort((a, b) => a.friends.length - b.friends.length);

// // console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.table(ascendingScores);
// console.table(users);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)

//   .map(book => book.author)
//   .sort((a, b) => a.localeCompare(b));
// console.log(names);
