
function outer() {
    let message = "Jehan Hasan";
    function inner() {
        console.log(message);
    }
    inner();
}

outer();

type FunReturnFun = {
    increment():void;
    getCount():number;
}

function createCounter():FunReturnFun {
    let count = 0;
    function increment():void {
        count++;
    }
    function getCount():number {
        return count;
    }
    return {increment, getCount};
}

let counter = createCounter();

counter.increment();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());

//------------------------------

type CreateGame = {
    decrease(points:number):void,
    reset():void,
    increase(points:number):void,
    getScore():number
}

function createGame():CreateGame {
    let score = 0;
    function decrease(points:number):void {
        score -= points;
        console.log(`-${points}`);
    }
    function reset():void {
        score = 0;
        console.log("Reset")
    }
    function increase(points:number):void {
        score += points;
        console.log(`+${points}`);
    }
    function getScore():number {
        return score;
    }
    return {increase,decrease,getScore,reset};
}

const game:CreateGame = createGame();

game.increase(5);
game.increase(7);
console.log(game.getScore());
game.decrease(3);
console.log(game.getScore());
game.reset();
game.decrease(2);
console.log(game.getScore());


