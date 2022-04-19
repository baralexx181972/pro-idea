// const userInput = prompt('What is JS?').toLowerCase();
// // let constanta = 'JavaScript';

// if(userInput === 'javascript' ){
//     console.log('right');
// } else {
//     console.log('wrong');
// }

// const hours = 14;
// const minutes = 0;
// const timeString = `${hours}hr ${minutes > 0 ? `${minutes}m` : ''} `;
// console.log(timeString);

// const hours = prompt();

// if(hours < 24){
//     console.log('Oppa');
// } else if(hours >= 24 && hours <= 150){
//     console.log('Ups');
// } else {
//     console.log('again');
// }

// let min = 16;
// const max = 150;

// while( min % 5 !== 0){
//      min +=1;
//      console.log(min);

// }
// for ( let i = min; i <= max; i += 5){

//         console.log (i);
//  }
// const group = ['abba', 'metallika', 'wasp', 'accept'];
// for(const name of group){
//     console.log(name);
// }
// group[3] = 'manowar';
// const lastElementIndex = group.length -1;
// console.log(lastElementIndex);
// console.log(group[lastElementIndex]);

// for( let i = 0; i < 10; i+=1){
//     if( i % 2 ===0){
//         continue;
//     }
//         console.log(i); 
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const group = ['abba', 'metallika', 'wasp', 'accept'];

// const nameOfGroup = 'wasp';
// let message = `this group - ${nameOfGroup} `;
// for(const name of group){
//     if( nameOfGroup === name){
//         message = 'Yes';
//          break;
//     } 
    
// }
// console.log(group.indexOf('wasp'));

// const numbers = [1, 3 ,12, 114, 15, 24, 46, 77, 6, 8, 9, 65, 56, 47];
// const threshold = 20;
// for( let i = 0; i < numbers.length; i += 1 ){
//     if (numbers[i] < threshold){
// continue;
//     }
//     console.log(`The number ${numbers[i]} is biggest than ${threshold}`);
// }

// const a = ['apple'];
// const b = a;
// a.push('cherry');
// b.push('grape');
// console.log(a[1]);
// console.log(b);
// a = 10;
// console.log(a);
// console.log(b);

// const name = 'is_apple';
// console.log(name.split("_"));

// function checkStorage(available, ordered) {
//     // Change code below this line
//     //  available = 20;
//     //  ordered = 0;
//     let message;
  
//     if (ordered === 0) {
//       message = "Your order is empty!";
//     } else if (ordered > available) {
//       message = "Your order is too large, not enough goods in stock!";
//     } else {
//       message = "The order is accepted, our manager will contact you";
//     }
  
//     console.log( message);
//     // Change code above this line
//   }
//   checkStorage(20,0);

// function getExtremeElements(array) {
//     // Change code below this line
//   let elementArray = [array[0], array[array.length-1]];
//   console.log(elementArray);
//     // Change code above this line
//   }
//   getExtremeElements([1,2,3,4,56,6,78,65,888]);

// function splitMessage(message, delimeter) {
//     let words;
//     // Change code below this line
//   words = message.split(delimeter);
//     // Change code above this line
//     console.log( words);
//   }
//   splitMessage('message is world', ''); 

// const fruits = ['apple', 'cherry', 'grape', 'orange'];
// // for( let i = 0; i < fruit.length; i += 1){
// //     fruit[i] += ' berry';
// // }

// console.table(fruits);
// for(const fruit of fruits){
//     console.log(fruit);
// }
// console.log(fruits[1]);

// const arrow =[1, 3, 7, 5, 4, 2, 8];
// let total = 0;
// for( const value of arrow){
//     if(value % 2 ===0){
//     total += value;
//     console.log(total);
//     }
// }
// console.log( `Toal = ${total}`);

// let val='what do you want you want'
// console.log(val.split(' ').length)
// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
// //  let val = message.split(' ').length;
//  const total = message.split(' ').length * pricePerWord;
//  console.log(total);
//     // Change code above this line
//  }
//  calculateEngravingPrice('what do you want',10)

// const logins = ['asdfqwe', 'ouilk', 'qwefqdwqe', 'hqwefqw'];
// const userName = 'qwefqdwqe';

// const message = logins.includes(userName)
// ? `User ${userName} to find`
// : `User ${userName} not find`;
// // let message = `User ${userName} not find`;
// // // for ( let i = 0; i < logins.length; i += 1){
// // //     if (userName === logins[i]){
// // //     message = `User ${userName} to find`;
// // //     break;
// // //     } 
// //     // message = `User ${userName} not find`;
// // // }

// // for( const login of logins){
// //     if (userName === login){
// //         message = `User ${userName} to find`;
// //         break;
// // }
// // }
// console.log(message);

// const numbers = [8,2,3,45,65,98,76,554,34];
// let max = numbers[0];
// for ( const number of numbers){
//     if(number > max){
//         max = number;
//     }
// }
// console.log('max: ', max);

// const logins = ['asdfqwe', 'ouilk', 'qwefqdwqe', 'hqwefqw'];
// let string = '';
// for(const login of logins ){
// string = string += login + ',';
// }
// console.log(string.slice(0,string.length-1));
// // console.log(logins.join(' '));

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// const thirdArray = firstArray.concat(secondArray);
// // console.log(thirdArray)
// if(thirdArray.length < maxLength){
//   console.log (thirdArray);

// } else{
//   console.log(thirdArray.length(maxLength))
// }


//     // Change code above this line
//   }
//   makeArray([1, 2, 3], [5, 6, 7], 4);

// const string = 'What do you wantt';
// const words = string.split(' ');
// console.log(words);
// let max = words[0];
// for(const word of words ){
//     if( word.length > max.length){
//     max = word;
    
// }
// }
// console.log(max);

// let total = 0;
// for (const total of number ){
//      total = total + i;
    
// }
// console.log(total);

// const min = 10;
// const max = 20;
// const numbers = [];
// for( let i = min; i <= max; i+=1){
//     numbers.push(i);
// }
// console.log(numbers);

// const array1 = [1, 2, 3, 4, 10, 8];
// const array2 = [2, 6, 8, 3];
// let result =[];
// let idx = 0;
// for ( let i = 0; i<array2.length; i +=1){
    
//     idx = array1.indexOf(array2[i]);
//     if (idx >=0) {
//         result.push(array2[i]); 
//     } 
    
//     console.log(result);
// }

// console.log(result);
const array1 = [1, 2, 3, 4, 10, 8, 67, 34];
const array2 = [2, 6, 8, 3, 9, 34, 5];
let result =[];

for ( const idx for array1){
    
    array1.includes(array2);
    if ( true) {
        result.push(array2[idx]);
    } 
    
    console.log(result);
} 
  