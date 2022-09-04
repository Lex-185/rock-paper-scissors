// Vars
const startBtn = document.getElementById('start-btn');
const content = document.querySelector('.content')

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

const finalResult = document.querySelector('.final-result')
const loseScreen = document.querySelector('.lose-screen')
const winScreen = document.querySelector('.win-screen')

const computerResult = document.getElementById('computer')

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

// Start game
const startHeader = document.querySelector('.start-header')

startBtn.addEventListener('click', () => {
    content.classList.remove('hidden')
    startBtn.classList.add('hidden')
    startHeader.classList.add('hidden')
    start()
})

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

function displayResults(results) {
    outcomes.forEach((resultsContainer, idx) => {
    resultsContainer.innerHTML = `<div class="choice ${results[idx].name}">
    <img class="img-result" src="./images/${results[idx].name}-icon.svg" alt="${results[idx].name}" />
    </div>`;

    computerResult.innerHTML = `<div class="choice ${results[idx].name}">
    <img class="img-result" src="./images/${results[idx].name}-icon1.svg" alt="${results[idx].name}" />
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

// Lose screen
finalResult.innerText = `Player HP: ${scoreboard.player} | Boss HP: ${scoreboard.computer}`
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
        const hp = document.querySelector('.hp');
        hp.innerText = `${scoreboard.player}/5`;

        winScreen.style.display = 'flex';

        end()
        updateGrade()
        updateScreen()
    } else if (scoreboard.player === 0) {
        loseScreen.style.display = 'flex'
        updateScreen()
    }
}

function updateScreen() {
    header.style.display = 'none';
    gameContainer.style.display = 'none';
    resultsContainer.style.display = 'none';
    rulesBtn.style.display = 'none';
}

// Record Time
let startTime, endTime;

function start() {
    startTime = new Date();
};

function end() {
    endTime = new Date();
    let timeDifference = endTime - startTime;
    timeDifference /= 1000;

    let seconds = Math.round(timeDifference)
    const time = document.querySelector('.time');
    time.innerText = `${seconds}s`;
}

// Grade 
function updateGrade() {
    const grade = document.querySelector('.grade-value');

    if (scoreboard.player === 5) {
        grade.innerText = 'S'
    } else if (scoreboard.player === 4) {
        grade.innerText = 'A+'
    } else if (scoreboard.player === 3) {
        grade.innerText = 'A'
    } else {
        grade.innerText = 'B'
    }
}

// Animation on load
setTimeout(() => {
    document.body.classList.remove('preload')
}, 500);