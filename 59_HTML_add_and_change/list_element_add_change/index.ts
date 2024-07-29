// STEP 1: CREATE THE ELEMENT

const newListElement = document.createElement("li");

// STEP 2: ADD ATTRIBUTE/PROPERTIES

newListElement.textContent = "coconut";
newListElement.id = "coconut";
newListElement.style.fontWeight = "bold";
newListElement.style.backgroundColor = "lightgreen";

// STEP 3: APPEND ELEMENT TO DOM
document.body.append(newListElement);
document.body.prepend(newListElement);
document.getElementById("fruits").append(newListElement);
document.getElementById("fruits").prepend(newListElement);


const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListElement,orange);

const banana = document.getElementById("banana");
document.getElementById("fruits").insertBefore(newListElement,banana);

// WITHOUT ID FOR EVERY ITEM

const listItem = document.querySelectorAll("#fruits li")

document.getElementById("fruits").insertBefore(newListElement,listItem[1]);

//  REMOVE HTML ELEMENT

// document.getElementById("fruits").removeChild(newListElement);