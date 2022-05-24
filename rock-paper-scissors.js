const choices = ['rock', 'paper', 'scissors'];
const playerSelection = prompt("Enter your choice... Rock, Paper, or Scissors: ").toLowerCase();
const computerSelection = computerPlay();

function computerPlay() {
    random = Math.floor(Math.random() * choices.length) //create a random function
    return choices[random]; //return the choices array with the brackets setting the index, which in this case, sets the index to random rather than 0, 1, or 2
}

function playRound(playerSelection, computerSelection) {
    if(computerSelection == 'rock' && playerSelection == 'paper') {return "You Win! Paper beats Rock"}
    else if(computerSelection == 'rock' && playerSelection == 'rock') {return "Tie! Play Again!";}
    else if(computerSelection == 'rock' && playerSelection == 'scissors') {return "You lose! Rock beats Scissors";}
    else if(computerSelection == 'paper' && playerSelection == 'paper') {return "Tie! Play Again!";}
    else if(computerSelection == 'paper' && playerSelection == 'rock') {return "You lose! Paper beats Rock";}
    else if(computerSelection == 'paper' && playerSelection == 'scissors') {return "You Win! Scissors beats Paper";}
    else if(computerSelection == 'scissors' && playerSelection == 'paper') {return "You lose! Scissors beats Paper";}
    else if(computerSelection == 'scissors' && playerSelection == 'rock') {return "You Win! Rock beats Scissors";}
    else if(computerSelection == 'scissors' && playerSelection == 'scissors') {return "Tie! Play Again!";}
}

function game() {

    for (let rounds = 0, rounds < 5, rounds++) {
        if (rounds < 5) {
            console.log(playRound(playerSelection, computerSelection))}
}

console.log(game());
//console.log(playRound(playerSelection, computerSelection));
//console.log(computerPlay());
