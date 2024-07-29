
class Car{
     make: string;
     model:string;
     year: number;
     color:string;

     static carCount = 0;



    constructor(make?:string,model?:string,year?:number,color?:string) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        Car.carCount++;
    }



    aboutMyCar():void{
        console.log(`This is my ${this.color} colored ${this.model} model car`);
    }
}

class Bus extends Car{
    sit:number =45;

    constructor(make,model,year,color,sit) {
        super(make,model,year,color);
        this.sit = sit;
    }

    drive(speed:number){
        console.log(`Bus is running with ${this.sit} number of sits with ${speed} km/h`)
    }
}

class DoubleDecker extends Bus{
    deck:number
    constructor(make,model,year,color,sit,deck) {
        super(make,model,year,color,sit);
        this.deck = deck;
    }
    drive(speed: number) {
        console.log(`Double Bus is running with ${this.sit} number of sits with ${speed} km/h`)
    }
}


class Truck extends Car{
    private wheels;

    constructor(make,model,year,color,wheels){
        super(make,model,year,color);
        this.wheels = wheels;
    }
    trip(){
        console.log(`Truck is running with ${this.wheels} wheels`);
        super.aboutMyCar();
    }
}



const car1:Car = new Car("Ford","Mustag",2024,"red");

const car2:Car = new Car("BMW");

car1.aboutMyCar();

const bus = new Bus("Chevrolet","Camero",2025,"blue",42);

bus.aboutMyCar();
bus.drive(98);

// const truck = new Truck("Dodge","Charger",2026,"silver")

const truck2 = new Truck("Dodge","Charger",2026,"silver",16);
