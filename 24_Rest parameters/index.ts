
const openFridge = (...foods:string[]):void=>{
    console.log(...foods);
}

openFridge("pizza","hamburger",'hotdog',"ramen");

const getFood = (...foods:string[]):string[] =>{
    return foods;
}

const foods:string[] = getFood("pizza","hamburger",'hotdog',"ramen");
console.log(foods);


const sum = (...numbers:number[]):number =>{
    let sum=0;
    for(let number of numbers){
        sum += number;
    }
    return sum;
}

console.log(sum(1,2,3));

const avg = (...numbers:number[]):number =>{
    let sum=0;
    for(let number of numbers){
        sum += number;
    }
    return sum/numbers.length;
}

console.log(avg(1,2,3))

function combineString(...names:string[]):string{
    return names.join("-");
}

console.log(combineString("Jehan","Hasan","Adib","III"));