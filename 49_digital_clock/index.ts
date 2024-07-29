
const clock = document.getElementById('clock');
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes().toString();
    let seconds = now.getSeconds().toString();

    const meridim:string = hours >= 12 ? "PM" : "AM";
    hours = hours%12 || 12;
    const timeStr = `${hours}:${minutes}:${seconds}:${meridim}`;
    clock.textContent = timeStr;
}

updateClock();

setInterval(updateClock,1000);