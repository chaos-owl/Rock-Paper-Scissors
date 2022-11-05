// VARIABLES-CONTS-ARRAYS 

const choices = ["Rock", "Paper", "Scissors"];
let computerSelection = "";
// FUNCTIONS

function getComputerChoice(){
    computerSelection = choices [Math.floor(Math.random() * 3)];
    }

// CALLS
getComputerChoice();
// NOTES