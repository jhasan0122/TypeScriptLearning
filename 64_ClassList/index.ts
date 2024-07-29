
const myButton:HTMLElement = document.getElementById("myButton");

myButton.classList.add("enabled");

myButton.addEventListener("click",event => {
    if((event.target as HTMLElement).classList.contains("disabled")){
        (event.target as HTMLElement).textContent += "🤬";
    }
    else{
        (event.target as HTMLElement).classList.replace("enabled","disabled");
    }
})

myButton.addEventListener("mouseover",event=>{
    (event.target as HTMLElement).classList.add("hover");
});
myButton.addEventListener("mouseout",event=>{
    (event.target as HTMLElement).classList.remove("hover");
})