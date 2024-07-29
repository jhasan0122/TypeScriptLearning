
const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");

function changeColor(event) {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH 🤕 "
}

myBox.addEventListener("click",changeColor);

myBox.addEventListener("click",(event) => {
    (event.target as HTMLElement).style.backgroundColor = "tomato";
    (event.target as HTMLElement).textContent = "OUCH 🤕 "
});
myBox.addEventListener("mouseover",(event) => {
    (event.target as HTMLElement).style.backgroundColor = "yellow";
    (event.target as HTMLElement).textContent= "Dont do it 🤕";
})
myBox.addEventListener("mouseout",(event) => {
    (event.target as HTMLElement).style.backgroundColor = "lightgreen";
    (event.target as HTMLElement).textContent= "Chick Me 😁";
})