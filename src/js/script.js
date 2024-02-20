const user = {
  name: 'Sam',
  age: 28,
  gender: 'male',
};

const printName = (prefix) => {
  console.log(`${prefix} ${this.name}`);
};

const myApply = (func, ctx, args) => {
  ctx.printName = func;
  ctx.printName(args, ...args);
  delete ctx.printName;
};

myApply(printName, user, ['Chelik']);
