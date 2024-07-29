var choiceList = ["rock", "paper", "scissors"];
var player_des = document.getElementById('player_des');
var computer_des = document.getElementById('computer_des');
var player_score = document.getElementById('player_score');
var computer_score = document.getElementById('computer_score');
var resultShow = document.getElementById('resultShow');
var playerScore = 0;
var computerScore = 0;
function play(choice) {
    var randomChoice = choiceList[Math.floor(Math.random() * 3)];
    var result = "";
    if (choice == randomChoice) {
        result = "Its tie";
    }
    else {
        switch (choice) {
            case "rock":
                result = (randomChoice === "scissors") ? "YOU WIN!!" : "YOU LOSE";
                break;
            case "paper":
                result = (randomChoice === "rock") ? "YOU WIN!!" : "YOU LOSE";
                break;
            case "scissors":
                result = (randomChoice === "paper") ? "YOU WIN!!" : "YOU LOSE";
                break;
        }
    }
    player_des.textContent = choice;
    computer_des.textContent = randomChoice;
    resultShow.textContent = result;
    resultShow.classList.remove("greenText", "redText");
    switch (result) {
        case "YOU WIN!!":
            resultShow.classList.add('greenText');
            playerScore++;
            player_score.textContent = String(playerScore);
            break;
        case "YOU LOSE":
            resultShow.classList.add("redText");
            computerScore++;
            computer_score.textContent = String(computerScore);
            break;
    }
}
