function outer() {
    var message = "Jehan Hasan";
    function inner() {
        console.log(message);
    }
    inner();
}
outer();
function createCounter() {
    var count = 0;
    function increment() {
        count++;
    }
    function getCount() {
        return count;
    }
    return { increment: increment, getCount: getCount };
}
var counter = createCounter();
counter.increment();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());
function createGame() {
    var score = 0;
    function decrease(points) {
        score -= points;
        console.log("-".concat(points));
    }
    function reset() {
        score = 0;
        console.log("Reset");
    }
    function increase(points) {
        score += points;
        console.log("+".concat(points));
    }
    function getScore() {
        return score;
    }
    return { increase: increase, decrease: decrease, getScore: getScore, reset: reset };
}
var game = createGame();
game.increase(5);
game.increase(7);
console.log(game.getScore());
game.decrease(3);
console.log(game.getScore());
game.reset();
game.decrease(2);
console.log(game.getScore());
