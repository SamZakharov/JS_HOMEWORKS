'use strict';

const lenght = +prompt('Enter the number of symbols', "10");
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;
function generateKey(length, characters) {
    let key = '';
    for (let i = 0; i < length; i++) {
       const index = Math.floor(Math.random() * charactersLength);
        key += characters[index];
    }
    return key;

}

const randomChar = generateKey(lenght, characters);
console.log(randomChar);
