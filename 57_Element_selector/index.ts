
const my_heading = document.getElementById('my_heading');
my_heading.style.backgroundColor = "limegreen";
my_heading.style.textAlign = "center";

const fruitsHtml:HTMLCollectionOf<Element> =document.getElementsByClassName('fruits');




// @ts-ignore
for (let fruit of Array.from(fruitsHtml)) {
    fruit.style.backgroundColor = "red";
}

// @ts-ignore
Array.from(fruitsHtml).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
});

if(fruitsHtml[0] instanceof HTMLElement){
    fruitsHtml[0].style.backgroundColor = "red";
}


// @ts-ignore
const fruits:string[] = Array.from(fruitsHtml).map((element) => element.textContent);

console.log(fruits);

// -----------------------------------------

const h4Elementss:HTMLCollectionOf<HTMLHeadingElement> = document.getElementsByTagName("h4");

// @ts-ignore
for (let h4Element of Array.from(h4Elementss)) {
    h4Element.style.backgroundColor = 'violet'
}
// @ts-ignore
Array.from(h4Elementss).forEach(h4Element => {
    h4Element.style.backgroundColor = "purple";
})


const liElements:HTMLCollectionOf<HTMLLIElement> = document.getElementsByTagName('li');


// @ts-ignore
for (let liElement of Array.from(liElements)) {
    liElement.style.backgroundColor = "lightgreen";
}

// @ts-ignore
Array.from(liElements).forEach((liElement => {
    liElement.style.backgroundColor = "blue";
}))







