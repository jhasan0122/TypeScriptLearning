let buttons:NodeListOf<Element> = document.querySelectorAll('.myButton');

//  `ADD HTML/CSS PROPERTIES

buttons.forEach(button => {
    (button as HTMLElement).style.backgroundColor = "green";
    button.textContent = "😁";
});

//  CLICK EVENT LISTENER

buttons.forEach(button => {
    button.addEventListener("click", event=> {
        (event.target as HTMLElement).style.backgroundColor = "tomato";
    })
})

//  CLICK EVENT LISTENER

buttons.forEach(button => {
    button.addEventListener("mouseover",event => {
        (event.target as HTMLElement).style.backgroundColor = "hsl(203, 92%, 50%)";
    })
})
buttons.forEach(button => {
    button.addEventListener("mouseout",event => {
        (event.target as HTMLElement).style.backgroundColor = "hsl(203, 92%, 61%)";
    })
})

//  ADD AN ELEMENT

const newButton:HTMLButtonElement = document.createElement("button");
newButton.textContent = "Button 5";
document.body.append(newButton);

// Remove AN ELEMENT

buttons.forEach(button => {
    button.addEventListener("click",event => {
        (event.target as HTMLElement).remove();
    })
})