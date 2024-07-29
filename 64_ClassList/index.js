var myButton = document.getElementById("myButton");
myButton.classList.add("enabled");
myButton.addEventListener("click", function (event) {
    if (event.target.classList.contains("disabled")) {
        event.target.textContent += "🤬";
    }
    else {
        event.target.classList.replace("enabled", "disabled");
    }
});
myButton.addEventListener("mouseover", function (event) {
    event.target.classList.add("hover");
});
myButton.addEventListener("mouseout", function (event) {
    event.target.classList.remove("hover");
});
