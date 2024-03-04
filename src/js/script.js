const visibleContainerText = document.querySelector('#visible-container');
const mainContainer = document.querySelector('#main-container');

const addGhostContainer = function () {
  let ghostContainer = document.querySelector('#ghost-container');
  if (!ghostContainer) {
    ghostContainer = document.createElement('div');
    ghostContainer.id = 'ghost-container';
    ghostContainer.classList.add('ghost-container');
    const text = document.createElement('h4');
    text.textContent = 'This is a ghost container';
    ghostContainer.appendChild(text);
    mainContainer.appendChild(ghostContainer);
  }
};

visibleContainerText.addEventListener('mouseover', addGhostContainer);

const removeGhostContainer = function () {
  const ghostContainer = document.querySelector('#ghost-container');
  if (ghostContainer) {
    mainContainer.removeChild(ghostContainer);
  }
};

visibleContainerText.addEventListener('mouseout', removeGhostContainer);
