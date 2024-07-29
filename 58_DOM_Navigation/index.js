var desserts = document.getElementById('desserts');
var firstElement = desserts.firstElementChild;
if (firstElement) {
    // @ts-ignore
    firstElement.style.backgroundColor = "yellow";
}
//all ul type first element -> yellow
var ulElements = document.querySelectorAll("ul");
ulElements.forEach(function (ulElement) {
    var firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
});
//all ul type last element -> purple
ulElements.forEach(function (ulElement) {
    var lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "purple";
});
//vegetable last element -> limegreen
var vegetables = document.getElementById('vegetables');
var lastChild = vegetables.lastElementChild;
lastChild.style.backgroundColor = 'limegreen';
// carrot next sibling -> red
var carrots = document.getElementById('carrots');
var nextCarrot = carrots.nextElementSibling;
nextCarrot.style.backgroundColor = "red";
// desserts next sibling -> skyblue
var cars = desserts.nextElementSibling;
cars.style.backgroundColor = "skyblue";
// toyota prev sibling -> blue
var toyota = document.getElementById('toyota');
var prevToyota = toyota.previousElementSibling;
prevToyota.style.backgroundColor = "blue";
// pie parent -> orange
var pie = document.getElementById('pie');
var parentPie = pie.parentElement;
parentPie.style.backgroundColor = "orange";
