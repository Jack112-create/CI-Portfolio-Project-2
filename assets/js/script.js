// Global variables.
const userChoices = document.getElementsByClassName('choice');
const roundText = document.getElementById('round-text');
const closeBtn = document.getElementsByClassName('close')[0];
let userChoice;
let computerChoice;
let toggleAudio = document.getElementById('audio');
let scoreHTML = document.getElementsByClassName('score')[0];
let computerHTML = document.getElementsByClassName('comp-score')[0];

const winnerModal = document.getElementsByClassName('winner-modal')[0];
const modalHeader = document.getElementsByClassName('modal-header')[0];
const modalParagraph = document.getElementsByClassName('modal-result')[0];

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
for (let home of homeBtn) {
    home.addEventListener('click', displayHomeScreen);
}

/**
 * Loops over each choice
 * Adds an event listener to each choice.
 */
for (let choice of userChoices) {
    choice.addEventListener('click', playGame);
}

/**
 * Close winner modal that is passed into the function.
 */
closeBtn.addEventListener('click', () => {
    closeModal(winnerModal);
});

/**
 * Checks to see if the audio is muted or unmuted.
 * Applies colour and icon.
 */
toggleAudio.addEventListener('click', (e) => {
    if (clickSound.muted === false && winSound.muted === false && loseSound.muted === false) {
        e.target.style.color = 'red';
        e.target.className = 'fas fa-volume-mute';
        clickSound.muted = true;
        winSound.muted = true;
        loseSound.muted = true;
    } else {
        e.target.style.color = 'white';
        e.target.className = 'fas fa-volume-up';
        clickSound.muted = false;
        winSound.muted = false;
        loseSound.muted = false;
    }
});

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
}

/**
 * Targets computer-icon ID.
 * A class is dynamically added to element with computer-icon ID.
 * The computerChoice variable is added to the end of new class.
 */
function displayComputerChoice() {
    let computerIcon = document.getElementById('computer-icon');
    computerIcon.className = `far fa-hand-${computerChoice}`;
}

/**
 * Checks a concatenated string of userChoice and ComputerChoice.
 * Element with an ID of round-text is targeted and its innerHTML is set to notify the user if they are the round winner, round loser or if the round is a draw.
 * User score is incremented if they have won the round.
 * Computer score is incremented if they have won the round.
 */
function getResult() {
    switch (userChoice + computerChoice) {
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
            roundText.innerHTML = 'You Win The Round!';
            incrementPlayerScore(scoreHTML);
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
            roundText.innerHTML = 'Computer Wins The Round!';
            incrementComputerScore(computerHTML);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
        case 'lizardlizard':
        case 'spockspock':
            roundText.innerHTML = 'Draw!';
            break;
    }
}

/**
 * Player score is incremented.
 */
function incrementPlayerScore(score) {
    score.innerHTML = ++playerScore;
}

/**
 * Computer score is incremented.
 */
function incrementComputerScore(score) {
    score.innerHTML = ++computerScore;
}

/**
 * Checks player and computer score is eqaul to 5.
 * Modal display is set to block.
 * Modal header notifies the user if they have either won or lost the game.
 * Modal paragraph shows the final score of both players.
 * If the user has won, the winning game sound will play. If the user loses, the losing game sound will play.
 */
function showWinner(winnerModal, modalHeader, modalParagraph) {
    if (playerScore === 5) {
        winnerModal.style.display = 'block';
        modalHeader.textContent = 'You Win The Game!';
        modalParagraph.textContent = `You: ${playerScore} > Computer: ${computerScore}`;
        winSound.play();
    } else if (computerScore === 5) {
        winnerModal.style.display = 'block';
        modalHeader.textContent = 'You Lose The Game!';
        modalParagraph.textContent = `Computer: ${computerScore} > You: ${playerScore}`;
        loseSound.play();
    }
}

/**
 * Checks the ID of the element that has been clicked on.
 * The generateComputerChoice function is invoked.
 * The getResult function is invoked.
 * The showWinner function is invoked, passing the modal parameters.
 * The click audio is played each time the player makes a choice. 
 */
function playGame(e) {
    userChoice = e.target.id;
    generateComputerChoice();
    getResult();
    showWinner(winnerModal, modalHeader, modalParagraph);
    clickSound.play();
}

/**
 * Modal display is set to none.
 * ResetGame function is invoked passing score parameters. 
 */
function closeModal(modal) {
    modal.style.display = 'none';
    resetGame(scoreHTML, computerHTML);
}

/**
 * Player parameters are passed.
 * Player score and Computer score are set to 0.
 * Player innerHTML and Computer innerHTML is set to new scores.
 * Round text is set to an empty string.
 * Computer icon is set back to a question mark.
 */
function resetGame(player, computer) {
    playerScore = 0;
    computerScore = 0;
    player.innerHTML = playerScore;
    computer.innerHTML = computerScore;
    roundText.innerHTML = '';
    bonusRoundText.innerHTML = '';
    document.getElementById('computer-icon').className = `fas fa-question`;
}

// Game screen display functions.
function displayHomeScreen() {
    bonusScreen.style.display = 'none';
    gameScreen.style.display = 'none';
    homeScreen.style.display = 'flex';
    document.getElementsByClassName('controls')[0].style.display = 'none';
}

function displayGameScreen() {
    homeScreen.style.display = 'none';
    bonusScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    document.getElementsByClassName('controls')[0].style.display = 'flex';
}

function displayBonusScreen() {
    homeScreen.style.display = 'none';
    gameScreen.style.display = 'none';
    bonusScreen.style.display = 'block';
    document.getElementsByClassName('controls')[0].style.display = 'flex';
}