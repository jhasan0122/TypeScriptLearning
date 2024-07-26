var PI = 3.1416;
var radius;
var circums;
document.getElementById('do').onclick = function () {
    radius = Number((document.getElementById('radius')).value);
    circums = PI * radius * radius;
    document.getElementById('ans').textContent = "Circumference :".concat(circums);
};
