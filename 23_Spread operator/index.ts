
let numbers:number[] = [75,78,5,69,96,35,2]

console.log(numbers);
console.log(...numbers);

let maximum = Math.max(...numbers);
console.log(maximum);
let minimum = Math.min(...numbers);
console.log(minimum);

let username = "Jehan Hasan";


console.log(username.split(' ').join('-'));

let fruits = ["apple","orange","banana"];
let vegetables = ["carrots","celery","potato"];

let foods = [...fruits,...vegetables,"eggs","milk"];

console.log(foods)

