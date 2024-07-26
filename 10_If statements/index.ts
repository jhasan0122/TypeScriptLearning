
const find = document.getElementById('find');
const age = document.getElementById('age');
const comment = document.getElementById('comment');

let ageVal:number;

find.onclick = ()=>{
    ageVal =(Number)((age as HTMLInputElement).value);

    if(ageVal == 0){
        comment.textContent = `You are just born`;
    }
    else if(ageVal >= 100){
        comment.textContent = `"You are too old to enter this site"`;
    }
    else if(ageVal >= 18){
        comment.textContent = `You are old enough to enter this site`;
    }
    else if(ageVal < 0){
        comment.textContent = `Your age cant be 0`;
    }
    else{
        comment.textContent = `You must be 18 to enter the site`;
    }
}