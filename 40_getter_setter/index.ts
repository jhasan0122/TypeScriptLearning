class Person{
    _firstName:string;
    _lastName:string;
    _age:number;
    constructor(firstName:string,lastName:string,age:number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First Name must be non empty string");
        }
    }
    set lastName(newLastName:string){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("Last Name must be non empty string");
        }
    }

    set age(newAge:number){
        if(typeof newAge === "number" && newAge >= 0){
            this._age =newAge;
        }
        else{
            console.error("Age must be non negative number");
        }
    }

    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get fullName(){
        return this._firstName + " " + this._lastName;
    }
    get age(){
        return this._age;
    }
}

const person = new Person("Jehan","Hasan",30);
// person.firstName = "78";


console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);