// Global Variables
const languages = document.getElementsByClassName('language');
const bonusRoundText = document.getElementById('bonus-round-text');
userChoice;
let question;
let bonusScoreHTML = document.getElementsByClassName('score')[1];
let bonusComputerHTML = document.getElementsByClassName('comp-score')[1];

for (let language of languages) {
   language.addEventListener('click', bonusGame);
};

function bonusGame(e) {
    userChoice = e.target.id;
    console.log(userChoice);
    getQuestionResult();
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
    const code = document.getElementById('computer-code');
    code.className = `language-${question}`;

    if(question === 'html') {
        code.innerHTML = '&lt;h1&gt;Hello World&lt;/h1&gt';
    } else if(question === 'css') {
        code.innerHTML = 'p {color: red}';
    } else if(question === 'javascript') {
        code.innerHTML = 'function() {}';
    } else {
        code.innerHTML = 'Print()';
    }
};

function getQuestionResult() {
    if(userChoice === question) {
        bonusRoundText.innerHTML = 'You Chose The Correct Language!';
        generateQuestion();
    } else {
        bonusRoundText.innerHTML = 'You Did Not Choose the Correct Language';
    }
};

generateQuestion();