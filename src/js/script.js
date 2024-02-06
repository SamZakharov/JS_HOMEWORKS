const numbers = [1, 2, 3, 4, 5, 6, 4];

const reduce = (arr, callback, initialValue) => {
  let accumulator = initialValue === undefined ? arr[0] : initialValue;
  const startIndex = initialValue === undefined ? 1 : 0;

  for (let i = startIndex; i < arr.length; i += 1) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
};

const sum = reduce(numbers, (accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);
