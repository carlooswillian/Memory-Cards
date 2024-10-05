const cardImages = [
    'imagem1.jpg', 'imagem1.jpg',
    'imagem2.JPG', 'imagem2.JPG',
    'imagem3.jpg', 'imagem3.jpg',
    'imagem4.jpg', 'imagem4.jpg',
    'imagem5.jpg', 'imagem5.jpg',
    'imagem6.jpg', 'imagem6.jpg',
    'imagem7.jpg', 'imagem7.jpg',
    'imagem8.jpg', 'imagem8.jpg',
    'imagem9.jpg', 'imagem9.jpg',
    'imagem10.jpg', 'imagem10.jpg'
];

let cards = [];
let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;
let flippedCards = [];
let matchedCards = 0;

function setupGame() {
    cards = shuffle(cardImages);
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';

    cards.forEach((image) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.image = image;

        const img = document.createElement('img');
        img.src = image;
        card.appendChild(img);

        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    });
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    const [firstCard, secondCard] = flippedCards;

    if (firstCard.dataset.image === secondCard.dataset.image) {
        matchedCards += 2;
        updateScore();
        flippedCards = [];

        if (matchedCards === cards.length) {
            setTimeout(() => alert(`Parabéns! Jogador ${currentPlayer} venceu!`), 500);
        }
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            switchPlayer();
            flippedCards = [];
        }, 1000);
    }
}

function updateScore() {
    if (currentPlayer === 1) {
        player1Score++;
        document.getElementById('player1-score').innerText = player1Score;
    } else {
        player2Score++;
        document.getElementById('player2-score').innerText = player2Score;
    }
}

function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
}

setupGame();
