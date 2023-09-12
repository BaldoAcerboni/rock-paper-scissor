const playRoundButton = document.querySelector('#round-button');
const possibleChoice = ['rock', 'paper', 'scissor'];
const allowedChoice = /^rock$|^paper$|^scissor$/i;
let roundResultMessage = '';
let totalScoreCount = 0;

function getComputerChoice() {
    return possibleChoice[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice) {
   
    if(allowedChoice.test(playerChoice)) {
        if (computerChoice === playerChoice) {
            roundResultMessage = 'Draw!';
        } else if (computerChoice === 'rock') {
            if (playerChoice === 'paper') {
                roundResultMessage = 'You win, paper beats rock!';
                totalScoreCount++;
            } else { // player = scissor
                roundResultMessage = 'You lose, rock beats scissor!';
                totalScoreCount--;
            }
        } else if (computerChoice === 'paper') {
            if (playerChoice === 'rock') {
                roundResultMessage = 'You lose, paper beats rock!';
                totalScoreCount--;
            } else { //player = scissor
                roundResultMessage = 'You win, scissor beats paper!';
                totalScoreCount++;
            }
        } else { // computer = scissor
            if (playerChoice === 'rock') {
                roundResultMessage  = 'You win, rock beats scissor!';
                totalScoreCount++;
            } else {  // player = paper
                roundResultMessage = 'You lose, scissor beats paper!';
                totalScoreCount--;
            }
        }
    } else {
        roundResultMessage = `You can't even type?!?(that count as a loss BTW)`;
        totalScoreCount--;
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        const playerChoice = 
            prompt('Please choose between rock paper and scissor', '').toLowerCase();
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice)
        console.log(roundResultMessage);
    }
    if (totalScoreCount > 0) {
        console.log('congratulations, you beat the machine')
    } else if (totalScoreCount < 0) {
        console.log('the machine won, you loser')
    } else {
        console.log('that is a perfect draw')
    }
}

playRoundButton.addEventListener('click', playGame);