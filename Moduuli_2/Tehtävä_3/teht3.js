let dogs = [];

for (let i = 0; i < 6; i++) {
    let dog = prompt('Give me a name of a dog: ');
    dogs.push(dog);
}

dogs.sort().reverse();

let dogsContainer = document.getElementById('dogs');

let dogList = document.createElement('ul');

for (let i = 0; i < dogs.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = dogs[i];
    dogList.appendChild(listItem);
}

dogsContainer.appendChild(dogList);

