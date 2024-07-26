

let loggedIn:boolean = false;
let username:string;

let password:string;

while (!loggedIn){
    username = window.prompt(`Enter your username:`);
    password = window.prompt(`Enter your password:`);

    if(username == "Jehan" && password=="9248"){
        loggedIn = true;
    }
    else{
        console.log("try again");
    }
}
