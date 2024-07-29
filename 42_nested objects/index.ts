type Address = {
    street:string;
    city:string;
    country:string;
}


type Person = {
    fullName: string,
    age: number,
    isStudent : boolean,
    hobbies : string[],
    address : Address
}

const person:Person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent : true,
    hobbies : ["karate","jellyfishing","cooking"],
    address: {
        street : "124 Conch St.",
        city: "Bikini Bottom",
        country : "Int. Water"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[0]);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.country);

for(const property in person.address){
    console.log(person.address[property]);
}