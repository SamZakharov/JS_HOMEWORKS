// Task 1
const words = ['S', 'St', 'Str', 'Stri', 'Strin', 'String', 'String!'];

const isBigEnough = (el) => el.length > 5;

const newArr = words.filter(isBigEnough);
console.log(newArr);

// Task 2
const numbers = [-2, -1, 0, 1, 2, 3, 4, 5, 6];
const sumOfNumbers = numbers.reduce(
  (accum, currentValue) => (currentValue % 2 === 0 ? accum + currentValue : accum),
  0,
);
console.log(sumOfNumbers);

// Task 3
const averageNumbers = (numbers) => {
  if (numbers.length === 0) {
    return 0;
  }
  const initialValue = numbers[0];
  return numbers.reduce((a, b) => a + b, initialValue) / numbers.length;
};
console.log(averageNumbers(numbers));
