/*
1) getComputerChoice() will randomly select either rock paper or scissors 
2) playRound() will take in the player choice and computer choice to determine a winner
3) game() will loop through playRound() to play a 5 round game
*/

// Get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

// Play 1 round
function playRound(p, c) {
    if (p === c) {
        return `It's a draw. Player choice: ${p}. Computer choice: ${c}`
    } else if ((p === 'rock' && c === 'scissors') 
    || (p === 'scissors' && c === 'paper') 
    || (p === 'paper' && c === 'rock')) {
        scoreboard.player++
        return `You win! ${p} beats ${c}`
    } else if ((p === 'scissors' && c === 'rock') 
    || (p === 'paper' && c === 'scissors') 
    || (p === 'rock' && c === 'paper')) {
        scoreboard.computer++
        return  `You lose! ${c} beats ${p}`
    }
}




