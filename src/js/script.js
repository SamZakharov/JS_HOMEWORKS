(function () {
  // Практичне Завдання:
  const user = {
    name: 'Sam',
  };

  Object.defineProperty(user, 'name', {
    writable: false,
  });

  Object.defineProperty(user, 'age', {
    value: 28,
    enumerable: false,
  });

  for (const key in user) {
    if (key) {
      console.log(user.name = 'Dog');
      console.log(user);
    }
  }
  console.log(Object.keys(user));

  // Розширене Завдання:
  Object.defineProperty(user, 'fullName', {
    get() {
      return this.name;
    },
    set(value) {
      const piece = value.split(' ');
      this.name = piece[0];
      this.surname = piece[1];
    },

  });

  user.fullName = 'Sam Zakharov';

  console.log('Name: ', user.name);
  console.log('Surname: ', user.surname);
  console.log(user);

  // Додаткове Завдання:

  const user2 = {
    name: 'Sam',
    surname: 'Zakharov',
  };

  Object.freeze(user2);

  user2.name = 'Error';
  Object.defineProperty(user2, 'name', {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 'Fart',
  });

  console.log(user2);
}());
