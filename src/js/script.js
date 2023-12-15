'use strict';

const firstNumber = +prompt('Put your first number: ');
const secondNumber = +prompt('Put your second number: ');
const sumPlus = firstNumber + secondNumber;
const sumMinus = firstNumber - secondNumber;
const sumMult = firstNumber * secondNumber;
const sumDev = firstNumber / secondNumber;

console.log('The result of your operation is: ' + firstNumber + ' + ' + secondNumber + ' = ' + sumPlus);
console.log('The result of your operation is: ' + firstNumber + ' - ' + secondNumber + ' = ' + sumMinus);
console.log('The result of your operation is: ' + firstNumber + ' * ' + secondNumber + ' = ' + sumMult);
console.log('The result of your operation is: ' + firstNumber + ' / ' + secondNumber + ' = ' + sumDev);


