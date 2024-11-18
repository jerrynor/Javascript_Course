let numbers = 0;
let numberList = [];


for (let i = 0; i <= 4; i++) {
    numbers = Number(prompt("Type in five numbers: "));
    numberList.push(numbers);

}

for (let i = numberList.length - 1; i >= 0; i--) {
    console.log(numberList[i]);
}





