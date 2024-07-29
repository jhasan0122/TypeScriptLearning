var clock = document.getElementById('clock');
var timer = null;
var startTime = 0;
var elapsedTime = 0;
var isRunning = false;
function updateTime() {
    var currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    var hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString();
    var minutes = Math.floor(elapsedTime / (1000 * 60) % 60).toString();
    var seconds = Math.floor(elapsedTime / (1000) % 60).toString();
    var milliseconds = Math.floor(elapsedTime % 1000 / 10).toString();
    clock.textContent = "".concat(hours, ":").concat(minutes, ":").concat(seconds, ":").concat(milliseconds, ":");
}
function startTimer() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 10);
        isRunning = true;
    }
}
function stopTimer() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}
function resetTimer() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    clock.textContent = "00:00:00:00";
}
