var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var numbers = [75, 78, 5, 69, 96, 35, 2];
console.log(numbers);
console.log.apply(console, numbers);
var maximum = Math.max.apply(Math, numbers);
console.log(maximum);
var minimum = Math.min.apply(Math, numbers);
console.log(minimum);
var username = "Jehan Hasan";
console.log(username.split(' ').join('-'));
var fruits = ["apple", "orange", "banana"];
var vegetables = ["carrots", "celery", "potato"];
var foods = __spreadArray(__spreadArray(__spreadArray([], fruits, true), vegetables, true), ["eggs", "milk"], false);
console.log(foods);
