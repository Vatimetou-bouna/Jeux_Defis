let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".choices button");
const resultDiv = document.getElementById("result");
const playerScoreSpan = document.getElementById("playerScore");
const computerScoreSpan = document.getElementById("computerScore");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerSelection = button.dataset.choice;
    const computerSelection = choices[Math.floor(Math.random() * 3)];
    const roundResult = getRoundResult(playerSelection, computerSelection);
    resultDiv.textContent = roundResult;
    updateScore();
    checkWinner();
  });
});

function getRoundResult(player, computer) {
  if (player === computer) return `تعادل! اختار الكمبيوتر: ${translate(computer)}`;
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore++;
    return `لقد فزت! اختار الكمبيوتر: ${translate(computer)}`;
  } else {
    computerScore++;
    return `لقد خسرت! اختار الكمبيوتر: ${translate(computer)}`;
  }
}

function translate(choice) {
  if (choice === "rock") return "حجر";
  if (choice === "paper") return "ورقة";
  return "مقص";
}

function updateScore() {
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
}

function checkWinner() {
  if (playerScore === 5) {
    resultDiv.textContent = "🎉 لقد فزت باللعبة!";
    buttons.forEach(b => b.disabled = true);
  } else if (computerScore === 5) {
    resultDiv.textContent = "😞 لقد خسرت اللعبة!";
    buttons.forEach(b => b.disabled = true);
  }
}