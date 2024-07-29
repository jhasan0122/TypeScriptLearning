
const desserts = document.getElementById('desserts');


const firstElement:Element = desserts.firstElementChild;

if(firstElement){
    // @ts-ignore
    firstElement.style.backgroundColor = "yellow";
}

//all ul type first element -> yellow
const ulElements:NodeListOf<HTMLUListElement>= document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild as HTMLElement;
    firstChild.style.backgroundColor = "yellow";
});

//all ul type last element -> purple
ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild as HTMLElement;
    lastChild.style.backgroundColor = "purple";
})

//vegetable last element -> limegreen
const vegetables = document.getElementById('vegetables');
const lastChild = vegetables.lastElementChild as HTMLElement;
lastChild.style.backgroundColor = 'limegreen';

// carrot next sibling -> red

const carrots = document.getElementById('carrots');
const nextCarrot = carrots.nextElementSibling as HTMLElement;
nextCarrot.style.backgroundColor = "red";

// desserts next sibling -> skyblue

const cars = desserts.nextElementSibling as HTMLElement;
cars.style.backgroundColor = "skyblue";

// toyota prev sibling -> blue

const toyota = document.getElementById('toyota');
const prevToyota = toyota.previousElementSibling as HTMLElement;
prevToyota.style.backgroundColor = "blue";

// pie parent -> orange
const pie = document.getElementById('pie');
const parentPie = pie.parentElement as HTMLElement;
parentPie.style.backgroundColor = "orange";

















