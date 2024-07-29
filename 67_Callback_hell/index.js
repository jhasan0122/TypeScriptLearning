function task1(callback) {
    setTimeout(function () {
        console.log("task1 complete");
        callback();
    }, 2000);
}
function task2(callback) {
    setTimeout(function () {
        console.log("task2 complete");
        callback();
    }, 1000);
}
function task3(callback) {
    setTimeout(function () {
        console.log("task3 complete");
        callback();
    }, 1500);
}
function task4(callback) {
    setTimeout(function () {
        console.log("task4 complete");
        callback();
    }, 2000);
}
function task5(callback) {
    setTimeout(function () {
        console.log("task5 complete");
        callback();
    }, 2000);
}
task1(function () {
    console.log("task1");
    task2(function () {
        task3(function () {
            task4(function () {
                task5(function () {
                    console.log("All task done");
                });
            });
        });
    });
});
