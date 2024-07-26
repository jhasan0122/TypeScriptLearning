
let isRunning = true;
let minRange:number;
let maxRange:number;
let num:number;
let attemp=0;
minRange = (Number)(window.prompt("Enter min range"));
maxRange = (Number)(window.prompt("Enter max range"));

const ans = Math.floor((Math.random()*(maxRange-minRange +1)) + minRange);
console.log(ans);

while (isRunning){
    num = (Number)(window.prompt("Enter a number"))

    if(isNaN(num)){
        window.alert("Enter a valid number");
    }
    else if(num > maxRange || num< minRange){
        window.alert("Keep in range");
    }
    else{
        attemp++;
        if(num > ans){
            window.alert("Too High");
        }
        else if(num < ans){
            window.alert("Too Low");
        }
        else{
            window.alert(`success with ${attemp} attemps`);
            isRunning = false;
        }
    }
}

