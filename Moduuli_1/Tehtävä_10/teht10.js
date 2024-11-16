let numberOfDice = Number(prompt("Enter the number of dice:"));
let targetSum = Number(prompt("Enter the sum of the dice eyes you are interested in:"));
let repetitions = 10000;
let successfulRolls = 0;

function rollDice(numDice) {
    let sum = 0;
    for (let i = 0; i < numDice; i++) {
        sum += Math.floor(Math.random() * 6) + 1;
    }
    return sum;
}

for (let i = 0; i < repetitions; i++) {
    if (rollDice(numberOfDice) === targetSum) {
        successfulRolls++;
    }
}

let probability = (successfulRolls / repetitions) * 100;

document.querySelector("#p").innerHTML =
    `Probability to get sum ${targetSum} with ${numberOfDice} dice is ${probability.toFixed(2)}%`;
