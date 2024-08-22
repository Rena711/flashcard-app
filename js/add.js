const term = document.getElementById("term");
const def = document.getElementById("def");
const addButton = document.querySelector(".addButton");
const reviewButton = document.querySelector(".reviewButton");
const checkButton= document.querySelector(".check");
const nextButton= document.querySelector(".next");



let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [];

addButton.addEventListener('click', () => {
    let tempTerm = term.value.trim();
    let tempDef = def.value.trim();
    if(!tempDef || !tempTerm){
        alert('An error has occurred: Please try again.');
    } else {
        flashcards.push({term2: tempTerm, def: tempDef});
        localStorage.setItem('flashcards', JSON.stringify(flashcards)); 
    }
    term.value = '';
    def.value = '';
});

