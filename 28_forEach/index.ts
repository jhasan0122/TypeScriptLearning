
let numbers:number[] = [1,2,3,4,5]


numbers.forEach(double)
numbers.forEach(printConsole);

function double(element:number,index:number,array:number[]) {
    array[index] = element * 2;
}

function printConsole(element:number) {
    console.log(element)
}

//------------------------------------------
let twoDArray = [[7,8,9],
    [4,5,6]]
twoDArray.forEach(outer);

console.log(twoDArray);

function outer(oneDArray:number[]) {
    oneDArray.forEach(inner);
}
function inner(element:number,index:number,array:number[]) {
    array[index] = element * element;
}


// ----------------------------------------------------------------
let fruits = ["aPple","ranGe","BanAna","CocoNut"];

fruits.forEach(uppercase);
fruits.forEach(lowercase);
fruits.forEach(capitalize);
fruits.forEach(printFruit);

function uppercase(element:string,index:number,array:string[]) {
    array[index] = element.toUpperCase();
}
function lowercase(element:string,index:number,array:string[]) {
    array[index] = element.toLowerCase();
}
function capitalize(element:string,index:number,array:string[]) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}


function printFruit(element){
    console.log(element)
}

