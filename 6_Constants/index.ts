
const PI:number = 3.1416;
let radius:number;
let circums:number;

document.getElementById('do').onclick = ()=>{
    radius = Number(((document.getElementById('radius')) as HTMLInputElement).value)
    circums = PI * radius * radius;
    document.getElementById('ans').textContent = `Circumference :${circums}`;
}