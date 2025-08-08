// Variáveis para controlar o placar
let player1Score = 0;
let player2Score = 0;
let tieScore = 0;

// Símbolos para cada opção
const handSymbols = ["✊", "✋", "✌️"];
const handNames = ["Pedra", "Papel", "Tesoura"];

function createHandImage(symbol) {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Ccircle cx='75' cy='75' r='70' fill='%23c147e9' opacity='0.3'/%3E%3Ctext x='75' y='75' text-anchor='middle' dominant-baseline='central' font-size='60' fill='%23e5b8f4'%3E${symbol}%3C/text%3E%3C/svg%3E`;
}

function playGame() {
  // Gerar números aleatórios para ambos os jogadores
  const randomNumber1 = Math.floor(Math.random() * 3);
  const randomNumber2 = Math.floor(Math.random() * 3);

  // Atualizar as imagens
  const image1 = document.querySelector(".img1");
  const image2 = document.querySelector(".img2");

  image1.src = createHandImage(handSymbols[randomNumber1]);
  image2.src = createHandImage(handSymbols[randomNumber2]);

  // Calcular o resultado
  const resultCode = (randomNumber1 - randomNumber2 + 3) % 3;

  let resultText = "";

  if (resultCode === 0) {
    resultText = "🤝 Empate!";
    tieScore++;
    document.getElementById("scoreTie").textContent = tieScore;
  } else if (resultCode === 1) {
    resultText = "🎉 Player 1 Venceu!";
    player1Score++;
    document.getElementById("score1").textContent = player1Score;
  } else {
    resultText = "Player 2 Venceu! 🎉";
    player2Score++;
    document.getElementById("score2").textContent = player2Score;
  }

  // Mostrar o resultado detalhado
  document.getElementById("result").textContent = resultText;
  document.getElementById(
    "result-detail"
  ).textContent = `${handNames[randomNumber1]} vs ${handNames[randomNumber2]}`;

  // Adicionar efeito de animação nas imagens
  image1.style.transform = "scale(1.2)";
  image2.style.transform = "scale(1.2)";

  setTimeout(() => {
    image1.style.transform = "scale(1)";
    image2.style.transform = "scale(1)";
  }, 500);
}

// Adicionar evento de teclado para jogar com espaço
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault();
    playGame();
  }
});

// Inicializar o jogo
document.addEventListener("DOMContentLoaded", function () {
  const image1 = document.querySelector(".img1");
  const image2 = document.querySelector(".img2");
  image1.src = createHandImage("✋");
  image2.src = createHandImage("✋");
});
