let participants = Number(prompt("How many participants?: "));

let names = [];


for (let i = 0; i < participants; i++) {
    names.push(prompt("Give me a name of the participant: "));
}

names.sort();

let namesList = "<ol>";

for (let i = 0; i < names.length; i++) {
    namesList += "<li>" + names[i] + "</li>";
}
namesList += "</ol>";

document.getElementById("names").innerHTML = namesList;