'use strict';

// //1.
// for (let i = 20; i <= 30; i += 0.5){
//     console.log(i);
// }

// //2.
// const oneDollarPrice = 27;
// for (let i = 10; i <= 100; i += 10){
//     console.log(`${oneDollarPrice} UAH * ${i}$ = ${oneDollarPrice * i}`);
// }

// //3.
// let num = +prompt('Please put the number');
//
// for (let i = 1; i <= 100; i++) {
//     if (Math.pow(i,2) < num){
//         console.log(i);
//     } else break;
// }

// //4.
// let num = +prompt('Please enter a number');
// let arr = [];
//
// if (num > 1) {
//     for (let i = 2; i <= num; i++) {
//         if (num % i === 0) {
//             arr.push(i);
//         }
//     }
//     if (arr.length === 1) {
//         console.log('prostoe');
//     } else {
//         console.log('ne prostoe');
//     }
// } else {
//     console.log('The number must be greater than 1');
// }

// 5.
let num = +prompt('Введите число');

for (let i = 0; i < num; i++){
    if (Math.pow(3, i) === num) {
        console.log('mojno');
    } else {
        console.log('HET');
        break;
    }
}

