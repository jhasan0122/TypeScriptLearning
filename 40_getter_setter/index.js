var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (newFirstName) {
            if (typeof newFirstName === "string" && newFirstName.length > 0) {
                this._firstName = newFirstName;
            }
            else {
                console.error("First Name must be non empty string");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (newLastName) {
            if (typeof newLastName === "string" && newLastName.length > 0) {
                this._lastName = newLastName;
            }
            else {
                console.error("Last Name must be non empty string");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (newAge) {
            if (typeof newAge === "number" && newAge >= 0) {
                this._age = newAge;
            }
            else {
                console.error("Age must be non negative number");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this._firstName + " " + this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person("Jehan", "Hasan", "30");
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);
