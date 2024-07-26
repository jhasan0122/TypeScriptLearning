var passwordLength = document.getElementById('passwordLength');
var includeLowerCase = document.getElementById('includeLowerCase');
var includeUpperCase = document.getElementById('includeUpperCase');
var includeNumber = document.getElementById('includeNumber');
var includeSymbol = document.getElementById('includeSymbol');
var passwordResult = document.getElementById('passwordResult');
function genratePassword() {
    var ilc = includeLowerCase.checked;
    var iuc = includeUpperCase.checked;
    var inc = includeNumber.checked;
    var isc = includeSymbol.checked;
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberChars = "0123456789";
    var symbolChars = "!@#$%^&*()_+=";
    var allowedStr = "";
    allowedStr += ilc ? lowercaseChars : "";
    allowedStr += iuc ? uppercaseChars : "";
    allowedStr += inc ? numberChars : "";
    allowedStr += isc ? symbolChars : "";
    // if(ilc){
    //     allowedStr += lowercaseChars;
    // }
    // if(iuc){
    //     allowedStr +=  uppercaseChars;
    // }
    // if(inc){
    //     allowedStr += numberChars;
    // }
    // if(isc){
    //     allowedStr += symbolChars;
    // }
    console.log(allowedStr);
    var passwordGen = "";
    for (var i = 0; i < Number(passwordLength.value); i++) {
        var randomIndex = Math.floor(Math.random() * allowedStr.length - 1);
        passwordGen += allowedStr[randomIndex];
        console.log(randomIndex);
    }
    passwordResult.textContent = passwordGen;
}
