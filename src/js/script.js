'use strict';

const number = +prompt('Enter the number:', '5');
const degree = +prompt('Enter the number of the degree:');

function exponentiation(number, degree = 1) {
    console.log(degree);
    if (isNaN(number) || isNaN(degree)) return alert('You are entering an incorrect value');
    else return Math.pow(number, degree);

}

let result = exponentiation(number, degree);

alert(result);
