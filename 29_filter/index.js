var numbers = [1, 2, 3, 4, 5, 6, 7];
var evenNum = numbers.filter(isEven);
console.log(evenNum);
var oddNum = numbers.filter(isOdd);
console.log(oddNum);
function isEven(element) {
    return element % 2 == 0;
}
function isOdd(element) {
    return element % 2 != 0;
}
//------------------------
var ages = [16, 17, 18, 18, 19, 20, 60];
var adultPeople = ages.filter(isAdult);
console.log(adultPeople);
function isAdult(element) {
    return element >= 18;
}
//----------------------------------
var words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
var lognW = words.filter(longWord);
console.log(lognW);
function longWord(element) {
    return element.length > 6;
}
