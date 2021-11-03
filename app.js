// get random choice from computer (rock, paper, or scissors)
function computerPlay(maxChoices) {
    return Math.floor(Math.random()* maxChoices)
}

console.log(computerPlay(3))

