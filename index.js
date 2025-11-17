let playerScore = 0;
let computerScore = 0;

const resultsDiv = document.getElementById("results");
const scoreDiv   = document.getElementById("score");

// Fonction qui génère le choix de l’ordinateur
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// Fonction principale dun round
function playRound(playerSelection) {
    const computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        resultsDiv.textContent = `Draw! You both chose ${playerSelection}.`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        resultsDiv.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        resultsDiv.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    updateScore();
    checkWinner();
}

// Met à jour le score à l’écran
function updateScore() {
    scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

// Vérifie si quelqu’un a gagné
function checkWinner() {
    if (playerScore === 5) {
        resultsDiv.textContent = "🎉 YOU WIN THE GAME! 🎉";
        resetGame();
    } else if (computerScore === 5) {
        resultsDiv.textContent = "💀 COMPUTER WINS THE GAME! 💀";
        resetGame();
    }
}

// Reset automatique
function resetGame() {
    setTimeout(() => {
        playerScore = 0;
        computerScore = 0;
        scoreDiv.textContent = "";
        resultsDiv.textContent = "New Game Started!";
    }, 1500);
}

// Ajout des Event Listeners (point c)
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
