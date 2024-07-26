function add(a, b) {
    return a + b;
}
var substract = function (a, b) {
    return a - b;
};
var multiply = function (a, b) {
    return a * b;
};
var isEven = function (a) {
    return (a % 2 == 0);
};
var isPrime = function (a) {
    for (var i = 2; i <= a / 2; i++) {
        if (a % i == 0) {
            return false;
        }
    }
    return true;
};
function isValidEmail(email) {
    return email.includes("@");
}
console.log(add(5, 15));
console.log(substract(100, 8));
console.log(isEven(8));
console.log(isPrime(9));
console.log(isValidEmail("jehan@"));
