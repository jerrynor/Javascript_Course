'use strict';
const names = ['John', 'Paul', 'Jones'];

let nameElement = document.getElementById('target');

let listContent = "";

for (let i = 0; i < names.length; i++) {
    listContent += `<li>${names[i]}</li>`;
}

nameElement.innerHTML = listContent;
