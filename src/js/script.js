// Task 1

const itemAndPrice = {
  potato: 100,
  bred: 200,
  carrot: 150,
};

const reducePrices = (products) => {
  const reducedPrices = {};
  for (const key in products) {
    reducedPrices[key] = products[key] * 0.9;
  }
  return reducedPrices;
};

const reducedProducts = reducePrices(itemAndPrice);
console.log(reducedProducts);

// Task 2

const students = [
  { name: 'Vova', grade: 85 },
  { name: 'Alexadr', grade: 92 },
  { name: 'Andrey', grade: 88 },
  { name: 'Masha', grade: 91 },
  { name: 'Sam', grade: 95 },
  { name: 'Anastasia', grade: 90 },

];

const goodStudents = students.filter((sudent) => sudent.grade >= 90);
console.log(goodStudents);
