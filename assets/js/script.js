// Global variables.
const userChoices = document.getElementsByClassName('choice');
const roundText = document.getElementById('round-text');
let userChoice;
let computerChoice;

// Default score values
let playerScore = 0;
let computerScore = 0;

// Game screens variables.
const homeScreen = document.getElementById('home-screen');
const gameScreen = document.getElementById('game-screen');
const bonusScreen = document.getElementById('bonus-game');

// Game audio variables.
const clickSound = new Audio('assets/sounds/click.mp3');
const winSound = new Audio('assets/sounds/winner.mp3');
const loseSound = new Audio('assets/sounds/lose.mp3');

// Navigation buttons variables.
const startBtn = document.getElementById('start');
const bonusBtn = document.getElementById('bonus');
const homeBtn = document.getElementsByClassName('home');

startBtn.addEventListener('click', displayGameScreen);
bonusBtn.addEventListener('click', displayBonusScreen);

// Loop over home buttons class and add event listener.
for (home of homeBtn) {
    home.addEventListener('click', displayHomeScreen);
};

/**
 * Loops over each choice
 * Adds an event listener to each choice.
 */
for(let choice of userChoices) {
    choice.addEventListener('click', playGame);
};

/**
 * Creates an array of choices.
 * Generates a random choice from choices array.
 * Assigns random choice to ComputerChoice variable.
 */
function generateComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoice = randomChoice;
    displayComputerChoice();
    console.log('Computer:', computerChoice);
}

function displayComputerChoice() {
    let computerIcon = document.getElementById('computer-icon');
    computerIcon.className += `far fa-hand-${computerChoice}`;
}

function getResult() {
    switch(userChoice + computerChoice) {
        case 'rockscissors':
        case 'rocklizard':
        case 'paperrock':
        case 'paperspock':
        case 'scissorspaper':
        case 'scissorslizard':
        case 'lizardpaper':
        case 'lizardspock':
        case 'spockscissors':
        case 'spockrock':
            console.log('You win!'); 
            roundText.innerHTML = 'You Win The Round!'
            incrementPlayerScore();
            break;
        case 'scissorsrock':
        case 'lizardrock':
        case 'rockpaper':
        case 'spockpaper':
        case 'paperscissors':
        case 'lizardscissors':
        case 'paperlizard':
        case 'spocklizard':
        case 'scissorsspock':
        case 'rockspock':
            console.log('You Lose!');
            roundText.innerHTML = 'Computer Wins The Round!'
            incrementComputerScore();
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
        case 'lizardlizard':
        case 'spockspock':
            console.log('Its a draw!');
            roundText.innerHTML = 'Draw!'
            break;
    }
}

function incrementPlayerScore() {
    let scoreHTML = document.getElementById('score');
    scoreHTML.innerHTML = ++playerScore;
};

function incrementComputerScore() {
    let computerHTML = document.getElementById('comp-score');
    computerHTML.innerHTML = ++computerScore;
}

function playGame(e) {
    userChoice = e.target.id;
    console.log('User:', userChoice);
    generateComputerChoice();
    getResult();
}

// Game screen display functions.
function displayHomeScreen() {
    bonusScreen.style.display = 'none';
    gameScreen.style.display = 'none';
    homeScreen.style.display = 'flex';
}

function displayGameScreen() {
    homeScreen.style.display = 'none';
    bonusScreen.style.display = 'none';
    gameScreen.style.display = 'block';
};

function displayBonusScreen() {
    homeScreen.style.display = 'none';
    gameScreen.style.display = 'none';
    bonusScreen.style.display = 'block';
};

// Game Function - Check the User choice vs computer, increment score.

// Game Reset Function - Reset both User and Computer score.

// Winner Modal Function - Modal appears when either player reaches 5 points.

// Bonus Game Function - Check if the User choice of language corresponds to code displayed by Computer.

// Mute game audio when clicking sound icon.