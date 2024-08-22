const remakeButton = document.querySelector(".remakeButton");

remakeButton.addEventListener('click', () => {
    localStorage.setItem('flashcards', JSON.stringify([]));
});