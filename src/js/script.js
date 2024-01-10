'use strict';


let sumOfOddNumbers = 0;
outerLoop:

    for (let number = 1; number <= 20; number++) {

        if (number % 2 !== 0) {
            sumOfOddNumbers += number;

        } else {
            break outerLoop;
        }
    }

console.log('Sum of odd numbers from 1 to 20:' + sumOfOddNumbers);
