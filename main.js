function computerPlay() {
    randomInt = Math.floor(Math.random())
    let val = "default";
    if (randomInt >= 33) {
        val = "paper";
    }
    else if (randomInt > 33 || randomInt <= 66){
        val = "scissors";
    }
    else {
        val = "rock";
    }
    return val;
}

function gamePlay(playerSelection, val) {
    let playerWin = false;

    if (val == "paper"){
        if (playerSelection == "rock" || "ROCK" || "Rock"){
            playerWin = false;
        }
        else if (playerSelection == "scissors" || "Scissors" || "SCISSORS"){
            playerWin = true;
        }
        else {
            playerWin = false;
    }
    }
    if (val == "scissors"){
        if (playerSelection == "rock" || "ROCK" || "Rock"){
            playerWin = true;
        }
        if (playerSelection == "scissors" || "Scissors" || "SCISSORS"){
            playerWin = false;
        }
        else {
            playerWin = false;
    }
    }
    if (val == "rock"){
        if (playerSelection == "rock" || "ROCK" || "Rock"){
            playerWin = false;
        }
        if (playerSelection == "scissors" || "Scissors" || "SCISSORS"){
            playerWin = false;
        
        }
    else {
            playerWin = false;
    }
    }



    if (playerWin = true){
        console.log(`You win! ${playerSelection} beats ${val}.`);
        }
    else {
            console.log(`You lose :( ${val} beats ${playerSelection}.`);
        }
}

function game(){
    for (let i=0; i<5; i++){
    let playerSelection = prompt("enter rock paper scissors")
    console.log("you chose " + playerSelection);
    val = computerPlay();
    console.log("val = " + val);
    gamePlay(playerSelection, val);
    }
}
