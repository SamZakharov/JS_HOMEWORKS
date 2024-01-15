'use strict';


const userNumber = prompt('Введіть число');
const userAge = parseInt(userNumber);

if (!isNaN(userAge)) {
    let userAgeStr;

    if (userAge >= 0) {
        if (userAge > 10 && userAge < 20) {
            userAgeStr = 'років';
        } else {
            switch (userAge % 10) {
                case 1 :
                    userAgeStr = 'рік';
                    break;

                case 2:
                case 3:
                case 4:
                    userAgeStr = 'роки';
                    break;

                default:
                    userAgeStr = 'років';
                    break;
            }
        }

        alert(`${userAge} ${userAgeStr}`);

    } else {
        alert('Введіть додатнє число.');
    }

} else {
    alert('Введіть коректне число.');
}
