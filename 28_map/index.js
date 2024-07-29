var numbers = [1, 2, 3, 4, 5];
var newNumber = numbers.map(square);
var newNumber2 = numbers.map(cube);
newNumber.forEach(printConsole);
newNumber2.forEach(printConsole);
function square(element) {
    return Math.pow(element, 2);
}
function cube(element) {
    return Math.pow(element, 3);
}
function printConsole(element) {
    console.log(element);
}
//-------------------------------------
var twoDArray = [[7, 8, 9],
    [4, 5, 6]];
var newTwoDArray = twoDArray.map(outer);
console.log(newTwoDArray);
function outer(oneDArray) {
    return oneDArray.map(inner);
}
function inner(element) {
    return element * element;
}
//----------------------------------
var fruits = ["aPple", "ranGe", "BanAna", "CocoNut"];
var UpperFruits = fruits.map(upperCase);
console.log(UpperFruits);
var lowerFruits = fruits.map(lowerCase);
console.log(lowerFruits);
function upperCase(element) {
    return element.toUpperCase();
}
function lowerCase(element) {
    return element.toLowerCase();
}
