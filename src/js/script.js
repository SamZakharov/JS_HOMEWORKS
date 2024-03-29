const DATA_KEY = 'todoItems';

(function () {
  const form = document.querySelector('form[data-todo-form]');
  const toDoItemsContainer = document.querySelector('[data-todo-items]');

  const toDoItems = [];

  const createToDoItemTemplate = (config) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'col-4';

    if (!config.title && !config.description) {
      const wrapperNoData = document.createElement('div');
      wrapperNoData.innerHTML = '<div><b><h1>NO DATA</h1></b></div>';
      toDoItemsContainer.append(wrapperNoData);
    } else {
      wrapper.innerHTML = `<div class="taskWrapper">
                          <div class="taskHeading">${config.title}</div>
                          <div class="taskDescription">${config.description}</div>
                         </div>`;
    }
    return wrapper;
  };

  const renderToDoItem = (element) => {
    toDoItemsContainer.append(element);
  };

  const localStorageItems = JSON.parse(localStorage.getItem(DATA_KEY));
  if (localStorageItems && localStorageItems.length > 0) {
    localStorageItems.forEach((item) => {
      const toDoItem = createToDoItemTemplate(item);
      toDoItems.push(item);
      renderToDoItem(toDoItem);
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = e.target.querySelectorAll('input, textarea');
    const data = {};

    for (const input of inputs) {
      if (!input.value.trim()) return alert('Please fill in all fields');
      data[input.name] = input.value;
    }

    const toDoItem = createToDoItemTemplate(data);
    renderToDoItem(toDoItem);
    toDoItems.push(data);
    localStorage.setItem(DATA_KEY, JSON.stringify(toDoItems));

    e.target.reset();
  });
}());
