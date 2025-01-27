const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const playerScoreDisplay = document.getElementById("player-score")
const computerScoreDisplay = document.getElementById("computer-score")

const possibleChoices = document.querySelectorAll("button")

let playerScore = 0
let computerScore = 0
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    if(possibleChoice.id != reset) {
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = userChoice
        generateComputerChoice()
        getResult()
        updateScores()
    }
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if(randomNumber === 1) {
        computerChoice = "rock"
    }
    if(randomNumber === 2) {
        computerChoice = "paper"
    }
    if(randomNumber === 3) {
        computerChoice = "scissor"
    }

    computerChoiceDisplay.innerHTML = computerChoice 
}

function getResult() {
    if(userChoice === computerChoice) {
        result = 'its a draw!'
    } else if(userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'scissor' && computerChoice === 'paper' || userChoice === 'rock' && computerChoice === 'scissor') {
        result = 'you win!'
        playerScore++
    } else {
        result = 'you lose!'
        computerScore++
    }

    resultDisplay.innerHTML = result
}


function updateScores() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

document.getElementById("reset").addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    userChoice = "";
    computerChoice = "";
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    userChoiceDisplay.textContent = userChoice;
    computerChoiceDisplay.textContent = computerChoice;
    resultDisplay.textContent = "Game reset. Start playing!";
});
