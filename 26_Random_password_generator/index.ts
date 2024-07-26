
const passwordLength = document.getElementById('passwordLength');
const includeLowerCase = document.getElementById('includeLowerCase');
const includeUpperCase = document.getElementById('includeUpperCase');
const includeNumber = document.getElementById('includeNumber');
const includeSymbol = document.getElementById('includeSymbol');
const passwordResult = document.getElementById('passwordResult');
function genratePassword(){
    const ilc:boolean = (includeLowerCase as HTMLInputElement).checked;
    const iuc:boolean = (includeUpperCase as HTMLInputElement).checked;
    const inc:boolean = (includeNumber as HTMLInputElement).checked;
    const isc:boolean = (includeSymbol as HTMLInputElement).checked;

    const lowercaseChars:string = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars:string = "0123456789";
    const symbolChars:string = "!@#$%^&*()_+=";


    let allowedStr:string = "";


    allowedStr += ilc ? lowercaseChars : "";
    allowedStr += iuc ? uppercaseChars : "";
    allowedStr += inc ? numberChars : "";
    allowedStr += isc ? symbolChars : "";

    console.log(allowedStr);

    let  passwordGen = "";

    for (let i = 0; i < Number((passwordLength as HTMLInputElement).value); i++) {
        let randomIndex = Math.floor(Math.random() * allowedStr.length -1);
        passwordGen += allowedStr[randomIndex];
        console.log(randomIndex);
    }

    passwordResult.textContent = passwordGen;

}