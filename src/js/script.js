'use strict';

const askHours = +prompt('Please indicate the number of hours:');
const secPerHour = askHours * 3600;

alert(`There are ${secPerHour} seconds in ${askHours} hours`);