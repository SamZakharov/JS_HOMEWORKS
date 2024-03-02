const listElement = document.querySelector('ul');
const liTexts = [];
let itemCount = 0;

for (const listItem of listElement.children) {
  console.log(listItem.textContent);
  liTexts.push(listItem.textContent.trim());
  itemCount++;
}

console.log(`Total items: ${itemCount}`);
console.log(liTexts);
