const checkNumber = function () {
  const inputValue = document.getElementById('numberInput').value;

  if (inputValue.trim() === '') {
    alert('Please enter a number before checking.');
  } else if (!isNaN(inputValue)) {
    if (inputValue % 2 === 0) {
      alert(`${inputValue} is an even number`);
    } else {
      alert(`${inputValue} is an odd number`);
    }
  } else {
    alert(`${inputValue} is not a number. Please enter a correct value.`);
  }
};
