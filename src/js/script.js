'use strict';

const arr = [1, 2, 3, -1, -2, -3];
function funcPlusArr(arr) {
    const exampleArr = [];

    if (arr.length === 0) return console.log('The array is empty.');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            exampleArr.push(arr[i]);
        }
    }
    if (exampleArr.length > 0) {
        return exampleArr;
    } else {
        return null;
    }
}

const result = funcPlusArr(arr);
console.log(result);


function funcPlusArr2(arr) {
    const exampleArr = arr.filter(el => el > 0);
    return exampleArr.length > 0 ? exampleArr : null;
}
console.log(funcPlusArr2(arr));