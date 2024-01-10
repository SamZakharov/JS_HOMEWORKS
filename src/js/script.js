'use strict';


let sum = 0;
let sumOfPow = 0;
const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++){
    sum +=arr[i];
    sumOfPow += Math.pow(arr[i], 2);
}

console.log(sum);
console.log(sumOfPow);



