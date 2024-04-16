const DATA_KEY = 'data';

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
                          <div class="taskHeading">#${config.id} - ${config.title}</div>
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

  checkData(data) {
    if (data && data.length > 0) return;

    const wrapperNoData = document.createElement('div');
    wrapperNoData.className = 'no-data-message';
    wrapperNoData.innerHTML = '<b><h1>NO DATA</h1></b>';
    this.toDoItemsContainer.append(wrapperNoData);
  },
};
