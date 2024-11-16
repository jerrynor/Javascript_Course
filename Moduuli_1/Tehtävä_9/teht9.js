let number = Number(prompt('Enter an integer:'));

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let result = document.querySelector('#p');
if (isPrime(number)) {
    result.innerHTML = `The number ${number} is a prime number.`;
} else {
    result.innerHTML = `The number ${number} is not a prime number.`;
}
