//score variables
let playerScore = 0
let computerScore = 0
let gameOver = false
let roundResults = document.getElementById('round-results')
let gameResults = document.getElementById('game-results')
let container1 = document.querySelector('.container1')
let playAgain = document.createElement('button')
let computerScoreDOM = document.getElementById('computer-score')
let playerScoreDOM = document.getElementById('player-score')

// determine playerSelection using event listeners
function playerSelectionFunc() {
// targets all <button> elements
const choices = document.querySelectorAll('button')
// .forEach method to iterate through each button
choices.forEach((button) => {
    // for each one add a 'click' listener
    button.addEventListener('click', function(e) {
      let playerSelection = e.target.id
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
  
  // function that runs conditionals to determine a winner
  // takes in 2 args
  function playRound(playerSelection, computerSelection) {
      //converts selections to lower case to support non case senstive string comparison 
      computerSelection = computerSelection.toLowerCase()
      //determine winner using condtionals
      if (playerSelection == "rock" && computerSelection == "paper") {
        roundResults.textContent = "You lose this round, paper beats rock!"
          computerScore++
      } else if (playerSelection == "rock" && computerSelection == "scissors") {
        roundResults.textContent = "You win this round, rock beats scissors!"
          playerScore++
      } else if (playerSelection == "paper" && computerSelection == "rock") {
        roundResults.textContent = "You win this round, paper beats rock!"
          playerScore++
      } else if (playerSelection == "paper" && computerSelection == "scissors") {
        roundResults.textContent = "You lose this round, scissor beats paper!"
          computerScore++
      } else if (playerSelection == "scissors" && computerSelection == "rock") {
        roundResults.textContent = "You lose this round, rock beats scissors!"
          computerScore++
      } else if (playerSelection == "scissors" && computerSelection == "paper") {
        roundResults.textContent = "You win this round, scissor beats paper!"
      } else roundResults.textContent = ("It's a tie!")
  }
  //call function to play single round
  playRound(playerSelection, computerSelection)

  playerScoreDOM.textContent = `Your Score: ${playerScore}`
  computerScoreDOM.textContent = `Computer Score: ${computerScore}`

  //determine winner and update the dom with results
  if (playerScore == 5 && playerScore > computerScore) {
      gameResults.textContent = 'Game over, you win!'
      gameOver = true    
  } else if (computerScore == 5 && playerScore < computerScore) {
      gameResults.textContent = 'Game over, you lose!'
      gameOver = true  
  }   
  if (gameOver == true) {
      playAgain.innerText = 'Play again?'
      container1.appendChild(playAgain)
      playerScore = 0
      computerScore = 0
  }

  function playAgainFunc() {
    roundResults.textContent = " "
    gameResults.textContent = " "
    playerScoreDOM.textContent = " "
    computerScoreDOM.textContent = " "
    playAgain.remove()
    gameOver = false
  }

  playAgain.addEventListener('click', playAgainFunc)

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

