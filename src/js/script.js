const createTable = function (rows, cols) {
  const table = document.createElement('table');
  table.classList.add('table');
  const fragment = document.createDocumentFragment();

  for (let i = 1; i <= rows; i++) {
    const row = document.createElement('tr');

    for (let j = 1; j <= cols; j++) {
      const cell = document.createElement('td');
      cell.classList.add('cell');

      const cellText = document.createTextNode(((i - 1) * cols + j).toString());

      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    fragment.appendChild(row);
  }
  table.appendChild(fragment);
  return table;
};

const addTableToDOM = function (table) {
  const { body } = document;
  body.appendChild(table);
};

const rows = 10;
const cols = 10;
const table = createTable(rows, cols);
addTableToDOM(table);
