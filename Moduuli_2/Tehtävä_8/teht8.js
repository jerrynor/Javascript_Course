

function concat(stringsArray) {
    let conString = "";
    for (let i = 0; i < stringsArray.length; i++) {
        conString += stringsArray[i];
    }
    return conString;
}

const names = ['Tempo', 'Risto', 'Rysty', 'Malvin'];
const result = concat(names);

document.querySelector("#strings").innerHTML = result;
