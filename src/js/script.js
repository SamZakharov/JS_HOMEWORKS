'use strict';

const firstNumber = Number(prompt('Enter first number'));
const secondNumber = Number(prompt('Enter second number'));
const thirdNumber = Number(prompt('Enter third number'));
const average = ((firstNumber + secondNumber + thirdNumber) / 3).toFixed(1);

alert('The arithmetic mean of your numbers is ' + average);