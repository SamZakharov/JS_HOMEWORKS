'use strict';

const usedNumbers = [];
const randomNumber = function () {
    const randomNumberResult = Math.floor(Math.random() * 100);
    if (usedNumbers.includes(randomNumberResult)) return randomNumber();
    usedNumbers.push(randomNumberResult);
    return randomNumberResult;
}

for (let i = 0; i <= 99; i += 1) {
    console.log(randomNumber());
}

console.log(usedNumbers.sort())

