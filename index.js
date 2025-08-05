const randomNumber1 = Math.floor(Math.random() * 3);
const randomNumber2 = Math.floor(Math.random() * 3);

const randomImage1 = "images/hand" + randomNumber1 + ".png";
const randomImage2 = "images/hand" + randomNumber2 + ".png";

const image1 = document.querySelectorAll("img")[0];
const image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImage1);
image2.setAttribute("src", randomImage2);

const resultCode = (randomNumber1 - randomNumber2 + 3) % 3;

let resultText = "";

if (resultCode === 0) {
  resultText = "Empate!";
} else if (resultCode === 1) {
  resultText = "Player 1 venceu!";
} else {
  resultText = "Player 2 venceu!";
}

document.querySelector("h1").textContent = resultText;
