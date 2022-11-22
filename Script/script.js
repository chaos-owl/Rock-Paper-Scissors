// VARIABLES-CONTS-ARRAYS 

const choices = ["Rock", "Paper", "Scissors"];
let computerSelection = "";
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

//DOM SELECTS

const resultsContainer = document.querySelector("#results");
const showResults = document.createElement("p");
showResults.classList.add("showResults");
showResults.textContent = "";

resultsContainer.appendChild(showResults);


//LISTENERS
const rock = document.getElementById("Rock");
rock.addEventListener("click", selectRock = function(){playerSelection = "Rock"; playRound();})

const paper = document.getElementById("Paper");
paper.addEventListener("click", selectPaper = function(){playerSelection = "Paper"; playRound();})

const scissors = document.getElementById("Scissors");
scissors.addEventListener("click", selectScissors = function(){playerSelection = "Scissors"; playRound();})
// FUNCTIONS

function getComputerChoice(){
    computerSelection = choices [Math.floor(Math.random() * 3)];
    }

function playRound(){
    
    // playerSelection = rock;
    getComputerChoice();
    // caseSensitive();
    // console.log(`You chose ${playerSelection} and computer chose ${computerSelection}`);
    // These are the WIN conditions:

    if (playerSelection === "Rock" && computerSelection === "Scissors"){
        playerScore ++;
        return showResults.textContent = `YOU WIN! ${playerSelection} beats ${computerSelection}!`;
    }   else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        playerScore ++;
        return showResults.textContent = `YOU WIN! ${playerSelection} beats ${computerSelection}!`;
    }   else if (playerSelection === "Paper" && computerSelection === "Rock"){
        playerScore ++;
        return showResults.textContent = `YOU WIN! ${playerSelection} beats ${computerSelection}!`;
    }
    // These are the LOSE conditions:

    if (playerSelection === "Rock" && computerSelection === "Paper"){
        computerScore ++;
        return showResults.textContent = `YOU LOSE! ${computerSelection} beats ${playerSelection}!`;
    }   else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        computerScore ++;
        return showResults.textContent = `YOU LOSE! ${computerSelection} beats ${playerSelection}!`;
    }   else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        computerScore ++;
        return showResults.textContent = `YOU LOSE! ${computerSelection} beats ${playerSelection}!`;
    }

    if (playerSelection === computerSelection) {
        return showResults.textContent = "TIE!";
    }
     
}

function caseSensitive() {
    firstLetter = playerSelection.charAt(0).toUpperCase();
    lastLetters = playerSelection.slice(1, playerSelection.length).toLowerCase();
    playerSelection = firstLetter + lastLetters;
}

function game() {
    // for (let i = 0; i < 5; i++) {
        playRound();
    // }
    // if (playerScore > computerScore){
    //     return console.log(`GAME OVER! ${playerScore} -VS- ${computerScore} >> YOU WIN!`);
    // } else if (computerScore > playerScore) {
    //     return console.log(`GAME OVER! ${playerScore} -VS- ${computerScore} >> YOU LOSE!`);
    // } else if (computerScore === playerScore) {
    //     return console.log(`GAME OVER! ${playerScore} -VS- ${computerScore} >> TIE GAME!`);
    // }
}
//CALLS

game();

// NOTES

// WINS:
// R v S, S v P , P v R
// LOSES:
// R v P, P v S, S v R