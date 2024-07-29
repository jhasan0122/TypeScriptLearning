
type Person = {
    firstName:string,
    lastName: string,
    favFood:string,
    age:number,
    isEmployed:boolean,
    sayHello():void,
    eat():void,
}

const person1:Person = {
    firstName: "Jehan",
    lastName: "Hasan",
    favFood: "Pizza",
    age: 30,
    isEmployed: false,

    sayHello: function ():void {
        console.log(`Hi I am ${this.firstName}`)
    },
    eat: function () {
        console.log(`I am eating ${this.favFood}`)
    },
}
const person2:Person = {
    firstName: "Adib",
    lastName: "Ullah",
    favFood: "Fish",
    age: 23,
    isEmployed: true,

    sayHello: function ():void {
        console.log(`Hi I am ${this.firstName}`)
    },
    eat: function () {
        console.log(`I am eating ${this.favFood}`)
    },
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.isEmployed);

person1.sayHello();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.isEmployed);

person2.sayHello();