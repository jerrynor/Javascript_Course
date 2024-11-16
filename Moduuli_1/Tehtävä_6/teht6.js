if (confirm('Should I calculate the square root?')) {
    let number = Number(prompt('Enter a number'));
    if (number < 0) {
        document.querySelector('#p').innerHTML = 'The square root of a negative number is not defined';
    } else {
        let squareRoot = Math.sqrt(number);
        document.querySelector('#p').innerHTML = `The square root of ${number} is ${squareRoot}`;
    }
} else {
    document.querySelector('#p').innerHTML = 'The square root is not calculated';
}
