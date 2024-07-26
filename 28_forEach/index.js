var numbers = [1, 2, 3, 4, 5];
numbers.forEach(double);
numbers.forEach(printConsole);
function double(element, index, array) {
    array[index] = element * 2;
}
function printConsole(element) {
    console.log(element);
}
// ----------------------------------------------------------------
var fruits = ["aPple", "ranGe", "BanAna", "CocoNut"];
fruits.forEach(uppercase);
fruits.forEach(lowercase);
fruits.forEach(capitalize);
fruits.forEach(printFruit);
function uppercase(element, index, array) {
    array[index] = element.toUpperCase();
}
function lowercase(element, index, array) {
    array[index] = element.toLowerCase();
}
function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}
function printFruit(element) {
    console.log(element);
}
