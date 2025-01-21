const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")

const possibleChoices = document.querySelectorAll("button")

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
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
    } else {
        result = 'you lose!'
    }
    
    resultDisplay.innerHTML = result
}