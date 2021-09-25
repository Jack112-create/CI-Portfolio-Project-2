// Global Variables
const languages = document.getElementsByClassName('language');
const bonusRoundText = document.getElementById('bonus-round-text');
userChoice;
let question;
let bonusScoreHTML = document.getElementsByClassName('score')[1];
let bonusComputerHTML = document.getElementsByClassName('comp-score')[1];

const bonusWinnerModal = document.getElementsByClassName('winner-modal')[1];
const bonusModalHeader = document.getElementsByClassName('modal-header')[1];
const bonusModalParagraph = document.getElementsByClassName('modal-result')[1];

const bonusCloseBtn = document.getElementsByClassName('close')[1];

for (let language of languages) {
   language.addEventListener('click', bonusGame);
};

bonusCloseBtn.addEventListener('click', () => {
    closeModal(bonusWinnerModal);
    resetGame(bonusScoreHTML, bonusComputerHTML);
});

function bonusGame(e) {
    userChoice = e.target.id;
    console.log(userChoice);
    clickSound.play();
    getQuestionResult();
    showWinner(bonusWinnerModal, bonusModalHeader, bonusModalParagraph);
};


/**
 *  Generates a random question,
 * assigns new question to question variable,
 */

function generateQuestion() {
    const questions = ['html', 'css', 'javascript', 'python'];
    question = questions[Math.floor(Math.random() * questions.length)];
    console.log('question:', question);
    displayQuestion();
};

/**
 * Displays question inside code element.
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

generateQuestion();