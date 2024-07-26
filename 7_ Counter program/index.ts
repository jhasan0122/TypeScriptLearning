
const count = document.getElementById('count');
const decrease =  document.getElementById('decrease')
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');

let cnt:number=0;

decrease.onclick = ()=>{
    cnt--;
    count.textContent = String(cnt);
}

reset.onclick = ()=>{
    cnt = 0;
    count.textContent = String(cnt);
}

increase.onclick = ()=>{
    cnt++;
    count.textContent = String(cnt);
}