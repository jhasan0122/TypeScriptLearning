var x = 3;
fun1();
fun2();
function fun1() {
    var x = 1;
    console.log(x);
}
function fun2() {
    console.log(x);
    x = 78;
}
//expect : 1 3
