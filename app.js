// get random choice from computer (rock, paper, or scissors)


//get random number 0-2
function computerPlay(max) {
return Math.floor(Math.random()* max)
}
//assign random number a name (rock, paper, or scissors)
let computerSelection = computerPlay(3)
if (computerSelection == 0) {
    computerSelection = "Rock"  
} else if (computerSelection == 1) {
    computerSelection = "Paper"
} else {
    computerSelection = "Scissors"
}

function playRound(playerSelection, computerSelection) {

}

const playerSelection = "rock"


console.log(computerSelection)
