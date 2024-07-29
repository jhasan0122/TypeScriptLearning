let numbers = [1,10,2,9,3,8,4,7,5,6];

numbers.sort((a,b) => a - b);
console.log(numbers);

numbers.sort((a,b) => b - a);
console.log(numbers);

type People ={
    name:string,
    age:number,
    gpa:number
}

const peoples = [{name: "Spongebob", age: 30 , gpa: 3.0},
                                            {name: "Patrix", age: 37 , gpa: 1.5},
                                            {name: "Squidward", age: 51 , gpa: 2.5},
                                            {name: "Sandy", age: 27 , gpa: 4.0}];
peoples.sort((a:People,b:People) => b.age - a.age);

console.log(peoples);