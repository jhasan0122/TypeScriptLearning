
const clock = document.getElementById('clock');

let timer = null;
let startTime:number = 0;
let elapsedTime:number = 0;
let isRunning:boolean = false;


function updateTime(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString();
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60).toString();
    let seconds = Math.floor(elapsedTime / (1000) % 60).toString();
    let milliseconds = Math.floor(elapsedTime % 1000 /10).toString();

    clock.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}:`;
}


function startTimer() {
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime,10);
        isRunning = true;
    }
}
function stopTimer() {
    if(isRunning){
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