//score variables
let playerScore = 0
let computerScore = 0

// determine playerSelection using event listeners
function playerSelectionFunc() {
// targets all <button> elements
const choices = document.querySelectorAll('button');
// .forEach method to iterate through each button
choices.forEach((button) => {
    // for each one add a 'click' listener
    button.addEventListener('click', function(e) {
      let playerSelection = e.target.id
      console.log(playerSelection)
     
// get selection from computer using random number
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
  console.log(computerSelection, "this is computer")
  
  // function that runs conditionals to determine a winner
  // takes in 2 args
  function playRound(playerSelection, computerSelection) {
      //converts selections to lower case to support non case senstive string comparison 

      computerSelection = computerSelection.toLowerCase()
      //determine winner using condtionals
      if (playerSelection == "rock" && computerSelection == "paper") {
        document.getElementById('round-results').textContent = "You lose this round, paper beats rock!"
          computerScore++
      } else if (playerSelection == "rock" && computerSelection == "scissors") {
        document.getElementById('round-results').textContent = "You win this round, rock beats scissors!"
          playerScore++
      } else if (playerSelection == "paper" && computerSelection == "rock") {
        document.getElementById('round-results').textContent = "You win this round, paper beats rock!"
          playerScore++
      } else if (playerSelection == "paper" && computerSelection == "scissors") {
        document.getElementById('round-results').textContent = "You lose this round, scissor beats paper!"
          computerScore++
      } else if (playerSelection == "scissors" && computerSelection == "rock") {
        document.getElementById('round-results').textContent = "You lose this round, rock beats scissors!"
          computerScore++
      } else if (playerSelection == "scissors" && computerSelection == "paper") {
        document.getElementById('round-results').textContent = "You win this round, scissor beats paper!"
      } else document.getElementById('round-results').textContent = ("It's a tie!")
  }
  //call function to play single round
  playRound(playerSelection, computerSelection)

  document.getElementById('player-score').textContent = `Your Score: ${playerScore}`
  document.getElementById(`computer-score`).textContent = `Computer Score: ${computerScore}`

  //determine winner and update the dom with results
  let totalScore = playerScore + computerScore;
  if (playerScore == 5 && playerScore > computerScore) {
      document.getElementById('game-results').textContent = 'Game over, you win!'
  } else if (computerScore == 5 && playerScore < computerScore) {
      document.getElementById('game-results').textContent = 'Game over, you lose!'
  } 
    });
  });
}
playerSelectionFunc()







    

// //declare winner of all 5 rounds
// if (playerScore > computerScore) {
//     console.log(`You beat the computer ${playerScore} to ${computerScore}`)
// } else if (playerScore < computerScore) {
//     console.log(`The computer beat you ${computerScore} to ${playerScore}`)
// } else console.log(`It's a tie, ${playerScore} to ${computerScore}!`)

