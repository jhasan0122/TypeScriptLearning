
function add(a:number,b:number):number{
    return a+b;
}

const substract = (a:number,b:number):number=>{
    return a-b;
}
const multiply = (a:number,b:number):number=>{
    return a*b;
}

const isEven = (a:number):boolean =>{
        return (a%2 == 0);
}

const isPrime = (a:number):boolean =>{
    for (let i = 2; i <= a/2; i++) {
        if(a % i ==0){
            return false;
        }
    }
    return true;
}

function isValidEmail(email) {
    return email.includes("@");
}


console.log(add(5,15));

console.log(substract(100,8));

console.log(isEven(8));


console.log(isPrime(9));

console.log(isValidEmail("jehan@"));