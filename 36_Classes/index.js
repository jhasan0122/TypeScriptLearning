var Car = /** @class */ (function () {
    function Car(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        Car.carCount++;
    }
    Car.getCarCount = function () {
        console.log("There are ".concat(Car.carCount, " cars"));
    };
    Car.getCar = function () {
        return Car.carCount;
    };
    Car.prototype.aboutMyCar = function () {
        console.log("This is my ".concat(this.color, " colored ").concat(this.model, " model car"));
    };
    Car.carCount = 0;
    return Car;
}());
var car1 = new Car("Ford", "Mustag", 2024, "red");
car1.aboutMyCar();
var car2 = new Car("Chevrolet", "Camero", 2025, "blue");
console.log(Car.getCar());
var car3 = new Car("Dodge", "Charger", 2026, "silver");
car3.aboutMyCar();
Car.getCarCount();
