const Model = {
  key: 'data',

  get todos() {
    const data = JSON.parse(localStorage.getItem(this.key));
    return data || [];
  },

  saveTodoItem(data) {
    const savedData = this.todos;
    const dataToSave = structuredClone(data);
    dataToSave.id = savedData.length ? savedData.at(-1).id + 1 : 1;

    savedData.push(dataToSave);
    localStorage.setItem(this.key, JSON.stringify(savedData));

    return this.todos.at(-1);
  },
};
