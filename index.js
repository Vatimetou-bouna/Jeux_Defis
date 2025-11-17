let playerScore = 0;
let computerScore = 0;

const resultsDiv = document.getElementById("results");
const scoreDiv   = document.getElementById("score");
const buttons = document.querySelectorAll(".choice");

function computerPlay() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        displayMessage(`Draw! Both chose ${playerSelection}.`, "draw");
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        displayMessage(`You win! ${playerSelection} beats ${computerSelection}`, "win");
    } else {
        computerScore++;
        displayMessage(`You lose! ${computerSelection} beats ${playerSelection}`, "lose");
    }

    updateScore();
    checkWinner();
}

function displayMessage(msg, type) {
    resultsDiv.textContent = msg;
    resultsDiv.className = "message " + type;
}

function updateScore() {
    scoreDiv.textContent = `Player: ${playerScore} — Computer: ${computerScore}`;
}

function checkWinner() {
    if (playerScore === 5) {
        displayMessage(" YOU WIN THE GAME! ", "win");
        resetGame();
    } else if (computerScore === 5) {
        displayMessage(" COMPUTER WINS THE GAME! ", "lose");
        resetGame();
    }
}

function resetGame() {
    setTimeout(() => {
        playerScore = 0;
        computerScore = 0;
        updateScore();
        displayMessage("New game started!", "draw");
    }, 2000);
}

buttons.forEach(btn =>
    btn.addEventListener("click", () => playRound(btn.dataset.choice))
);
