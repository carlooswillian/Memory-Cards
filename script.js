body {
    font-family: Arial, sans-serif;
    background-color: #f0f8ff;
    color: #333;
    text-align: center;
    margin: 0; /* Remove margens padrão */
    padding: 0; /* Remove preenchimentos padrão */
    overflow: hidden; /* Impede que a tela role se o conteúdo ultrapassar */
}

#game-board {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr)); /* Ajusta o tamanho mínimo dos cards para 80px */
    grid-gap: 10px; /* Espaço entre os cards */
    justify-content: center;
    margin: 20px auto;
    padding: 10px; /* Adiciona um pouco de preenchimento */
    max-width: 90vw; /* Limita a largura total do tabuleiro */
    box-sizing: border-box; /* Inclui o preenchimento e a borda nas dimensões totais */
}

.card {
    width: 90px; /* Largura fixa para os cards */
    height: 160px; /* Altura ajustada para os cards */
    background-color: #4a90e2;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    overflow: hidden; /* Garante que a imagem não ultrapasse o card */
}

.card img {
    width: 100%; /* Ajusta a largura da imagem */
    height: 100%; /* Ajusta a altura da imagem */
    object-fit: cover; /* Garante que a imagem cubra o card sem distorção */
    display: none; /* Oculta a imagem inicialmente */
}

.card.flipped img {
    display: block; /* Mostra a imagem quando o card é virado */
}

#scoreboard {
    margin-top: 20px;
}
