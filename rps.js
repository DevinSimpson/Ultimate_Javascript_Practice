const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button.rps')
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
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)

    if (randomNumber === 0) {
        computerChoice = 'rock'
    }
    if (randomNumber === 1) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!"
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "You win! Good job!"
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "You lose! Try again!"
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "You lose! Try again!"
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "You win! Good job!"
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "You win! Good job!"
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "You lose! Try again!"
    }
    resultDisplay.innerHTML = result
}