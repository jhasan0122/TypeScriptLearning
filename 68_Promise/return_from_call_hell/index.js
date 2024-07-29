function task1() {
    // @ts-ignore
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("task1 complete");
        }, 2000);
    });
}
function task2() {
    // @ts-ignore
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("task2 complete");
        }, 1000);
    });
}
function task3() {
    // @ts-ignore
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("task3 complete");
        }, 1500);
    });
}
function task4() {
    // @ts-ignore
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("task4 complete");
        }, 2000);
    });
}
function task5() {
    // @ts-ignore
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("task5 complete");
        }, 2000);
    });
}
task1()
    .then(function (value) { console.log(value); return task2(); })
    .then(function (value) { console.log(value); return task3(); })
    .then(function (value) { console.log(value); return task4(); })
    .then(function (value) { console.log(value); return task5(); })
    .then(function (value) { console.log(value); console.log("All task finished"); })
    .catch(function (error) {
    console.log(error);
});
