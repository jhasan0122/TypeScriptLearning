
type Fruit = {
    name:string,
    color: string,
    calories:number
}

const fruits:Fruit[] = [{name:"Apple",color:"red",calories:95},
                        {name:"Orange",color:"orange",calories:45},
                        {name:"banana",color:"yellow",calories:105},
                        {name:"coconut",color:"white",calories:159},
                        {name:"pineapple",color:"yellow",calories:37}];

console.log(fruits[3].name);
console.log(fruits[3].calories);

fruits.push({name:"grapes",color:"purple",calories: 62});
fruits.pop();

console.log(fruits);

// fruits.splice(1,2);
// console.log(fruits);

// Foreach

fruits.forEach((fruit:Fruit):void =>{
    console.log(`Name: ${fruit.name} Calories: ${fruit.calories} Color: ${fruit.color}`)
})

// Map

const fruits_name:string[] = fruits.map((fruit:Fruit):string =>{
    return fruit.name;
});
console.log(fruits_name);

const fruits_colors:string[] = fruits.map((fruit:Fruit):string =>{
    return fruit.color;
});
console.log(fruits_colors);

const fruits_calories:number[] = fruits.map((fruit:Fruit):number =>{
    return fruit.calories;
});
console.log(fruits_calories);

//Filter

const longNameFruits:Fruit[] = fruits.filter((fruit:Fruit):boolean => {
    return fruit.name.length > 6;
})
console.log(longNameFruits);

const yellowColoredFruits:Fruit[] = fruits.filter((fruit:Fruit):boolean => {
    return fruit.color == "yellow";
})
console.log(yellowColoredFruits);

const highCalFruits:Fruit[] = fruits.filter((fruit:Fruit):boolean => {
    return fruit.calories >= 100;
})
console.log(highCalFruits);

// Reduce

const maxCalFruit:Fruit = fruits.reduce((max:Fruit,fruit:Fruit):Fruit =>{
    return (fruit.calories > max.calories) ? fruit : max;
})
console.log(maxCalFruit);


const minCalFruit:Fruit = fruits.reduce((min:Fruit,fruit:Fruit):Fruit =>{
    return (fruit.calories < min.calories) ? fruit : min;
})
console.log(minCalFruit);