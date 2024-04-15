const iteratorFunc = function (arr) {
  let i = 0;

  return {
    next() {
      if (i < arr.length) {
        return { value: arr[i++], done: false };
      }
      return { done: true };
    },
  };
};

const arr = [1, 2, 3, 4, 5, 6];
const itr = iteratorFunc(arr);

const intervalId = setInterval(() => {
  const data = itr.next();
  if (!data.done) {
    const container = document.getElementsByClassName('container')[0];
    const li = document.createElement('li');
    li.style.listStyleType = 'none';
    li.textContent = data.value;
    container.appendChild(li);
  }

  if (data.done) {
    clearInterval(intervalId);
  }
}, 500);
