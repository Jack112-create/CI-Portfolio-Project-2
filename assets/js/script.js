// Global variables.

// Game screens.
const homeScreen = document.getElementById('home-screen');
const gameScreen = document.getElementById('game-screen');
const bonusScreen = document.getElementById('bonus-game');

// Navigation buttons.
const startBtn = document.getElementById('start');
const bonusBtn = document.getElementById('bonus');
const homeBtn = document.getElementsByClassName('home');

startBtn.addEventListener('click', displayGameScreen);
bonusBtn.addEventListener('click', displayBonusScreen);

// Loop over home buttons class and add event listener.
for (home of homeBtn) {
    home.addEventListener('click', displayHomeScreen);
};

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
}


// Loop over Player buttons - Loop over each choice and return the ID of the button that was clicked, run game function.

// Computer Choice Function - Computer is given an array and chooses a random choice.

// Game Function - Check the User choice vs computer, increment score.

// Game Reset Function - Reset both User and Computer score.

// Winner Modal Function - Modal appears when either player reaches 5 points.

// Bonus Game Function - Check if the User choice of language corresponds to code displayed by Computer.

// Mute game audio when clicking sound icon.

// Clicking home icon brings user back to start screen.