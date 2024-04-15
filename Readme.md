**Дескриптори**

1. Практичне Завдання:
* Створити об'єкт user з властивістю name.
* Використовуючи Object.defineProperty, встановити дескриптор для name таким чином, щоб властивість була не перезаписуваною (non-writable).
* Додати ще одну властивість age з дескрипторами, які роблять цю властивість неперелічуваною (non-enumerable).
* Продемонструвати різницю в поведінці цих властивостей при використанні циклу for...in та методу Object.keys().
2. Розширене Завдання:
* Використовуючи дескриптори, створити геттер і сеттер для властивості fullName в об'єкті user, які будуть автоматично оновлювати name та нову властивість surname.
* Демонстрація роботи геттера та сеттера, встановивши fullName та вивівши name та surname.
3. Додаткове Завдання:
* Вивчити метод Object.freeze() та пояснити, як він взаємодіє з дескрипторами властивостей.
* Створити приклад, де об'єкт спочатку заморожується за допомогою Object.freeze(), а потім спробувати змінити дескриптори його властивостей.