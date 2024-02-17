const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4], [5, [6, [7, [8, 9]]]], [[10, 11], 12, 13]];
const flatten = function (input) {
  if (!Array.isArray(input)) throw new Error('Function accepts only 1 argument, too much arguments provided');

  const stack = [...input];
  const res = [];

  const processStack = function () {
    if (stack.length === 0) {
      return;
    }

    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.unshift(next);
    }

    processStack();
  };

  processStack();

  return res;
};

console.log(flatten(complexArray));
