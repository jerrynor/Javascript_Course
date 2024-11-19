function even(numberArray){
    let evenNumbers = [];
    for(let i=0;i<numberArray.length;i++){
        if(numberArray[i] % 2 === 0){
            evenNumbers.push(numberArray[i]);
        }
    }
    return evenNumbers;
}

const numbersList = [2, 7, 4, 5];
let secondList = even(numbersList);

console.log('Original array: ', numbersList);
console.log('Even numbers array: ', secondList);

