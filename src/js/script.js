// Task 1.
const getFactorial = function (number) {
  if (number <= 1) return 1;

  return number * getFactorial(number - 1);
};

console.log(getFactorial(5));

// Task 2.
const pow = function (num, degree) {
  if (degree === 0) return 1;

  return num * pow(num, degree - 1);
};

console.log(pow(2, 2));

// Task 3.
const sum = function (a, b) {
  if (b === 0) return a;

  return sum(a + 1, b - 1);
};

console.log(sum(5, 5));
