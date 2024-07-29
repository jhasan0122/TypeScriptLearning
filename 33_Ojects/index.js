var person1 = {
    firstName: "Jehan",
    lastName: "Hasan",
    favFood: "Pizza",
    age: 30,
    isEmployed: false,
    sayHello: function () {
        console.log("Hi I am ".concat(this.firstName));
    },
    eat: function () {
        console.log("I am eating ".concat(this.favFood));
    },
};
var person2 = {
    firstName: "Adib",
    lastName: "Ullah",
    favFood: "Fish",
    age: 23,
    isEmployed: true,
    sayHello: function () {
        console.log("Hi I am ".concat(this.firstName));
    },
    eat: function () {
        console.log("I am eating ".concat(this.favFood));
    },
};
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.isEmployed);
person1.sayHello();
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.isEmployed);
person2.sayHello();
