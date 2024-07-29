
let numbers:number[] = [1,2,3,4,5,6,7]

let evenNum = numbers.filter(isEven);
console.log(evenNum);

let oddNum = numbers.filter(isOdd);
console.log(oddNum);
function isEven(element:number) {
    return element % 2 == 0;
}
function isOdd(element:number):boolean {
    return element % 2 != 0;
}

//------------------------

const ages = [16,17,18,18,19,20,60];

let adultPeople = ages.filter(isAdult);
console.log(adultPeople);
function isAdult(element:number) {
    return element >= 18;
}

//----------------------------------

const words = ["apple","orange","banana","kiwi","pomegranate","coconut"];

const lognW = words.filter(longWord);
console.log(lognW);

function longWord(element:string):boolean {
    return element.length > 6;
}