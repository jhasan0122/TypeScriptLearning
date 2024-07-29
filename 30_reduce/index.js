var prices = [5, 30, 10, 25, 15, 20];
var total = prices.reduce(findTotal);
console.log(total);
function findTotal(accumulator, element) {
    return accumulator + element;
}
//---------------------
var grades = [75, 50, 90, 80, 65, 95];
var maxi = grades.reduce(findMax);
console.log(maxi);
var mini = grades.reduce(findMin);
console.log(mini);
function findMax(accumulator, element) {
    return Math.max(accumulator, element);
}
function findMin(accumulator, element) {
    return Math.min(accumulator, element);
}
