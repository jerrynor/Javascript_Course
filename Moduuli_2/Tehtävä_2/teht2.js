let participants = Number(prompt("How many participants? "));
let names = [];

for (let i = 0; i < participants; i++) {
    names.push(prompt("Give me a name of the participant: "));
}

names.sort();

let namesContainer = document.getElementById("names");

let namesList = document.createElement("ul");

for (let i = 0; i < names.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = names[i];
    namesList.appendChild(listItem);
}

namesContainer.appendChild(namesList);
