
let houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

let randomHouse = houses[Math.floor(Math.random() * houses.length)];

let studentName = prompt("What is your name?");

document.querySelector('#p').innerHTML = 'Hello ' + studentName + '. You are a ' + randomHouse;