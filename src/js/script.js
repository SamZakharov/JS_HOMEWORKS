'use strict';

const userNumber = prompt('Введіть число');
const userAge = parseInt(userNumber);

if (!isNaN(userAge)) {
    let userAgeStr;

    if (userAge >= 0) {
        if (userAge > 10 && userAge < 20) {
            userAgeStr = 'років';
        } else {
            const lastDigit = userAge % 10;

            if (lastDigit === 1) {
                userAgeStr = 'рік';
            } else if (lastDigit >= 2 && lastDigit <= 4) {
                userAgeStr = 'роки';
            } else {
                userAgeStr = 'років'
            }
        }

        alert(`${userAge} ${userAgeStr}`);

    } else {
        alert('Введіть додатнє число.');
    }

} else {
    alert('Введіть коректне число.');
}
