var openFridge = function () {
    var foods = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        foods[_i] = arguments[_i];
    }
    console.log.apply(console, foods);
};
openFridge("pizza", "hamburger", 'hotdog', "ramen");
var getFood = function () {
    var foods = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        foods[_i] = arguments[_i];
    }
    return foods;
};
var foods = getFood("pizza", "hamburger", 'hotdog', "ramen");
console.log(foods);
var sum = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var number = numbers_1[_a];
        sum += number;
    }
    return sum;
};
console.log(sum(1, 2, 3));
var avg = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, numbers_2 = numbers; _a < numbers_2.length; _a++) {
        var number = numbers_2[_a];
        sum += number;
    }
    return sum / numbers.length;
};
console.log(avg(1, 2, 3));
function combineString() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    return names.join("-");
}
console.log(combineString("Jehan", "Hasan", "Adib", "III"));
