var count = document.getElementById('count');
var decrease = document.getElementById('decrease');
var reset = document.getElementById('reset');
var increase = document.getElementById('increase');
var cnt = 0;
decrease.onclick = function () {
    cnt--;
    count.textContent = String(cnt);
};
reset.onclick = function () {
    cnt = 0;
    count.textContent = String(cnt);
};
increase.onclick = function () {
    cnt++;
    count.textContent = String(cnt);
};
