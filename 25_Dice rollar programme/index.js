var diceNum = document.getElementById('diceNum');
var result = document.getElementById('result');
var resultPic = document.getElementById('resultPic');
function rollDice() {
    var values = [];
    var images = [];
    for (var i = 1; i <= (Number)(diceNum.value); i++) {
        var ranDice = Math.floor((Math.random() * 6) + 1);
        values.push(ranDice);
        images.push("<img src=\"img/".concat(ranDice, ".png\">"));
    }
    result.textContent = "dice: ".concat(values.join(", "));
    resultPic.innerHTML = images.join('');
}
