// 1 task
const runCallbacks = function (collbacks, value) {
  let result = value;
  callbacks.forEach((callback) => {
    result = callback(result);
  });
  return result;
};

const addOne = function (x) {
  return x + 1;
};
const double = function (x) {
  return x * 2;
};
const subtractFive = function (x) {
  return x - 5;
};

const multiDouble = function (x) {
  return double(x) * 2;
};

const callbacks = [addOne, double, subtractFive, double, multiDouble];

const inititalValue = 3;
const finalResult = runCallbacks(callbacks, inititalValue);
console.log(finalResult);

// 2 task
const composeFunctions = function (...functions) {
  return function (value) {
    let result = value;
    for (let i = functions.length - 1; i >= 0; i -= 1) {
      result = functions[i](result);
    }
    return result;
  };
};

const square = function (x) {
  return x + x;
};

const addThree = function (x) {
  return x + 3;
};

const multiplyByTwo = function (x) {
  return x * 2;
};

const transformationChain = composeFunctions(square, addThree, multiplyByTwo);

const result = transformationChain(4);

console.log(result);
