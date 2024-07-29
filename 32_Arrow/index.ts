


const hello =  ():void=> {
    console.log("Hello");
}

// hello1();

// setTimeout(hello1,3000);
// setTimeout(hello,3000);


setTimeout( ():void=> {
    console.log('Hello')
},3000);

//-----------------------------------

const numbers= [1,2,3,4,5,6];

const sqares:number[] = numbers.map((element:number):number =>{
    return Math.pow(element,2);
})

console.log(sqares);


const cubes:number[] = numbers.map((element:number):number =>{
    return Math.pow(element,3);
})

console.log(cubes);

const evenNum:number[] = numbers.filter((element:number):boolean =>{
    return element % 2 == 0;
})

console.log(evenNum);

const oddNum:number[] = numbers.filter((element:number):boolean =>{
    return element % 2 != 0;
})

console.log(oddNum);

const total:number = numbers.reduce((accumulator:number,element:number):number =>{
    return accumulator + element;
})

console.log(total);

const  findMax:number = numbers.reduce((accumulator:number,element:number):number => {
    return Math.max(accumulator,element);
})
console.log(findMax);