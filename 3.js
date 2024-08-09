let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let resultMessage = "";

    if (humanChoice === computerChoice) {
        resultMessage = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultMessage = `You win! ${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultMessage = `You lose! ${capitalizeFirstLetter(computerChoice)} beats ${humanChoice}.`;
    }

    updateDisplay(resultMessage);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function updateDisplay(resultMessage) {
    document.getElementById("result").innerText = resultMessage;
    document.getElementById("humanScore").innerText = humanScore;
    document.getElementById("computerScore").innerText = computerScore;
    roundsPlayed++;

    if (roundsPlayed >= 5) {
        declareFinalWinner();
        resetGame();
    }
}

function declareFinalWinner() {
    let finalMessage = "";
    if (humanScore > computerScore) {
        finalMessage = "You are the overall winner!";
    } else if (computerScore > humanScore) {
        finalMessage = "Computer is the overall winner!";
    } else {
        finalMessage = "It's an overall tie!";
    }
    document.getElementById("result").innerText = finalMessage;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
}

document.querySelectorAll(".choice-button").forEach(button => {
    button.addEventListener("click", () => {
        const humanChoice = button.getAttribute("data-choice");
        playRound(humanChoice);
    });
});

document.getElementById("startGame").addEventListener("click", () => {
    resetGame();
    updateDisplay("Game started! Make your choice.");
});

