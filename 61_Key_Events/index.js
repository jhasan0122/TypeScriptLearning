var myBox = document.getElementById("myBox");
var moveAmount = 100;
var x = 0;
var y = 0;
document.addEventListener("keydown", function (event) {
    // @ts-ignore
    if (event.key.startsWith("Arrow")) {
        event.preventDefault();
        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        if (myBox) {
            myBox.style.top = "".concat(y, "px");
            myBox.style.left = "".concat(x, "px");
        }
    }
});
