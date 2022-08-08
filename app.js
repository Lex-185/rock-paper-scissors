/*
1) getComputerChoice() will randomly select either rock paper or scissors 
2) playRound() will take in the player choice and computer choice to determine a winner
3) game() will loop through playRound() to play a 5 round game
*/

// Scoreboard
const scoreboard = {
    player: 0,
    computer: 0
}

// Get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

// Play 1 round
function playRound(p, c) {
    if (p === c) {
        return `It's a draw. Player score: ${scoreboard.player}. Computer score: ${scoreboard.computer}`
    } else if ((p === 'rock' && c === 'scissors') 
    || (p === 'scissors' && c === 'paper') 
    || (p === 'paper' && c === 'rock')) {
        scoreboard.player++
        return `You win! Player score: ${scoreboard.player}. Computer score: ${scoreboard.computer}`
    } else if ((p === 'scissors' && c === 'rock') 
    || (p === 'paper' && c === 'scissors') 
    || (p === 'rock' && c === 'paper')) {
        scoreboard.computer++
        return  `You lose. Player score: ${scoreboard.player}. Computer score: ${scoreboard.computer}`
    }
}

// Play the game
function game() {
    for (let i = 1; i <= 5; i++) {
        // Get player choice 
        const input = prompt('Please enter your choice', 'Rock, Paper, or Scissors').toLowerCase();
        
        const playerSelection = input;
        const computerSelection = getComputerChoice();
        console.log('Round:', i);
        console.log('Player choice:', playerSelection);
        console.log('Computer choice:', computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(updateScoreboard())
}

// Update scoreboard
function updateScoreboard () {
    if (scoreboard.player > scoreboard.computer) {
        return `You Won! Player score: ${scoreboard.player} Computer score: ${scoreboard.computer}`
    } else if (scoreboard.player < scoreboard.computer){
        return `The House Won. Player score: ${scoreboard.player} Computer score: ${scoreboard.computer}`
    } else {
        return `Draw. Player score: ${scoreboard.player} Computer score: ${scoreboard.computer}`
    }
}







