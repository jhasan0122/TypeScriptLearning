
let a = 1;
let b = 2;

[a,b] = [b,a]
console.log(a);
console.log(b);

const colors = ["red","green","blue","black","white"];

[colors[0],colors[4]] = [colors[4],colors[0]]
console.log(colors)

const [firstColor,secondColor,thirdColor,...extra] = colors;

console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)
console.log(extra)

type Person = {
    firstName: string,
    lastName: string,
    age : number,
    job?: string,         //make job as an optional
}

const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age : 30,
    job: "Fry Cook",
}
const person2 = {
    firstName: "Patric",
    lastName: "Star",
    age : 34,
}

const {firstName,lastName,age,job="unemployed"}:Person = person2