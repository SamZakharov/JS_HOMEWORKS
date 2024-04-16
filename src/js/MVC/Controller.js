const Controller = {
  form: document.querySelector('form[data-todo-form]'),

  formHadler(e) {
    e.preventDefault();
    const noDataMessageEl = document.querySelector('.no-data-message');
    noDataMessageEl && noDataMessageEl.remove();

    const inputs = e.target.querySelectorAll('input, textarea');
    const data = {};

    for (const input of inputs) {
      if (!input.value.trim()) return alert('Please fill in all fields');
      data[input.name] = input.value;
    }

    const savedItem = Model.saveTodoItem(data);
    View.addTodoItemToList(savedItem);
    View.resetForm();
  },

  loadedHandler() {
    Model.todos.forEach((item) => View.addTodoItemToList(item));
  },

  init() {
    this.form.addEventListener('submit', this.formHadler.bind(this));
    document.addEventListener('DOMContentLoaded', this.loadedHandler.bind(this));

    View.checkData(Model.todos);
  },
};
