const Controller = {
  form: document.querySelector('form[data-todo-form]'),

  formHadler(e) {
    e.preventDefault();
    const noDatraMessageEl = document.querySelector('.no-data-message');
    noDatraMessageEl && noDatraMessageEl.remove();

    const inputs = e.target.querySelectorAll('input, textarea');
    const data = {};

    for (const input of inputs) {
      if (!input.value.trim()) return alert('Please fill in all fields');
      data[input.name] = input.value;
    }

    const savedItem = Model.saveTodoItem(data);
    View.addTodoItemToList(savedItem);
    View.resetForm();
    // const toDoItem = createToDoItemTemplate(data);
    // renderToDoItem(toDoItem);
    toDoItems.push(data);
    localStorage.setItem(DATA_KEY, JSON.stringify(toDoItems));

    // e.target.reset();
  },

  init() {
    this.form.addEventListener('submit', this.formHadler.bind(this));
  },
};

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//
//   const noDatraMessageEl = document.querySelector('.no-data-message');
//   noDatraMessageEl && noDatraMessageEl.remove();
//
//   const inputs = e.target.querySelectorAll('input, textarea');
//   const data = {};
//
//   for (const input of inputs) {
//     if (!input.value.trim()) return alert('Please fill in all fields');
//     data[input.name] = input.value;
//   }
//
//   const toDoItem = createToDoItemTemplate(data);
//   renderToDoItem(toDoItem);
//   toDoItems.push(data);
//   localStorage.setItem(DATA_KEY, JSON.stringify(toDoItems));
//
//   e.target.reset();
// });
