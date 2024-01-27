const createUser = function createUser(name, age) {
  const user = {};

  user.name = name;
  user.age = age;

  user.greet = function () {
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} y.o.`);
  };

  return user;
};

const user1 = createUser('Sam', 28);
const user2 = createUser('Vika', 32);
const user3 = createUser('Vova', 52);

user1.greet();
user2.greet();
user3.greet();
