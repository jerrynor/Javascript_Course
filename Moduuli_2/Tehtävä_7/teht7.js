let diceResult;
let resultList = document.createElement('ul');
let resultsContainer = document.getElementById('diceResults');
let sides = Number(prompt('How many sides does the dice have?'));

function getDice(sides){
    return Math.floor(Math.random() * sides) + 1;
}

do{
    let listElement = document.createElement('li');

    diceResult = getDice(sides);
    listElement.textContent = diceResult;
    resultList.appendChild(listElement);
} while(diceResult !== sides);

resultsContainer.appendChild(resultList);