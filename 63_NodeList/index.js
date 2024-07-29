var buttons = document.querySelectorAll('.myButton');
//  `ADD HTML/CSS PROPERTIES
buttons.forEach(function (button) {
    button.style.backgroundColor = "green";
    button.textContent = "😁";
});
//  CLICK EVENT LISTENER
buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.target.style.backgroundColor = "tomato";
    });
});
//  CLICK EVENT LISTENER
buttons.forEach(function (button) {
    button.addEventListener("mouseover", function (event) {
        event.target.style.backgroundColor = "hsl(203, 92%, 50%)";
    });
});
buttons.forEach(function (button) {
    button.addEventListener("mouseout", function (event) {
        event.target.style.backgroundColor = "hsl(203, 92%, 61%)";
    });
});
//  ADD AN ELEMENT
var newButton = document.createElement("button");
newButton.textContent = "Button 5";
document.body.append(newButton);
// Remove AN ELEMENT
buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.target.remove();
        buttons = document.querySelectorAll(".myButton");
    });
});
