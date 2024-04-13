const DATA_KEY = 'todoItems';

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

  checkData() {
    const localStorageItems = JSON.parse(localStorage.getItem(DATA_KEY));
    console.log(localStorageItems);
    if (localStorageItems && localStorageItems.length > 0) {
      localStorageItems.forEach((item) => {
        this.createToDoItemTemplate(item);
        this.addTodoItemToList(item);
      });
    } else {
      const wrapperNoData = document.createElement('div');
      wrapperNoData.className = 'no-data-message';
      wrapperNoData.innerHTML = '<b><h1>NO DATA</h1></b>';
      this.toDoItemsContainer.append(wrapperNoData);
    }
  },
};

View.checkData();
