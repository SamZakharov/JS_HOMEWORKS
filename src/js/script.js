'use strict';

const num = +prompt("enter the number");
let arr = [];

if (num > 1 || !isNaN(num)) {
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }
    console.log('minimal divider is:', Math.min(...arr) + '.');
} else {
    console.log(NaN);
}
console.log('all dividers: ', arr);