'use strict';

// 1.

// let x = 10;
// let y = 7;
//
// x > y ? console.log('x більше за y') : console.log('x не більше, ніж y');


//2.

// let inputNumber = +prompt('Please enter an integer');
//
// if (!isNaN(inputNumber)) {
//     let integerNumber = parseInt(inputNumber, 10);
//     let digitCount = integerNumber.toString().length;
//
//     if (integerNumber > 0) {
//
//         console.log(`You entered a positive integer ${integerNumber}.\nNumber of digits in a number is: ${digitCount}.`);
//
//     } else {
//
//         console.log(`You entered a negative integer ${integerNumber}. \nNumber of digits in a number is: ${digitCount - 1}.`);
//
//     }
// } else {
//     console.log('The entered value is not a number');
// }

//3.
//
// let firstNumber = prompt('Please enter first number');
// if (isNaN(+firstNumber)) {
//     alert('Please put corect value');
// } else if (firstNumber === null) {
//     alert('You have canceled the check 1');
// }
//
// let secondNumber = prompt('Please enter second number');
// if (isNaN(+secondNumber)) {
//     alert('Please put corect value');
// } else if (secondNumber === null) {
//     alert('You have canceled the check 2');
// }
//
// let thirdNumber = prompt('Please enter third number');
// if (isNaN(+thirdNumber)) {
//     alert('Please put corect value');
// } else if (thirdNumber === null) {
//     alert('You have canceled the check 3');
// }
//
// if (!isNaN(+firstNumber) && !isNaN(+secondNumber) && !isNaN(+thirdNumber)) {
//     if (firstNumber > secondNumber && firstNumber > thirdNumber) {
//         console.log(`The first number: ${firstNumber} is greater than the second number: ${secondNumber} and third number: ${thirdNumber}`);
//     } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
//         console.log(`The second number: ${secondNumber} is greater than the first number: ${firstNumber} and third number: ${thirdNumber}`);
//     } else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
//         console.log(`The third number: ${thirdNumber} is greater than the second number: ${secondNumber} and first number: ${firstNumber}`);
//     }
// }


//4.

let firstSide = prompt('Enter the value of the first side of the triangle');
if ( firstSide === null ||isNaN(+firstSide)) {
    alert('Please enter a valid number for the first input');
}
console.log(firstSide);

let secondSide = prompt('Enter the value of the second side of the triangle');
if (secondSide === null || isNaN(+secondSide)) {
    alert('Please enter a valid number for the second input');
}
console.log(secondSide);


let thirdSide = prompt('Enter the value of the third side of the triangle');
if (secondSide === null || isNaN(+secondSide)) {
    alert('Please enter a valid number for the third input');
}

if (firstSide + secondSide > thirdSide) {
    console.log('true');
} else if (firstSide + secondSide <= thirdSide) {
    console.log('false');
} else if (secondSide + thirdSide > firstSide) {
    console.log('true');
} else if (secondSide + thirdSide <= firstSide) {
    console.log('false');
} else if (firstSide + thirdSide > secondSide) {
    console.log('true');
} else if (firstSide + thirdSide <= secondSide) {
    console.log('false');
}