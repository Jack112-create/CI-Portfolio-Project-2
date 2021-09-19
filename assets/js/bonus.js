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
};
