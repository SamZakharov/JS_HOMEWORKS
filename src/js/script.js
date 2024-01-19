'use strict';

function createRandomNumber() {
    const usedNumbers = [];

    return function getRandomNumber() {
        const maxNumber = 100;
        let randomNumber;

        do {
            randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        } while (usedNumbers.includes(randomNumber));

        usedNumbers.push(randomNumber);

        if (usedNumbers.length === maxNumber) usedNumbers.length = 0;

        return randomNumber;
    };
}

const getRandomNumber = createRandomNumber();

for (let i = 0; i < 10; i++) {
    console.log(getRandomNumber());
}
