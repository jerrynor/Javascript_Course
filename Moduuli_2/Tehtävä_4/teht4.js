let numbers = [];
let number;

do {
    number = Number(prompt('Give me a number (press 0 to stop):'));
    if (number !== 0) {
        numbers.push(number);
    }
} while (number !== 0);

numbers.sort((a, b) => b - a);

console.log(numbers);
