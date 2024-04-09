const View = {
  form: document.querySelector('form[data-todo-form]'),
  toDoItemsContainer: document.querySelector('[data-todo-items]'),
  resetForm() {
    this.form.reset();
  },
  createToDoItemTemplate(config) {
    const wrapper = document.createElement('div');
    wrapper.className = 'col-4';
    wrapper.setAttribute('data-todo-id', config.id);

    wrapper.innerHTML = `<div class="taskWrapper">
                          <div class="taskHeading">${config.title}</div>
                          <div class="taskDescription">${config.description}</div>
                         </div>`;

    return wrapper;
  },
  renderToDoItem(element) {
    this.toDoItemsContainer.append(element);
  },

  addTodoItemToList(data) {
    const template = this.createToDoItemTemplate(data);
    this.renderToDoItem(template);
  },
};
