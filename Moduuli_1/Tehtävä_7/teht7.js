let numberOfDice = Number(prompt('How many dice you want to roll?'));

if (numberOfDice > 0) {
    let sum = 0;

    for (let i = 0; i < numberOfDice; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        sum += roll;
    }

    document.querySelector('#p').innerHTML = `Sum of the dice is ${sum}`;
} else {
    document.querySelector('#p').innerHTML = 'Please enter a valid number of dice rolls.';
}
