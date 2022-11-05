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
    caseSensitive();
    console.log(`You chose ${playerSelection} and computer chose ${computerSelection}`);

    if (playerSelection === "Rock" && computerSelection === "Scissors"){
        return console.log(`YOU WIN! ${playerSelection} beats ${computerSelection}!`)
    }   else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        return console.log(`YOU WIN! ${playerSelection} beats ${computerSelection}!`)
    }   else if (playerSelection === "Paper" && computerSelection === "Rock"){
        return console.log(`YOU WIN! ${playerSelection} beats ${computerSelection}!`)
    }

    if (playerSelection === "Rock" && computerSelection === "Paper"){
        return console.log(`YOU LOSE! ${computerSelection} beats ${playerSelection}!`)
    }   else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        return console.log(`YOU LOSE! ${computerSelection} beats ${playerSelection}!`)
    }   else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        return console.log(`YOU LOSE! ${computerSelection} beats ${playerSelection}!`)
    }

     
}

function caseSensitive() {
    firstLetter = playerSelection.charAt(0).toUpperCase();
    lastLetters = playerSelection.slice(1, playerSelection.length).toLowerCase();
    playerSelection = firstLetter + lastLetters;
}
// CALLS
playRound();


// NOTES

// WINS:
// R v S, S v P , P v R
// LOSES:
// R v P, P v S, S v R