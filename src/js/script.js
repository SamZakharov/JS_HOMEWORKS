const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const indexOf = function (arr, searchElement, fromIndex = 0) {
  for (let i = fromIndex; i < arr.length; i += 1) {
    if (arr[i] === searchElement) return i;
  }
  return -1;
};

console.log(indexOf(numbers, 4));

const lastIndexOf = function (arr, searchElement, fromIndex = numbers.length - 1) {
  for (let i = fromIndex; i >= 0; i -= 1) {
    if (arr[i] === searchElement) {
      return i;
    }
  }
  return -1;
};

console.log(lastIndexOf(numbers, 4));

const find = (arr, callback) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i], i, arr)) return arr[i];
  }
  return undefined;
};

const resFind = find(numbers, (item) => item > 8);
console.log(resFind);

const findIndex = (arr, callback) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i], i, arr)) return i;
  }
  return -1;
};
const resFindInd = findIndex(numbers, (item, index) => item === index);
console.log(resFindInd);

const includes = function (arr, searchElement) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === searchElement) return true;
  }
  return false;
};
console.log(includes(numbers, 4));

const every = function (arr, collback) {
  for (let i = 0; i < arr.length; i += 1) {
    if (!collback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};
const allPositive = every(numbers, (number) => number > 0);
console.log(allPositive);

const some = (arr, callback) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};

const hasEvenNumber = some(numbers, (item) => item % 2 === 0);
console.log(hasEvenNumber);
