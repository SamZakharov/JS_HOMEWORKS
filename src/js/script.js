// 1.Напишите функцию, которая принимает строку и возвращает ее в обратном порядке.
const randomStr = (function () {
  const str = 'This is random string';
  const stringRevert = function (str) {
    const copyStr = str.split('');
    return copyStr.reverse().join('');
  };

  return stringRevert(str);
}());

console.log(randomStr);

// 2.Напишите программу, которая проверяет, каждое число в массиве на то является ли оно простым или нет.

const resultNumb = (function (arr) {
  const isPrime = function (number) {
    if (number < 2) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  };

  const primes = [];
  for (const number of arr) {
    primes.push(isPrime(number));
  }

  return primes;
}([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 21, 123, 234, 455, 876]));

console.log(resultNumb);
