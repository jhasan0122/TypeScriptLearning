
const numbers = [1,2,3,4,5];

let newNumber = numbers.map(square);
let newNumber2 = numbers.map(cube);

newNumber.forEach(printConsole);
newNumber2.forEach(printConsole);

function square(element:number) {
    return Math.pow(element,2);
}
function cube(element:number) {
    return Math.pow(element,3);
}

function printConsole(element:number) {
    console.log(element);
}

//-------------------------------------

let twoDArray = [[7,8,9],
                            [4,5,6]]
let newTwoDArray = twoDArray.map(outer);

console.log(newTwoDArray);

function outer(oneDArray:number[]) {
    return oneDArray.map(inner);
}
function inner(element:number) {
    return  element * element;
}