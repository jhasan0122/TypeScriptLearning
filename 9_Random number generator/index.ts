
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const dice3 = document.getElementById('dice3');
const roll = document.getElementById('roll');

let n1,n2,n3;

const maxVal = 6,minVal = 1;

roll.onclick = ()=>{
    n1 = Math.floor((Math.random() * maxVal) + minVal);
    n2 = Math.floor((Math.random() * maxVal)+ minVal);
    n3 = Math.floor((Math.random() * maxVal) + minVal);
    dice1.textContent = n1;
    dice2.textContent = n2;
    dice3.textContent = n3;
}