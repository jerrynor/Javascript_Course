let numbers = [];

let giveNumbers = true;

while(giveNumbers) {
    let number = Number(prompt('Give a number: '));

    if(numbers.includes(number)) {
        console.log(`The number ${number} has already been given.`)
        giveNumbers = false;
    }else {
        numbers.push(number);
    }
}

numbers.sort((a, b) => a - b);

console.log(numbers);