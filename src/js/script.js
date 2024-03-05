const saving = function () {
  const inputValue = document.getElementById('textInput').value;
  const emptyBlock = document.querySelector('.empty-wrapper');

  if (inputValue) {
    const newTextElement = document.createElement('p');
    newTextElement.textContent = inputValue;

    emptyBlock.prepend(newTextElement);
    document.getElementById('textInput').value = '';
  }
};

document.getElementById('saveBtn').addEventListener('click', saving);
