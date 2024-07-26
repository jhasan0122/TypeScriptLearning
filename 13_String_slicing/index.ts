
const fullName = "Broseph Code";

let firstName = fullName.slice(0,3);
console.log(firstName)
let lastName = fullName.slice(4,8);
console.log(lastName)
lastName = fullName.slice(4);
console.log(lastName)

let firstChar = fullName.slice(0,1);
console.log(firstChar)
let lastChar = fullName.slice(-1);
console.log(lastChar)


 firstName = fullName.slice(0,fullName.indexOf(" "));
 console.log(firstName)
 lastName =fullName.slice(fullName.indexOf(" ")+1);
 console.log(lastName)


// console.log(firstChar);

const email = "Bro1@gmail.com";

let username = email.slice(0,email.indexOf("@"));
let extension = email.slice(email.indexOf("@"));

console.log(username);
console.log(extension);