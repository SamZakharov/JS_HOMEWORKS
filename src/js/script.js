'use strict';

function padString(simpleStr, lengthStr, symbol, right = true) {
    if (typeof simpleStr !== 'string') throw new Error('You haven\'t entered a word');
    if (typeof lengthStr !== 'number' || isNaN(lengthStr)) throw new Error('You didn\'t entered the string length');
    if (simpleStr.length === lengthStr) return simpleStr;

    if (typeof symbol !== 'string' || symbol.length !== 1) throw new Error('You didn\'t entered the symbol');
    if (typeof right !== 'boolean') throw new Error('Right should be a boolean');

    if (simpleStr.length > lengthStr) {
        const j = simpleStr.length - lengthStr;
        return right ? simpleStr.substring(j) : simpleStr.substring(0, simpleStr.length - j);
    }
    const n = lengthStr - simpleStr.length;
    const strArr = simpleStr.split('');
    for (let i = 0; i < n; i++) {
        right ? strArr.push(symbol) : strArr.unshift(symbol);
    }
    return strArr.join('');

}

console.log(padString('hello', 3, '*', false));
console.log(padString('hello', 6, '*', ));

