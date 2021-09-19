// Global Variables
const languages = document.getElementsByClassName('language');
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
 * Displays question inside code element.
 */

function generateQuestion() {
    const code = document.getElementById('computer-code');
    const questions = ['html', 'css', 'js', 'python'];
    question = questions[Math.floor(Math.random() * questions.length)];
    console.log('question:', question);

    code.className = `language-${question}`;

    if(question === 'html') {
        code.innerHTML = '&lt;h1&gt;Hello World&lt;/h1&gt';
    } else if(question === 'css') {
        code.innerHTML = 'p {color: red}';
    } else if(question === 'js') {
        code.innerHTML = 'function() {}';
    } else {
        code.innerHTML = 'Print()';
    }

};

generateQuestion();