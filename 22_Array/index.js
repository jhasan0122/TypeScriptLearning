var fruits = ['Banana', 'Apple', "Orange"];
fruits[0] = "Coconut"; //replace
console.log(fruits);
fruits.push("Hot dog"); //insert last
console.log(fruits);
fruits.unshift('Barger'); //insert first
console.log(fruits);
fruits.shift(); //delete first
console.log(fruits);
// console.log(fruits[0])
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
console.log(fruits.indexOf('Orange'));
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit + "---" + fruits.indexOf(fruit));
}
