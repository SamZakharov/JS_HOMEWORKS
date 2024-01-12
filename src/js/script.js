'use strict';

const simpleStr = prompt('Enter your word:');
const lengthStr = prompt('Enter the number of length');
const symbol = '*';
const boolean = true;

function padString(simpleStr, lengthStr, symbol, boolean) {
    if (!simpleStr) {
        return console.log('You haven\'t entered a word');
    } else if (!lengthStr) {
        return console.log('You didn\'t entered the string length');
    } else if (!symbol) {
        return console.log('You didn\'t entered the symbol');
    } else if (boolean === undefined) {
        return console.log('You didn\'t  entered a parameter');
    } else {
        if (lengthStr > simpleStr.length) {
            let n = lengthStr - simpleStr.length;
            let strArr = simpleStr.split('');
            for (let i = 0; i < n; i++) {
                boolean ? strArr.push(symbol) : strArr.unshift(symbol);
            }
            return strArr.join('');
        } else {
            let j = simpleStr.length - lengthStr;
            return boolean ? simpleStr.substring(j) : simpleStr.substring(0, simpleStr.length - j);
        }
    }
}

console.log(padString(simpleStr, lengthStr, symbol, true));