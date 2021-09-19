// Global Variables
const languages = document.getElementsByClassName('language');
const bonusRoundText = document.getElementById('bonus-round-text');
userChoice;
let question;

for (let language of languages) {
   language.addEventListener('click', bonusGame);
};

function bonusGame(e) {
    userChoice = e.target.id;
    console.log(userChoice);
    generateQuestion();
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

generateQuestion();