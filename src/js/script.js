const init = function () {
  const sayHi = function () {
    console.log('hello');
  };

  return function createUser(name, age) {
    const lastName = 'Doe';

    return {
      name,
      age,
      lastName,
      sayHi,
    };
  };
};

const createUser = init();

const user = createUser('John', 25);
const user2 = createUser('Alice', 24);
const user3 = createUser('Alice', 32);

user.sayHi();
user2.sayHi();
user3.sayHi();
