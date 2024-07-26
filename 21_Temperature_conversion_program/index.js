var temperature = document.getElementById("temperature");
var celFah = document.getElementById("celFah");
var fahCel = document.getElementById("fahCel");
var convert = document.getElementById("convert");
var ans = document.getElementById("ans");
var temp;
convert.onclick = function () {
    temp = (Number)(temperature.value);
    if (celFah.checked) {
        temp = temp * 9 / 5 + 32;
        ans.textContent = temp.toFixed(1) + "";
    }
    else if (fahCel.checked) {
        temp = (temp - 32) * (5 / 9);
        ans.textContent = temp.toFixed(1) + "";
    }
    else {
        ans.textContent = "Select a unit";
    }
};
