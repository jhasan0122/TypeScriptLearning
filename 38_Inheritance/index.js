var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        Car.carCount++;
    }
    Car.prototype.aboutMyCar = function () {
        console.log("This is my ".concat(this.color, " colored ").concat(this.model, " model car"));
    };
    Car.carCount = 0;
    return Car;
}());
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus(make, model, year, color, sit) {
        var _this = _super.call(this, make, model, year, color) || this;
        _this.sit = 45;
        _this.sit = sit;
        return _this;
    }
    Bus.prototype.drive = function (speed) {
        console.log("Bus is running with ".concat(this.sit, " number of sits with ").concat(speed, " km/h"));
    };
    return Bus;
}(Car));
var DoubleDecker = /** @class */ (function (_super) {
    __extends(DoubleDecker, _super);
    function DoubleDecker(make, model, year, color, sit, deck) {
        var _this = _super.call(this, make, model, year, color, sit) || this;
        _this.deck = deck;
        return _this;
    }
    DoubleDecker.prototype.drive = function (speed) {
        console.log("Double Bus is running with ".concat(this.sit, " number of sits with ").concat(speed, " km/h"));
    };
    return DoubleDecker;
}(Bus));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(make, model, year, color, wheels) {
        var _this = _super.call(this, make, model, year, color) || this;
        _this.wheels = wheels;
        return _this;
    }
    Truck.prototype.trip = function () {
        console.log("Truck is running with ".concat(this.wheels, " wheels"));
        _super.prototype.aboutMyCar.call(this);
    };
    return Truck;
}(Car));
var car1 = new Car("Ford", "Mustag", 2024, "red");
car1.aboutMyCar();
var bus = new Bus("Chevrolet", "Camero", 2025, "blue", 42);
bus.aboutMyCar();
bus.drive(98);
// const truck = new Truck("Dodge","Charger",2026,"silver")
var truck2 = new Truck("Dodge", "Charger", 2026, "silver", 16);
