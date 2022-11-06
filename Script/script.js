// VARIABLES-CONTS-ARRAYS 

const choices = ["Rock", "Paper", "Scissors"];
let computerSelection = "";
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

// FUNCTIONS

function getComputerChoice(){
    computerSelection = choices [Math.floor(Math.random() * 3)];
    }

function playRound(){
    
    playerSelection = prompt("Choose: Rock, Paper or Scissors");
    getComputerChoice();
    caseSensitive();
    console.log(`You chose ${playerSelection} and computer chose ${computerSelection}`);
    // These are the WIN conditions:

    if (playerSelection === "Rock" && computerSelection === "Scissors"){
        playerScore ++;
        return console.log(`YOU WIN! ${playerSelection} beats ${computerSelection}!`)
    }   else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        playerScore ++;
        return console.log(`YOU WIN! ${playerSelection} beats ${computerSelection}!`)
    }   else if (playerSelection === "Paper" && computerSelection === "Rock"){
        playerScore ++;
        return console.log(`YOU WIN! ${playerSelection} beats ${computerSelection}!`)
    }
    // These are the LOSE conditions:

    if (playerSelection === "Rock" && computerSelection === "Paper"){
        computerScore ++;
        return console.log(`YOU LOSE! ${computerSelection} beats ${playerSelection}!`)
    }   else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        computerScore ++;
        return console.log(`YOU LOSE! ${computerSelection} beats ${playerSelection}!`)
    }   else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        computerScore ++;
        return console.log(`YOU LOSE! ${computerSelection} beats ${playerSelection}!`)
    }

    if (playerSelection === computerSelection) {
        return (console.log("TIE!"));
    }
     
}

function caseSensitive() {
    firstLetter = playerSelection.charAt(0).toUpperCase();
    lastLetters = playerSelection.slice(1, playerSelection.length).toLowerCase();
    playerSelection = firstLetter + lastLetters;
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore > computerScore){
        return console.log(`GAME OVER! ${playerScore} -VS- ${computerScore} >> YOU WIN!`);
    } else if (computerScore > playerScore) {
        return console.log(`GAME OVER! ${playerScore} -VS- ${computerScore} >> YOU LOSE!`);
    } else if (computerScore === playerScore) {
        return console.log(`GAME OVER! ${playerScore} -VS- ${computerScore} >> TIE GAME!`);
    }
}
// CALLS

game();

// NOTES

// WINS:
// R v S, S v P , P v R
// LOSES:
// R v P, P v S, S v R