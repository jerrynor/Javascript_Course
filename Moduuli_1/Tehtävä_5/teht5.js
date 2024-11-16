let year = Number(prompt('Give me a year: '));

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    document.querySelector('#p').innerHTML = `Year ${year} is a leap year`;
} else {
    document.querySelector('#p').innerHTML = `Year ${year} is not a leap year`;
}
