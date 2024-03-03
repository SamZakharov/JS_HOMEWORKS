const generateList = (function () {
  const generateListFromArray = function (array) {
    const ul = document.createElement('ul');
    ul.style.listStyleType = 'none';

    array.forEach((item) => {
      const li = document.createElement('li');

      if (Array.isArray(item)) {
        li.appendChild(generateListFromArray(item));
      } else {
        li.textContent = item;
      }
      ul.appendChild(li);
    });
    return ul;
  };

  return generateListFromArray;
}());

const myList = generateList([1, 2, [1.1, 1.2, 1.3, [2.1, 2.2, 2.3, 2.4]], 3]);
document.body.appendChild(myList);
