
let userName:string = window.prompt("Enter your name:");

userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();

console.log(userName);