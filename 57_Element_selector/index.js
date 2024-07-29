var my_heading = document.getElementById('my_heading');
my_heading.style.backgroundColor = "limegreen";
my_heading.style.textAlign = "center";
var fruitsHtml = document.getElementsByClassName('fruits');
// @ts-ignore
for (var _i = 0, _a = Array.from(fruitsHtml); _i < _a.length; _i++) {
    var fruit = _a[_i];
    fruit.style.backgroundColor = "red";
}
// @ts-ignore
Array.from(fruitsHtml).forEach(function (fruit) {
    fruit.style.backgroundColor = "yellow";
});
if (fruitsHtml[0] instanceof HTMLElement) {
    fruitsHtml[0].style.backgroundColor = "red";
}
// @ts-ignore
var fruits = Array.from(fruitsHtml).map(function (element) { return element.textContent; });
console.log(fruits);
// -----------------------------------------
var h4Elementss = document.getElementsByTagName("h4");
// @ts-ignore
for (var _b = 0, _c = Array.from(h4Elementss); _b < _c.length; _b++) {
    var h4Element = _c[_b];
    h4Element.style.backgroundColor = 'violet';
}
// @ts-ignore
Array.from(h4Elementss).forEach(function (h4Element) {
    h4Element.style.backgroundColor = "purple";
});
var liElements = document.getElementsByTagName('li');
// @ts-ignore
for (var _d = 0, _e = Array.from(liElements); _d < _e.length; _d++) {
    var liElement = _e[_d];
    liElement.style.backgroundColor = "lightgreen";
}
// @ts-ignore
Array.from(liElements).forEach((function (liElement) {
    liElement.style.backgroundColor = "blue";
}));
