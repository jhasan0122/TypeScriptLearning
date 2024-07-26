
let username:string;

document.getElementById("do").onclick = function (){
    username = ((document.getElementById("username")) as HTMLInputElement).value;
    document.getElementById("heading").textContent = `Welcome ${username}`;
    console.log(username);
}