const term = document.querySelector(".term");
const definition = document.querySelector(".definition");
const reviewButton = document.querySelector(".reviewButton");
const checkButton= document.querySelector(".check");
const nextButton= document.querySelector(".next");

let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [];

data = Object.entries(flashcards);

function getRandomTerm(){
    if (flashcards.length === 0) {
        alert('ERROR: no flashcards available!');
    }else {
        let random = data[Math.floor(Math.random() * flashcards.length)];
        term.innerHTML = `<h3>${random[1].term}</h3>`;
        definition.innerHTML = `<h3>${random[1].def}</h3>`;
    }
};

checkButton.addEventListener('click', function() {
    definition.style.display = 'block';
});

nextButton.addEventListener('click', function() {
    definition.style.display = 'none';
    getRandomTerm();
});

