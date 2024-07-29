var clock = document.getElementById('clock');
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes().toString();
    var seconds = now.getSeconds().toString();
    var meridim = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    var timeStr = "".concat(hours, ":").concat(minutes, ":").concat(seconds, ":").concat(meridim);
    clock.textContent = timeStr;
}
updateClock();
setInterval(updateClock, 1000);
