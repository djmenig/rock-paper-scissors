const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function computerPlay() { //randomly select from choices array
    random = Math.floor(Math.random() * choices.length) //create a random function
    return choices[random]; //return the choices array with the brackets setting the index, which in this case, sets the index to random rather than 0, 1, or 2
}

function playRound() { //1 round of gameplay
    const playerSelection = prompt("Enter your choice... Rock, Paper, or Scissors: ").toLowerCase(); //Prompts user to select their choice
    const computerSelection = computerPlay(); //Computer selects its choice

    console.log("Player Selection:  ", playerSelection,"\nComputer Selection:", computerSelection); //Prints the player and computer selections

//conditional statements to compare user and computer selection to select a winner and add the score to the corresponding variable
    if(computerSelection == 'rock' && playerSelection == 'paper') {
        console.log("   You Win! Paper beats Rock!");
        return ++playerScore;
    } else if(computerSelection == 'rock' && playerSelection == 'rock') {
        console.log("   Draw! No Winner!");
    } else if(computerSelection == 'rock' && playerSelection == 'scissors') {
        console.log("    You lose! Rock beats Scissors!");
        return ++computerScore;
    } else if(computerSelection == 'paper' && playerSelection == 'paper') {
        console.log("   Draw! No Winner!");
    } else if(computerSelection == 'paper' && playerSelection == 'rock') {
        console.log("   You lose! Paper beats Rock!");
        return ++computerScore;
    } else if(computerSelection == 'paper' && playerSelection == 'scissors') {
        console.log("   You Win! Scissors beats Paper!");
        return ++playerScore;
    } else if(computerSelection == 'scissors' && playerSelection == 'paper') {
        console.log("   You lose! Scissors beats Paper!");
        return ++computerScore;
    } else if(computerSelection == 'scissors' && playerSelection == 'rock') {
        console.log("   You Win! Rock beats Scissors!");
        return ++playerScore;
    } else if(computerSelection == 'scissors' && playerSelection == 'scissors') {
        console.log("   Draw! No Winner!");
    }
}

function game() { //plays 5 rounds of gameplay
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if(playerScore > computerScore) { //calcuates the score to produce a winner for the 5 round game
        return "GAME OVER! YOU WIN!";
        } else if(computerScore > playerScore) {
        return "GAME OVER! YOU LOSE!";
        } else if(computerScore = playerScore) {
        return "DRAW! NO WINNER!";
        }
}

console.log(game());


