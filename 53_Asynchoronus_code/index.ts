
function fun1(callback) {
    setInterval(()=>{
        console.log("task1");
        callback()
    },3000)
}

function fun2() {
    console.log("Task 2")
    console.log("Task 3")
    console.log("Task 4")
}

fun1(fun2)