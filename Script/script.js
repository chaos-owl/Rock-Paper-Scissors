// VARIABLES-CONTS-ARRAYS 

const choices = ["Rock", "Paper", "Scissors"];
let computerSelection = "";
let playerSelection = "";

// FUNCTIONS

function getComputerChoice(){
    computerSelection = choices [Math.floor(Math.random() * 3)];
    }

function playRound(){
    playerSelection = prompt("Choose: Rock, Paper or Scissors");
    getComputerChoice();

    return console.log(`You chose ${playerSelection} and computer chose ${computerSelection}`);
}

function caseSensitive() {
    firstLetter = playerSelection.charAt(0).toUpperCase();
    lastLetters = playerSelection.slice(1, playerSelection.length).toLowerCase();
    console.log(firstLetter + lastLetters);
}
// CALLS
playRound();
caseSensitive();

// NOTES