const term = document.querySelector(".term");
const definition = document.querySelector(".definition");
const checkButton= document.querySelector(".check");
const nextButton= document.querySelector(".next");
const review= document.querySelector(".review");

const words = {
    one: "1",
    two: "2",
    three: "3",
};

const data = Object.entries(words);

function getRandomTerm(){
    const randomTerm = data[Math.floor(Math.random() * data.length)];
    term.innerHTML = `<h3>${randomTerm[0]}</h3>`;
    definition.innerHTML = `<h3>${randomTerm[1]}</h3>`; 
};


checkButton.addEventListener('click', function() {
    definition.style.display = 'block';
});

nextButton.addEventListener('click', function() {
    definition.style.display = 'none';
    getRandomTerm();
});

review.addEventListener('click', function() {
    window.location.href = '../flashcards.html';
});