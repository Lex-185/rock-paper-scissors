/*
1) getComputerChoice() will randomly select either rock paper or scissors 
2) playRound() will take in the player choice and computer choice to determine a winner
3) game() will loop through playRound() to play a 5 round game
*/

// Vars
const header = document.querySelector('.header')
const choiceBtn = document.querySelectorAll('.choice-btn');
const gameContainer = document.querySelector('.game-container');
const resultsContainer = document.querySelector('.results');
const outcomes = document.querySelectorAll('.results-result');
const resultWinner = document.querySelector('.results-winner');
const resultText = document.querySelector('.results-text');
const textPlaceholder = document.querySelector('.text-placeholder');
const outcomePlaceholder = document.querySelector('.outcome-placeholder');
const rulesModal = document.querySelector('.modal')
const rulesBtn = document.querySelector('.rules-btn');
const closeBtn = document.querySelector('.close-btn');
const SELECTION = [
    {
        name: 'rock',
        covers: 'scissors'
    },
    {
        name: 'paper',
        covers: 'rock'
    },
    {
        name: 'scissors',
        covers: 'paper'
    }
];

// Player selection
choiceBtn.forEach((button) => {
    button.addEventListener('click', () => {
        const selectionId = button.id;
        const playerSelection = SELECTION.find(select => select.name === selectionId)
        choice(playerSelection)
    })
})
        
function choice(playerSelection) {
    const computerSelection = getComputerChoice();
    displayResults([playerSelection, computerSelection])
    displayWinner([playerSelection, computerSelection])
}

// Get computer choice
function getComputerChoice() {
    const randomSelection = Math.floor(Math.random() * SELECTION.length)
    return SELECTION[randomSelection]
}

// Display results
function displayResults(results) {
    outcomes.forEach((resultsContainer, idx) => {
    resultsContainer.innerHTML = `<div class="choice ${results[idx].name}">
    <img class="img-result" src="./images/${results[idx].name}-icon.svg" alt="${results[idx].name}" />
    </div>`});

    textPlaceholder.classList.add('hidden');
    resultsContainer.classList.remove('hidden')
}

// Scoreboard
const scoreboard = {
    player: 5,
    computer: 5
}

const playerScore = document.getElementById('player-score');
playerScore.innerText = `${scoreboard.player}`;

const computerScore = document.getElementById('computer-score');
computerScore.innerText = `${scoreboard.computer}`;

function subtractPlayerScore(hp) {
    scoreboard.player -= hp;
    playerScore.innerText = `${scoreboard.player}`
}
function subtractComputerScore(hp) {
    scoreboard.computer -= hp;
    computerScore.innerText = `${scoreboard.computer}`
}

// Display Winner
function displayWinner(results) {
const playerWins = playRound(results);
const computerWins = playRound(results.reverse());

if(playerWins) {
    subtractComputerScore(1)
    resultText.innerText = "You Win";
} else if (computerWins) {
    subtractPlayerScore(1)
    resultText.innerText = "You Lose"
} else {
    resultText.innerText = "Draw"
};
game()
}

// playRound
function playRound(results) {
    return results[0].covers === results[1].name;
}

// Rules modal
rulesBtn.addEventListener('click', () => {
    rulesModal.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    rulesModal.style.display = 'none'
})

// Text placeholder
const h1 = document.createElement('h1')
let txt = 'Get Ready For A Swell Battle!'
h1.innerText = `${txt}`
textPlaceholder.append(h1)

// Game()
function game() {
    if (scoreboard.computer === 0) {
        resultsContainer.style.display = 'none';
        outcomePlaceholder.classList.remove = 'hidden';
        outcomePlaceholder.style.display = 'flex';

        const h1 = document.createElement('h1');
        h1.innerText = 'Knockout!'
        h1.style.fontSize = '40px'
        outcomePlaceholder.append(h1)
    } else if (scoreboard.player === 4) {
        header.style.display = 'none'
        gameContainer.style.display = 'none'
        resultsContainer.style.display = 'none';
        rulesBtn.style.display = 'none'
    }
}


