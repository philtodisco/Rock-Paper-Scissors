//score variables
let playerScore = 0
let computerScore = 0

//loop functions for 5 rounds
for (let i = 0; i < 5; i++) {
// get selection from computer
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
    
    // prompts user for playerSelection
    const playerSelection = window.prompt("Please enter: Rock, Paper, or Scissors")
    
    // function that runs conditionals to determine a winner
    // takes in 2 args
    function playRound(playerSelection, computerSelection) {
        //converts selections to lower case to support non case senstive string comparison 
        playerSelection = playerSelection.toLowerCase()
        computerSelection = computerSelection.toLowerCase()
        //determine winner using condtionals
        if (playerSelection == "rock" && computerSelection == "paper") {
            console.log("You lose, paper beats rock!")
            computerScore++
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            console.log("You win, rock beats scissors!")
            playerScore++
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            console.log("You win, paper beats rock!")
            playerScore++
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            console.log("You lose, scissor beats paper!")
            computerScore++
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            console.log("You lose, rock beats scissors!")
            computerScore++
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            console.log("You win, scissor beats paper!")
        } else console.log("It's a tie!")
        console.log(`Player score: ${playerScore}\nComputer Score: ${computerScore}`)
    }
    //call function to play round
    playRound(playerSelection, computerSelection)
}

//declare winner of all 5 rounds
if (playerScore > computerScore) {
    console.log(`You beat the computer ${playerScore} to ${computerScore}`)
} else if (playerScore < computerScore) {
    console.log(`The computer beat you ${computerScore} to ${playerScore}`)
} else console.log(`It's a tie, ${playerScore} to ${computerScore}!`)

