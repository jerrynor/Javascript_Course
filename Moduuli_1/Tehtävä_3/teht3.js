let number1 = Number(prompt("Give me the first number:"));
let number2 = Number(prompt("Give me the second number:"));
let number3 = Number(prompt("Give me the third number:"));

document.querySelector('#p').innerHTML =

    `Summa: ${number1 + number2 + number3}
     Tulo: ${number1 * number2 * number3}
     Keskiarvo: ${number1 + number2 + number3 / 3}`;
