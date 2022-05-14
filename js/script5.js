// const bookShelf = {
//   authors: ['Бернард Корнуэлл', 'Роберт Шекли'],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
//   sortAuthors() {
//     return this.authors.sort((a, b) => b.localeCompare(a));
//   },
// };

// console.log(bookShelf.getAuthors()); // ["Бернард Корнуэлл", "Роберт Шекли"]
// bookShelf.addAuthor('Ли Танит');
// console.log(bookShelf.getAuthors());
// console.log(bookShelf.sortAuthors());

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//   },
// };

// user.showTag();

// const foo = function () {
//   console.log('foo -> this', this);
// };
// foo();

// const showTag = function () {
//   console.log('showTag -> this', this);
//   console.log('showTag -> this.tag', this.tag);
// };
// showTag();

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//   },
// };

// const invokeAction = function (action) {
//   console.log(action);
//   action();
// };
// invokeAction(user.showTag());

// const showThis = function () {
//   console.log('showThis -> this', this);
// };

// showThis();

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.call(objA);

// const changeColor = function (color) {
//   console.log('changeColor -> this', this);
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// const sweater = {
//   color: 'green',
// };
// changeColor.call(sweater, 'orange');
// console.log(sweater);

// -----------------------------------------
// const counter = {
//   value: 0,
//   increment() {
//     console.log('increment -> this', this);
//     this.value += 1;
//   },
//   decrement() {
//     console.log('decrement -> this', this);
//     this.value -= 1;
//   },
// };
// const decrementBtn = document.querySelector('.js-decrement');
// const incrementBtn = document.querySelector('.js-increment');
// const valueEl = document.querySelector('.js-value');
// console.log(decrementBtn);
// console.log(incrementBtn);
// console.log(valueEl);

// decrementBtn.addEventListener('click', function () {
//   console.log('Кликнули на декремент');

//   counter.decrement();
//   console.log(counter);

//   valueEl.textContent = counter.value;
// });
// incrementBtn.addEventListener('click', function () {
//   console.log('Кликнули на инкремент');

//   counter.increment();
//   console.log(counter);

//   valueEl.textContent = counter.value;
// });

// ------------------------------

// const objC = {
//   z: 5,
// };

// const objB = Object.create(objC);
// objB.y = 3;

// console.log(objC);
// console.log(objB);
// console.log(objB.y);
// console.log(objB.z);
// console.log(objC.hasOwnProperty('z'));

// --------------
// const Car = function (brand, model, price) {
//   // console.log(this);
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
//   // this.a = value;
// };

// const myCar = new Car('Audi', 'Q3', 35000);
// console.log(myCar);

// const myCar2 = new Car();
// console.log(myCar2);

console.log(document);

const body = document.body;
console.log(body);

const navEl = document.querySelector('li');
console.log(navEl);

const navCollEl = document.querySelectorAll('li');
console.log(navCollEl);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);
