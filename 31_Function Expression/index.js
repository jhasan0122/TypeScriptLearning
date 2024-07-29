function hello1() {
    console.log("Hello");
}
var hello = function () {
    console.log("Hello");
};
// hello1();
// setTimeout(hello1,3000);
// setTimeout(hello,3000);
setTimeout(function () {
    console.log('Hello');
}, 3000);
//-----------------------------------
var numbers = [1, 2, 3, 4, 5, 6];
var squares = numbers.map(function (element) {
    return Math.pow(element, 2);
});
console.log(squares);
var cubes = numbers.map(function (element) {
    return Math.pow(element, 2);
});
console.log(cubes);
var evenNum = numbers.filter(function (element) {
    return element % 2 == 0;
});
console.log(evenNum);
var oddNum = numbers.filter(function (element) {
    return element % 2 != 0;
});
console.log(oddNum);
var total = numbers.reduce(function (accumulator, element) {
    return accumulator + element;
});
console.log(total);
var findMax = numbers.reduce(function (accumulator, element) {
    return Math.max(accumulator, element);
});
console.log(findMax);
