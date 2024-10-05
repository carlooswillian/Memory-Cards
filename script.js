const cardImages = [
    'imagem1.jpg', 'imagem1.jpg',
    'imagem2.jpg', 'imagem2.jpg',
    'imagem3.jpg', 'imagem3.jpg',
    'imagem4.jpg', 'imagem4.jpg',
    'imagem5.jpg', 'imagem5.jpg',
    'imagem6.jpg', 'imagem6.jpg',
    'imagem7.jpg', 'imagem7.jpg',
    'imagem8.jpg', 'imagem8.jpg',
    'imagem9.jpg', 'imagem9.jpg',
    'imagem10.jpg', 'imagem10.jpg'
];

let board = document.getElementById('game-board');
let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');

let playerTurn = 1;
let scores = [0, 0];
let flippedCards = [];
let matchedCards = 0;

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function createBoard() {
    let shuffledImages = shuffle(cardImages);
    for (let image of shuffledImages) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-image', image);
        card.addEventListener('click', flipCard);
        board.appendChild(card);
    }
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        this.style.backgroundImage = `url('${this.getAttribute('data-image')}')`;
        flippedCards.push(this);
        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    const [firstCard, secondCard] = flippedCards;
    if (firstCard.getAttribute('data-image') === secondCard.getAttribute('data-image')) {
        scores[playerTurn - 1]++;
        matchedCards += 2;
        updateScore();
    } else {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        firstCard.style.backgroundImage = '';
        secondCard.style.backgroundImage = '';
        playerTurn = playerTurn === 1 ? 2 : 1;
    }
    flippedCards = [];
    if (matchedCards === cardImages.length) {
        alert(`Jogo terminado! Jogador 1: ${scores[0]}, Jogador 2: ${scores[1]}`);
        resetGame();
    }
}

function updateScore() {
    score1.textContent = scores[0];
    score2.textContent = scores[1];
}

function resetGame() {
    scores = [0, 0];
    playerTurn = 1;
    matchedCards = 0;
    board.innerHTML = '';
    createBoard();
    updateScore();
}

createBoard();
