const user = {
  name: 'Sam',
  age: 28,
  gender: 'male',
};

const printName = function (prefix) {
  console.log(`${prefix} ${this.name}`);
};

const myApply = function (func, ctx, args) {
  ctx.printName = func;
  ctx.printName(args, ...args);
  delete ctx.printName;
};

// eslint-disable-next-line func-style
function myBind(func, ctx, args) {
  return function () {
    myApply(func, ctx, args);
  };
}

const bindedFunc = myBind(printName, user, ['Dumb']);
bindedFunc();
