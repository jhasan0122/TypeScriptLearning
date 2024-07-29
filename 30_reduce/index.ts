
const prices = [5,30,10,25,15,20];

const total:number = prices.reduce(findTotal);
console.log(total);

function findTotal(accumulator:number,element:number):number {
    return accumulator + element;
}

//---------------------

const grades = [75,50,90,80,65,95];

const maxi = grades.reduce(findMax);
console.log(maxi);

const mini = grades.reduce(findMin);
console.log(mini);

function findMax(accumulator:number,element:number):number {
    return Math.max(accumulator,element);
}
function findMin(accumulator:number,element:number):number {
    return Math.min(accumulator,element);
}