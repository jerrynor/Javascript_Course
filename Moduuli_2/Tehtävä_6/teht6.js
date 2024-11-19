let diceResult;
let resultList = document.createElement('ul');
let resultsContainer = document.getElementById('diceResults');

function getDice(){
    return Math.floor(Math.random() * 6) + 1;
}

do{
    let listElement = document.createElement('li');

    diceResult = getDice();
    listElement.textContent = diceResult;
    resultList.appendChild(listElement);
} while(diceResult !== 6);

resultsContainer.appendChild(resultList);

