
const fruits:string[] = ['Banana','Apple',"Orange"]



fruits[0] = "Coconut";    //replace
console.log(fruits)

fruits.push("Hot dog");  //insert last
console.log(fruits)

fruits.unshift('Barger') //insert first
console.log(fruits)

fruits.shift()    //delete first
console.log(fruits)

// console.log(fruits[0])

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log(fruits.indexOf('Orange'));

for (let fruit of fruits) {
    console.log(fruit +"---" +  fruits.indexOf(fruit))
}

