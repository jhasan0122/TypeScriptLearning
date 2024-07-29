
class Car{
    private make: string;
    private model:string;
    private year: number;
    private color:string;

    private static carCount = 0;
    constructor(make,model,year,color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        Car.carCount++;
    }

    static getCarCount():void{
        console.log(`There are ${Car.carCount} cars`);
    }

    static getCar():number{
        return Car.carCount;
    }

    aboutMyCar():void{
        console.log(`This is my ${this.color} colored ${this.model} model car`);
    }
}

const car1:Car = new Car("Ford","Mustag",2024,"red");

car1.aboutMyCar();
const car2:Car = new Car("Chevrolet","Camero",2025,"blue");
console.log(Car.getCar())
const car3:Car = new Car("Dodge","Charger",2026,"silver");
car3.aboutMyCar();

Car.getCarCount();

