// Task 6 — Find the Secret Number

// ---------- DOM elements ----------
const gameElement = document.getElementById("game");
const guessInput = document.getElementById("guess-input");
const checkButton = document.getElementById("check-button");
const resetButton = document.getElementById("reset-button");
const messageElement = document.getElementById("message");
const attemptsElement = document.getElementById("attempts");

const helpButton = document.getElementById("help-button");
const closeModalButton = document.getElementById("close-modal");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

// ---------- Game state ----------
const startingAttempts = 5;

// Bonus 1: the secret number is random, so it is a let and changes on every reset.
// The basic version of the task used: const secretNumber = 7;
let secretNumber = createSecretNumber();
let attempts = startingAttempts;

attemptsElement.textContent = attempts;

// Bonus 1: returns a number from 1 to 10.
function createSecretNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// One place that writes the game message.
function showMessage(message) {
  messageElement.textContent = message;
}

function updateAttempts() {
  attemptsElement.textContent = attempts;
}

function endGame(stateClass, message) {
  showMessage(message);
  gameElement.classList.add(stateClass);
  checkButton.disabled = true;
}

// Shared by the Check button and the Enter key (Bonus 2).
function checkGuess() {
  // The game is finished, so nothing else is checked.
  if (checkButton.disabled) {
    return;
  }

  const guessText = guessInput.value.trim();
  const guess = Number(guessText);

  // An empty box, or text that is not a number at all.
  if (guessText === "" || Number.isNaN(guess)) {
    showMessage("Enter a number");
    return;
  }

  if (guess < 1 || guess > 10) {
    showMessage("Choose a number from 1 to 10");
    return;
  }

  if (guess === secretNumber) {
    endGame("win", "Correct!");
    return;
  }

  // Wrong guess: it costs one attempt.
  attempts = attempts - 1;
  updateAttempts();

  if (attempts === 0) {
    endGame("lose", "Game over");
    return;
  }

  if (guess > secretNumber) {
    showMessage("Too high");
  } else {
    showMessage("Too low");
  }
}

function resetGame() {
  attempts = startingAttempts;
  secretNumber = createSecretNumber(); // Bonus 1: a new secret number every game.

  updateAttempts();
  guessInput.value = "";
  showMessage("Make your first guess.");
  checkButton.disabled = false;
  gameElement.classList.remove("win", "lose");
  guessInput.focus();
}

// ---------- Help modal (Bonus 3) ----------
function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

// ---------- Events ----------
checkButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", resetGame);

helpButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  // Bonus 2: Enter checks the guess, with no repeated game logic.
  if (event.key === "Enter") {
    checkGuess();
  }

  // Bonus 3: Escape closes the help box when it is open.
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
