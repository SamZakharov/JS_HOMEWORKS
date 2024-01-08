'use strict';

let userChoiceCity = '';
let favoriteUserSport = '';

const userAge = prompt('Please put your age:');
if (isNaN(+userAge)) {
    alert('This is not a number. Please put correct age');
} else if (userAge === null) {
    alert('It\'s a pity that you didn\'t want to write your age');
}
const userCity = prompt('Please put city where do you live:');
if (userCity === null) {
    alert('It\'s a pity that you didn\'t want to write your city');
}
const userSport = prompt('Please put your favorite sport:');
if (userSport === null) {
    alert('It\'s a pity that you didn\'t want to write your favourite sport');
}


switch (userCity) {
    case 'Kyiv' : {
        userChoiceCity = 'You live in the capital city of Ukraine';
        break;
    }
    case 'London' : {
        userChoiceCity = 'You live in the capital city of England and the United Kingdom';
        break;
    }
    case 'Washington' : {
        userChoiceCity = 'You live in the capital city and the federal district of the United States';
        break;
    }

    case null: {
        userChoiceCity = null;
        break
    }

    default: {
        userChoiceCity = 'You live in city ' + userCity;
        break;
    }
}


switch (userSport) {
    case 'basketball': {
        favoriteUserSport = 'cool! Do you want to be like Michael Jordan?'
        break
    }
    case 'football': {
        favoriteUserSport = 'cool! Do you want to be like Karim Benzema?'
        break
    }
    case 'boxing': {
        favoriteUserSport = 'cool! Do you want to be like Michael Gerard Tyson?'
        break
    }

    case null: {
        favoriteUserSport = null;
        break
    }
    default: {
        favoriteUserSport = 'also a cool sport too!';
    }
}

let finishMessage = (userAge !== null ? `Your age is ${userAge}.` : 'Are you ashamed of your age?') + `\n`;
finishMessage += (userChoiceCity !== null ? userChoiceCity : `Do you live in a tent?`) + `\n`;
finishMessage += (userSport !== null ? `I see that you like ${userSport} and this is ${favoriteUserSport}` : 'As I can see, you don\'t like any sports. Sad:(') + `\n`;


alert(finishMessage);

