// const age = 10;
// const totalPrice = typeof 200.74;
// const userName = 'Chelsy';
// const message = typeof'Добро пожаловать';
// const isOpen = true;
// const shouldConfirm = typeof false;


// console.log(shouldConfirm);
// const shouldRenew = confirm('Do you want?');
// console.log(shouldRenew);

// let quantity = prompt('How much?');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// let elementWidth = '50px';
// // const result = parseInt(elementWidth);
// console.log( parseInt(elementWidth))

// const message = 'kjh;uipoihjjjjjjjjjlkjhlhl';
// console.log(message.length);

// function sayHello(){
// alert('Hello');
// }
// sayHello();

// const firstName = "Alex - ";
// const lastName = 'Bar'
// const fullName = firstName + lastName;
// console.log(1 + "3" + 2 +'5');
// console.log(typeof fullName);

// const quantity = 15;
// const adveraisment = `Do you want ${quantity} boxes`;
// console.log(adveraisment);

// let brand = prompt('Give me a brand');
// brand = brand.toLowerCase();
// console.log(brand);

// let brand = 'SaMSung';

// // brand = brand.toLowerCase();
// // const mark = 'samsung';
// console.log(brand);
// console.log(brand[0] + brand.slice(1).toLowerCase()); 

// const x1 = 'vip';
// // const x2 = 'vip';
// const number = x1 === 'pro' || x1 === 'vip' ;
// console.log('Yes?:', number);
// const x1 = 'pro'
// if( x1 === 'vip' || x1 === 'pro'){
//     console.log('Hello');
// } else{
//     console.log('good bye');
// }

// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
    
//     let discount;
//     // Change code below this line
//   if( totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if(totalSpent >= 20000 && totalSpent < 50000){
//     discount = SILVER_DISCOUNT;
//   } else if(totalSpent >= 5000 && totalSpent < 20000) {
//   discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//     // Change code above this line
//     console.log('Your discount: ',  discount, '%') ;
//   }

//   getDiscount(8000);
  
// const stars = 4;
// let price;

//   switch(stars) {
// case 1:
//     case 2:
//     price = 20;
//     break;  

//     case 3:
//         case 4:
//     price = 50;
//     break;   

//     case 5:
//     price = 100;
//     break;

//     default:
//         console.log('What do you want?');
//   }

//   console.log(price);

// const test = 'The beatles';
// console.log(test[2]);

// function formatMessage(message, maxLength) {
//     let result;
//     // Change code below this line
//   if(message.length <= maxLength) {
//   result = message;
//   } else {
//     result = message.slice(0,maxLength) + '...';
//   }
//     /// Change code above this line
//     console.log(result) ;
//   }

//   formatMessage('Hello Kitty yuguyklygffkygl',20);

// function normalizeInput(input) {
//     const normalizedInput = input.toUpperCase() ; // Change this line
  
//     console.log(normalizedInput) ;
//   }
//   normalizeInput('HellO');

// function getDistance(speed, time){
// let distance = speed * time;
// console.log( distance);
// }
// getDistance(10,5);

// let safeToProceed = false;
//  if (safeToProceed) {
//  alert("You shall pass!");
//  } else {
//  alert("You shall not pass!");
//  }

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// const number = 1210;
// let total = 0;
// for (let i = 0; i < number; i += 1) {
//   if (i % 2 !== 0) {
//     continue;    
//   }
//   console.log("четное i: ", i);
//   total +=i;
// }
// console.log('Total = ', total);


// const employees = 3;
// const minSalary = 500;
// const maxSalary = 5000;
// let totalSalary = 0;
// for(let i = 1; i <= employees; i += 1) {
//  totalSalary = totalSalary + minSalary; 
// console.log(`Salry for employee ${i} - ${minSalary}`);

// }
// console.log(`total salary = ${totalSalary}`);

// let ballance = 10000;
// const payment = 3000;
// if(payment <= ballance){
//   console.log(`Your order cost ${payment} credits`)
//   ballance -= payment;
//   console.log('Welcome, your ballance = ', ballance);
// } else {
//   console.log('Sorry');
// }

// let totalSpent = 900;
// let payment = 500;
// let discount = 0;

// if( totalSpent >= 100 && totalSpent < 1000) {
// discount = 0.02;
// console.log(`You bronze partner
// and your discount ${discount * 100} persent.`)
// } else 
//   if(totalSpent >=1000 && totalSpent < 4000) {
//     discount = 0.05;
//     console.log(`You silver partner
// and your discount ${discount * 100} persent.`)
//   }
// payment -= payment * discount;
// console.log(`Amount payable = ${payment}`); 
// // Total =  `;
//  totalSpent += payment;
// console.log(`Your total spent = ${totalSpent}`);

// const btnAdd = document.querySelector('button');
// btnAdd.addEventListener('click', () => {
//   console.log('click hehehe');
// });


