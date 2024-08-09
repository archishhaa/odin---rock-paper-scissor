let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let result = "";

    if (humanChoice === computerChoice) {
        result = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        result = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
    } else {
        computerScore++;
        result = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
    }

    document.getElementById("result").innerText = result;
    document.getElementById("humanScore").innerText = humanScore;
    document.getElementById("computerScore").innerText = computerScore;
}

function startGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
        if (["rock", "paper", "scissors"].includes(humanChoice)) {
            playRound(humanChoice);
        } else {
            alert("Invalid choice. Please enter rock, paper, or scissors.");
            i--; // Decrement i to repeat this round
        }
    }

    // Display final results
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

document.getElementById("startGame").addEventListener("click", startGame);
