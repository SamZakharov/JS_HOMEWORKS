'use strict';

// //task 1//
const firstTarget = prompt ('Please put here the number or word: ');
const secondTarget = prompt ('Please put here the number or word: ');
const thirdTarget = prompt ('Please put here the number or word: ');
const sum = firstTarget + secondTarget + thirdTarget;


alert(`${firstTarget} + ${secondTarget} + ${thirdTarget} = ${sum}`);


//task 2//

const number = 12345;

console.log(number.toString().replaceAll('', ' '));
