
const temperature = document.getElementById("temperature");
const celFah = document.getElementById("celFah");
const fahCel = document.getElementById("fahCel");
const convert = document.getElementById("convert");
const ans = document.getElementById("ans");

let temp:number;

convert.onclick = ()=>{
    temp = (Number)((temperature as HTMLInputElement).value);

    if((celFah as HTMLInputElement).checked){
        temp = temp * 9 / 5 + 32;
        ans.textContent = temp.toFixed(1) + "";
    }
    else if((fahCel as HTMLInputElement).checked){
        temp = (temp - 32) * (5/9);
        ans.textContent = temp.toFixed(1) + "";
    }
    else{
        ans.textContent = "Select a unit";
    }
}