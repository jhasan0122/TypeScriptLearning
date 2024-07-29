var fruits = [{ name: "Apple", color: "red", calories: 95 },
    { name: "Orange", color: "orange", calories: 45 },
    { name: "banana", color: "yellow", calories: 105 },
    { name: "coconut", color: "white", calories: 159 },
    { name: "pineapple", color: "yellow", calories: 37 }];
console.log(fruits[3].name);
console.log(fruits[3].calories);
fruits.push({ name: "grapes", color: "purple", calories: 62 });
fruits.pop();
console.log(fruits);
// fruits.splice(1,2);
// console.log(fruits);
// Foreach
fruits.forEach(function (fruit) {
    console.log("Name: ".concat(fruit.name, " Calories: ").concat(fruit.calories, " Color: ").concat(fruit.color));
});
// Map
var fruits_name = fruits.map(function (fruit) {
    return fruit.name;
});
console.log(fruits_name);
var fruits_colors = fruits.map(function (fruit) {
    return fruit.color;
});
console.log(fruits_colors);
var fruits_calories = fruits.map(function (fruit) {
    return fruit.calories;
});
console.log(fruits_calories);
//Filter
var longNameFruits = fruits.filter(function (fruit) {
    return fruit.name.length > 6;
});
console.log(longNameFruits);
var yellowColoredFruits = fruits.filter(function (fruit) {
    return fruit.color == "yellow";
});
console.log(yellowColoredFruits);
var highCalFruits = fruits.filter(function (fruit) {
    return fruit.calories >= 100;
});
console.log(highCalFruits);
// Reduce
var maxCalFruit = fruits.reduce(function (max, fruit) {
    return (fruit.calories > max.calories) ? fruit : max;
});
console.log(maxCalFruit);
var minCalFruit = fruits.reduce(function (min, fruit) {
    return (fruit.calories < min.calories) ? fruit : min;
});
console.log(minCalFruit);
