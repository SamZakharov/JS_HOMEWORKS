const DATA_KEY = 'todoItems';

(function () {
  const form = document.querySelector('form[data-todo-form]');
  const toDoItemsContainer = document.querySelector('[data-todo-items]');

  const toDoItems = [];

  const createToDoItemTemplate = (config) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'col-4';

    wrapper.innerHTML = `<div class="taskWrapper">
                          <div class="taskHeading">${config.title}</div>
                          <div class="taskDescription">${config.description}</div>
                         </div>`;

    return wrapper;
  };

  const renderToDoItem = (element) => {
    toDoItemsContainer.append(element);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const localStorageItems = JSON.parse(localStorage.getItem(DATA_KEY));
    if (localStorageItems && localStorageItems.length > 0) {
      localStorageItems.forEach((item) => {
        const toDoItem = createToDoItemTemplate(item);
        toDoItems.push(item);
        renderToDoItem(toDoItem);
      });
    } else {
      const wrapper = document.createElement('div');
      wrapper.className = 'col-4';
      const wrapperNoData = document.createElement('div');
      wrapperNoData.innerHTML = '<div class="no-data-message"><b><h1>NO DATA</h1></b></div>';
      toDoItemsContainer.append(wrapperNoData);
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const noDatraMessageEl = document.querySelector('.no-data-message');
    noDatraMessageEl && noDatraMessageEl.remove();

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
