

let age = 25;
let price = 10.99;
let gpa = 2.1;

let firstName = "Jehan";
let favouriteFood = "Pizza";
let email = "jhasan0122@gmail.com";

let online = true;
let student = false;


let fullBName = firstName + "Hasan";

console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your cgpa is ${gpa}`);
console.log(typeof firstName);
console.log(firstName);
console.log(`Your name is ${firstName}`)
console.log(`You like ${favouriteFood}`)
console.log(`Your email is ${email}`)

console.log(typeof online);
console.log(`Bro is online: ${online}`)

document.getElementById('p1').textContent = `Fullname :${fullBName}`;
document.getElementById('p2').textContent = `Age :${age}`;
document.getElementById('p3').textContent = `CGPA :${gpa}`;