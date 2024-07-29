
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

//----------------------------------

let fruits = ["aPple","ranGe","BanAna","CocoNut"];

let UpperFruits = fruits.map(upperCase);
console.log(UpperFruits)
let lowerFruits = fruits.map(lowerCase);
console.log(lowerFruits)

function upperCase(element) {
    return element.toUpperCase();
}
function lowerCase(element) {
    return element.toLowerCase();
}

//---------------------------

const dates = ["2024-1-10","2025-2-20","2026-3-30"];

let divDate = dates.map(fomatDate);
console.log(divDate);

function fomatDate(element:string) {
    const parts:string[] = element.split("-");
    return `${parts[0]}/${parts[1]}/${parts[2]}`;
}