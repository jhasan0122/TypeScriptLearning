var myBox = document.getElementById("myBox");
var myBtn = document.getElementById("myBtn");
function changeColor(event) {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH 🤕 ";
}
myBox.addEventListener("click", changeColor);
myBox.addEventListener("click", function (event) {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH 🤕 ";
});
myBox.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Dont do it 🤕";
});
myBox.addEventListener("mouseout", function (event) {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Chick Me 😁";
});
