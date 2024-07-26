const diceNum = document.getElementById('diceNum');
const result = document.getElementById('result');
const resultPic = document.getElementById('resultPic');


function rollDice() {
    const values:number[] = [];
    const images:string[] = [];

    for (let i = 1; i <= (Number)((diceNum as HTMLInputElement).value); i++) {
        const ranDice = Math.floor((Math.random()*6) + 1);
        values.push(ranDice);
        images.push(`<img src="img/${ranDice}.png">`);
    }
    result.textContent = `dice: ${values.join(", ")}`;
    resultPic.innerHTML = images.join('');
}