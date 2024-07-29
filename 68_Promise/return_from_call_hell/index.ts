

function task1(): Promise<string> {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task1 complete");
        }, 2000);
    });
}

function task2() {

    // @ts-ignore
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("task2 complete");
        },1000);
    })
}
function task3() {
    // @ts-ignore
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("task3 complete");
        },1500);
    })
}
function task4() {
    // @ts-ignore
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("task4 complete");
        },2000);
    })
}
function task5() {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("task5 complete");
        },2000);
    })
}

task1()
    .then(value => { console.log(value) ; return task2()})
    .then(value =>  { console.log(value) ; return task3()})
    .then(value => { console.log(value) ; return task4()})
    .then(value => { console.log(value) ; return task5()})
    .then(value => {console.log(value) ; console.log("All task finished")})
    .catch(error => {
        console.log(error)}
    );