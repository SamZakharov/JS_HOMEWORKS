'use strict';

let a = 5;
 a === 0 ? console.log('Вірно') : console.log('Невірно');
//
// let a = 5;
//  a > 0 ? console.log('Вірно') : console.log('Невірно');
//
// let a = 5;
//  a < 0 ? console.log('Вірно') : console.log('Невірно');
//
// let a = 5;
//  a >= 0 ? console.log('Вірно') : console.log('Невірно');
//
// let a = 5;
//  a <= 0 ? console.log('Вірно') : console.log('Невірно');
//
// let a = 5;
//  a !== 0 ? console.log('Вірно') : console.log('Невірно');
//
// let a = 5;
//  a === 'test' ? console.log('Вірно') : console.log('Невірно');
//
// let a = 5;
//  a === '1' ? console.log('Вірно') : console.log('Невірно');
//
// let a = 5;
//  a > 0 < 5 ? console.log('Вірно') : console.log('Невірно');
//
// let a = 30;
// a = (a === 0 || a === 2) ? (a + 7) : (a / 10);
// console.log(a);

// let a = 1;
// let b = 2;
// let c = 0;
//
// console.log(c = (a <= 1 && b >= 3) ? a + b : a - b);

// let a = 4;
// let b = 7;
//
// (a > 2 && a < 11) || (b >= 6 && b < 14) ? console.log('Вірно') : console.log('Невірно') ;


let num = +prompt('Please enter a number from 1 to 4: ')
let result = '';

switch (num) {
    case num = 1:
        result = 'Зима'
        break

    case num = 2:
        result = 'Весна'
        break

    case num = 3:
        result = 'Лiто'
        break

    case num = 4:
        result = 'Осiнь'
        break
}

console.log(result);


