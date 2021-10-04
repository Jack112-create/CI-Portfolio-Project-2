// Global Variables
const languages = document.getElementsByClassName('language');
const bonusRoundText = document.getElementById('bonus-round-text');
let question;
let bonusScoreHTML = document.getElementsByClassName('score')[1];
let bonusComputerHTML = document.getElementsByClassName('comp-score')[1];

const bonusWinnerModal = document.getElementsByClassName('winner-modal')[1];
const bonusModalHeader = document.getElementsByClassName('modal-header')[1];
const bonusModalParagraph = document.getElementsByClassName('modal-result')[1];

const bonusCloseBtn = document.getElementsByClassName('close')[1];

/**
 * Loops over language choices and invokes bonusGame function.
 */
for (let language of languages) {
   language.addEventListener('click', bonusGame);
};

/**
 * CloseModal function is called passing the bonus game modal.
 * ResetGame function is invoked passing score parameters. 
 */
bonusCloseBtn.addEventListener('click', () => {
    closeModal(bonusWinnerModal);
    resetGame(bonusScoreHTML, bonusComputerHTML);
});

/**
 *  Generates a random question,
 * assigns new question to question variable.
 * DisplayQuestion function is invoked.
 */
function generateQuestion() {
    const questions = ['html', 'css', 'javascript', 'python'];
    question = questions[Math.floor(Math.random() * questions.length)];
    displayQuestion();
};

/**
 * Checks what langauge is provided to question variable.
 * Question display is set to inline-block, other questions displays are set to none to hide them.
 */
function displayQuestion() {
    const htmlQuestion = document.getElementById('code-html');
    const cssQuestion = document.getElementById('code-css');
    const javascriptQuestion = document.getElementById('code-javascript');
    const pythonQuestion = document.getElementById('code-python');

    if(question === 'html') {
        htmlQuestion.style.display = 'inline-block';

        cssQuestion.style.display = 'none';
        javascriptQuestion.style.display = 'none';
        pythonQuestion.style.display = 'none';
    } else if(question === 'css') {
        cssQuestion.style.display = 'inline-block';

        htmlQuestion.style.display = 'none';
        javascriptQuestion.style.display = 'none';
        pythonQuestion.style.display = 'none';
    } else if(question === 'javascript') {
        javascriptQuestion.style.display = 'inline-block';

        htmlQuestion.style.display = 'none';
        cssQuestion.style.display = 'none';
        pythonQuestion.style.display = 'none';
    } else {
        pythonQuestion.style.display = 'inline-block';

        htmlQuestion.style.display = 'none';
        cssQuestion.style.display = 'none';
        javascriptQuestion.style.display = 'none';
    }
};

/**
 * Checks if the userChoice is equal to question variable.
 * GenerateQuestion function is invoked.
 * Player is notified if they have chosen the correct language or not.
 * Player score is incremented if they are correct. Computer score is incremented if they are incorrect.
 */
function getQuestionResult() {
    if(userChoice === question) {
        bonusRoundText.innerHTML = 'You Chose The Correct Language!';
        generateQuestion();
        incrementPlayerScore(bonusScoreHTML);
    } else {
        bonusRoundText.innerHTML = 'You Did Not Choose the Correct Language';
        incrementComputerScore(bonusComputerHTML);
    }
};

/**
 * Checks the ID of the element that has been clicked on.
 * The generateComputerChoice function is invoked.
 * The getQuestionResult function is invoked.
 * The showWinner function is invoked, passing the modal parameters.
 * The click audio is played each time the player makes a choice. 
 */
function bonusGame(e) {
    userChoice = e.target.id;
    getQuestionResult();
    showWinner(bonusWinnerModal, bonusModalHeader, bonusModalParagraph);
    clickSound.play();
};

generateQuestion();