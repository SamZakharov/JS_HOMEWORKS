'use strict';

const litersOfBorsch = 48;
const weightPerLiter = 1;
const potatoesPerLiter = 4;
const potatoWeight = 0.075;
const pricePerKg = 13;

function calculatePotatoCost(litersOfBorsch, weightPerLiter, potatoesPerLiter, potatoWeight, pricePerKg) {
    const totalPotatoes = litersOfBorsch * potatoesPerLiter;

    const totalWeight = totalPotatoes * potatoWeight;

    const totalPotatoInKg = Math.ceil(weightPerLiter / potatoWeight);

    return totalPotatoInKg * pricePerKg;
}

const result = calculatePotatoCost(litersOfBorsch, weightPerLiter, potatoesPerLiter, potatoWeight, pricePerKg);
console.log(`Вартість покупки картоплі: ${result} грн`);