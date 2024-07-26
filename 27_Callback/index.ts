
const resultShow = document.getElementById('resultShow');

hello(wait,leave,goodbye);

function wait() {
    console.log("Waiting")
}

function leave() {
    console.log("Leaving now");
}

function goodbye() {
    console.log(`Goodbye`);
}

function hello(callback,callback2,callback3) {
    callback();
    console.log(`Hello`);
    callback();
    callback2();
    callback3();
}

let x = 10;
let y = 2;

arithmeticOperation(sum,sub,mul,div,x,y);

function arithmeticOperation(work1,work2,work3,work4,a,b){
    work1(avg,a,b);
    work2(a,b);
    work3(confirmResult,a,b);
    work4(a,b);
}

function sum(avg,a,b) {
    console.log(`Sum is : ${a+b}`);
    avg(a,b);
}

function avg(a,b) {
    console.log(`Avg is : ${(a+b)/2}`);
}


function sub(a,b) {
    console.log(`Sub is : ${a-b}`);
}
function mul(cR,a,b) {
    console.log(`Mul is : ${a*b}`);
    cR(a*b);
}
function div(a,b) {
    console.log(`Div is : ${a/b}`);
}

function confirmResult(result){
    resultShow.textContent = result;
}