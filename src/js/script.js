// eslint-disable-next-line func-names
(function () {
  const users = [{
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: 'Kulas Light',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: 'Romaguera-Crona',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: 'Victor Plains',
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: 'Deckow-Crist',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: 'Douglas Extension',
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: 'Romaguera-Jacobson',
  },
  ];

  function* userProperty2(arr) {
    for (let i = 0; i < arr.length; i++) {
      const user = arr[i];
      for (const key in user) {
        yield { key, value: user[key] };
      }
    }
  }

  const itrUsers2 = userProperty2(users);

  function displayNextProperty() {
    const { key, value } = itrUsers2.next().value;
    const li = document.createElement('li');
    li.style.listStyleType = 'none';
    li.textContent = `${key}: ${value}`;
    document.body.appendChild(li);
  }

  setInterval(displayNextProperty, 500);
}());
