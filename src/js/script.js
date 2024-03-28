const DATA_KEY = 'formData';

(function () {
  const formPage = () => {
    const form = document.querySelector('[data-form]');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const inputs = event.target.querySelectorAll('input, select, textarea');
      const data = {};

      inputs.forEach((input) => {
        if (input.value.trim() === '') {
          alert(`${input.name} is empty`);
        } else {
          data[input.name] = input.value;
        }
      });

      console.log(data);

      localStorage.setItem(DATA_KEY, JSON.stringify(data));
    });
  };

  const outputPage = () => {
    const data = JSON.parse(localStorage.getItem(DATA_KEY));
    const dataContainer = document.querySelector('[data-container]');

    if (!data) {
      const noData = document.createElement('p');
      dataContainer.append(noData);
      noData.innerHTML = '<h1><b>No Data!</b></h1>';
      return;
    }

    const ul = document.createElement('ul');

    for (const key in data) {
      const li = document.createElement('li');
      li.style = 'list-style-type: none';
      li.innerHTML = `<b>${key}: </b> ${data[key]}`;
      ul.append(li);
    }

    dataContainer.append(ul);
  };

  if (location.pathname.includes('index.html')) {
    formPage();
  } else if (location.pathname.includes('index2.html')) {
    outputPage();
  }
}());
