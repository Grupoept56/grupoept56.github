
let coinCount = 0;
let adviceList = [
  "Respira profundamente y cuenta hasta 10.",
  "Tómate un descanso antes de reaccionar.",
  "Habla con alguien de confianza.",
  "Haz ejercicio para liberar tensión.",
  "Escucha música tranquila.",
  "Practica la gratitud.",
  "Piensa antes de actuar.",
  "Escribe lo que sientes en un diario.",
  "Visualiza un lugar pacífico.",
  "Repite una frase calmante: 'Estoy en paz.'"
];

function startGame() {
  document.getElementById("mainMenu").classList.add("hidden");
  document.getElementById("gameUI").classList.remove("hidden");
  document.getElementById("bgMusic").play();
}

function moveLeft() {
  alert("Human se mueve a la izquierda");
}
function moveRight() {
  alert("Human se mueve a la derecha");
}
function attack() {
  alert("¡Ataque de paz!");
}
function collectCoin() {
  coinCount++;
  document.getElementById("coinCount").textContent = coinCount;
  let advice = adviceList[Math.floor(Math.random() * adviceList.length)];
  document.getElementById("adviceText").textContent = advice;
}
function gameOver() {
  document.getElementById("gameUI").classList.add("hidden");
  document.getElementById("gameOver").classList.remove("hidden");
}
function restartGame() {
  location.reload();
}
function toggleSound() {
  const music = document.getElementById("bgMusic");
  music.muted = !music.muted;
}
