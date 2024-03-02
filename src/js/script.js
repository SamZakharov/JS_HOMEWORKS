const listElement = document.getElementById('ulId');
const attributeTextsName = [];
const attributeTextsValue = [];

for (const att of listElement.attributes) {
  attributeTextsValue.push(att.value);
  attributeTextsName.push(att.name);
}
console.log(attributeTextsValue);
console.log(attributeTextsName);

const lastLiElement = listElement.lastElementChild;
lastLiElement.innerHTML = 'Привет, меня зовут Sam';

const firstElement = listElement.firstElementChild;
firstElement.setAttribute('data-my-name', 'Sam');

listElement.removeAttribute('data-dog-tail');
