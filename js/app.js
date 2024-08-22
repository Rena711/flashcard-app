const term = document.querySelector(".term");
const definition = document.querySelector(".definition");
const reviewButton = document.querySelector(".reviewButton");
const checkButton= document.querySelector(".check");
const nextButton= document.querySelector(".next");
const removeButton= document.querySelector(".delete");

let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [];

function getRandomTerm(){
    if (flashcards.length === 0) {
        alert('ERROR: no flashcards available!');
    }else {
        let random = flashcards[Math.floor(Math.random() * flashcards.length)];
        term.innerHTML = `<h3>${random.term2}</h3>`;
        definition.innerHTML = `<h3>${random.def}</h3>`;
    }
};

checkButton.addEventListener('click', function() {
    definition.style.display = 'block';
});

nextButton.addEventListener('click', function() {
    definition.style.display = 'none';
    getRandomTerm();
});

removeButton.addEventListener('click', function() {
    if (flashcards.length === 0) {
        alert('ERROR: no flashcards to remove!');
    } else {
        let currentTerm = term.textContent.trim();
        for (let termNum in flashcards){
            for (let term in flashcards) {
                if (flashcards[termNum].term2 ===  currentTerm){
                    flashcards.splice(termNum, 1);
                    // Update localStorage
                    localStorage.setItem('flashcards', JSON.stringify(flashcards));
                    console.log(flashcards);
                }
            }
        }
    }
});





