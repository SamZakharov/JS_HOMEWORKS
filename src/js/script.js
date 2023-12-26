'use strict';
////////////////1. **Створення та Модифікація Об'єктів:**////////////////////////////
const student = {
    name: 'Sam',
    age: 28,
    grade: 'Good'
};

student.grade = 'Exelent';
student.course = 'Front-end Pro';

console.log(student.grade);
console.log(student.course);
console.log(student);

//////////////2. **Робота з Вкладеними Об'єктами:**////////////////////////////

const book = {
    title: 'The Lord of the Rings',
    aouthor: 'John Tolkien',
    year: '1968',
    publisher: {
        name: 'Allen & Unwin',
        location: 'United Kingdom'
    }
};

console.log(book);


/////////////////3. **Перебір Властивостей Об'єкта:**///////////////////////
const movie = {
    title: 'The Lord of the Rings',
    director: 'Peter Jackson\'s',
    year: '2001–2003',
    genre: 'Fantasy'
};

for (const key in movie) {
    if (movie.hasOwnProperty(key)) {
        const value = movie[key];
        console.log(`${key}: ${value}`);
    }
}
///////////////4. **Співставлення Об'єктів:**///////////////////
const person1 = {
    firstName: "Sam",
    lastName: "Zakharov",
    age: 35
};

const person2 = {
    firstName: "Sam",
    lastName: "Zakharov",
    age: 35
};

console.log(JSON.stringify(person1) === JSON.stringify(person2));

///////////////////////5. **Робота з Масивом Об'єктів:**///////////////////

const animals = [
    {type: 'Cat', name: 'Nami'},
    {type: 'Dog', name: 'Chopper'},
    {type: 'Pig', name: 'putin'},
    {type: 'Lion', name: 'Alex'},
    {type: 'Zebra', name: 'Marty'},
    {type: 'Pigeon', name: 'Missy'},
];

console.log(animals);

animals.push({type: 'Rabbit', name: 'Steve'});

console.log(animals);




