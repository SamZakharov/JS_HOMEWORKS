// Пример, где hoisting помогает успешно выполнить код
// Здесь инструкция console.log(myVar) выведет "undefined", но не вызовет ошибку благодаря hoisting.
// Переменная myVar "поднимается" вверх, но её значение становится известным только после присвоения "Привет, hoisting!".

console.log(myVar); // Выведет "undefined"
var myVar = "Привет, hoisting!";
console.log(myVar); // Выведет "Привет, hoisting!"


// Пример, где hoisting призводить до ошибки
// В этом примере получим ошибку "ReferenceError: Cannot access 'myVar' before initialization".
// let и const не "поднимаются" вверх со значением "undefined", как это делает var. Попытка использовать myVar до её инициализации приводит к ошибке.

console.log(myVar); // Видаст ReferenceError: Cannot access 'myVar' before initialization
let myVar = "Привет, hoisting!";
console.log(myVar);


// Пример, где hoisting помогает успешно выполнить код
// В этом примере hoisting позволяет вызвать функцию greet перед её объявлением, так как функции поднимаются вверх вместе с их телом.

greet(); // Выведет "Привет, hoisting function!"

function greet() {
  console.log("Привет, hoisting function!");
}


// Пример, где hoisting призводит до ошибки
// В этом примере получим ошибку "TypeError: sayHello is not a function". Функции-выражения, объявленные с использованием var, также поднимаются вверх, но их значения становятся известными только после строки, где они присваиваются.
// Поэтому при попытке вызвать sayHello до её инициализации как функции возникает ошибка.

sayHello(); // Выдаст TypeError: sayHello is not a function

var sayHello = function() {
  console.log("Привет, hoisting function expression!");
};
