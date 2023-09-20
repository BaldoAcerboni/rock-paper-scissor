const possibleChoice = ['rock', 'paper', 'scissor'];
const buttons = document.getElementsByClassName('btn');
const retryBtn = document.getElementById('retry');
const roundResultMessage = document.getElementById('round-result-message');
const partialScoreMessage = document.getElementById('partial-score');
const gameOverMessage = document.getElementById('game-over-msg');
const gameOverContainer = document.getElementById('retry-container')

let playerScore = 0;
let computerScore = 0;


for(let button of buttons) {
    button.addEventListener('click', playRound)
}

retryBtn.addEventListener('click', retry)

function getComputerChoice() {
    return possibleChoice[Math.floor(Math.random() * 3)];
}

function playRound(e) {
    const playerChoice = e.target.textContent;
    const computerChoice = getComputerChoice();
    
    if (computerChoice === playerChoice) {
        roundResultMessage.textContent = 'Draw!';
    } else if (computerChoice === 'rock') {
        if (playerChoice === 'paper') {
            roundResultMessage.textContent = 'You win, paper beats rock!';
            playerScore++;
        } else { // player = scissor
            roundResultMessage.textContent = 'You lose, rock beats scissor!';
            computerScore++;
        }
    } else if (computerChoice === 'paper') {
        if (playerChoice === 'rock') {
            roundResultMessage.textContent = 'You lose, paper beats rock!';
            computerScore++;
        } else { //player = scissor
            roundResultMessage.textContent = 'You win, scissor beats paper!';
            playerScore++;
        }
    } else { // computer = scissor
        if (playerChoice === 'rock') {
            roundResultMessage.textContent  = 'You win, rock beats scissor!';
            playerScore++;
        } else {  // player = paper
            roundResultMessage.textContent = 'You lose, scissor beats paper!';
            computerScore++;
        }
    }
    playGame()
    
}

function playGame() {
    partialScoreMessage.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    if(playerScore < 3 && computerScore < 3) { 
        return; 
    } else {
        if(playerScore === 3) {
            gameOverMessage.textContent = 'Congratulations you won!!!try again?'
        } else if(computerScore === 3) {
            gameOverMessage.textContent = 'You lost! Try again?'
        }
        for(let button of buttons) {
            button.removeEventListener('click', playRound)
        }
        gameOverContainer.style.display = 'flex';
    }
}

function retry() {
    for(let button of buttons) {
        button.addEventListener('click', playRound)
    }
    gameOverContainer.style.display = 'none';
    playerScore = 0;
    computerScore = 0;
    partialScoreMessage.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    roundResultMessage.textContent = '';
}