const playerChoice = 'rock';
const possibleChoice = ['rock', 'paper', 'scissor'];
const allowedChoice = /rock|paper|scissor/i;
const computerChoice = getComputerChoice();
let result = '';

function getComputerChoice() {
    return possibleChoice[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice) {
    if(allowedChoice.test(playerChoice)) {
        if(computerChoice === possibleChoice[0]) {
            if(playerChoice.toLowerCase() === possibleChoice[0]) {
                return result = 'draw';
            } else if(playerChoice.toLowerCase() === possibleChoice[1]) {
                return result = 'you win, paper beats rock'
            } else if(playerChoice.toLowerCase() === possibleChoice[2]) {
                return result = 'you lose, rock beats scissor'
            } 
        } else if(computerChoice === possibleChoice[1]) { //paper
            if(playerChoice.toLowerCase() === possibleChoice[0]) {
                return result = 'you lose, paper beats rock';
            } else if(playerChoice.toLowerCase() === possibleChoice[1]) {
                return result = 'draw'
            } else if(playerChoice.toLowerCase() === possibleChoice[2]) {
                return result = 'you win, scissor beats paper'
            } 
        } else if(computerChoice === possibleChoice[2]) { //scissor
            if(playerChoice.toLowerCase() === possibleChoice[0]) {
                return result = 'you lose, scissor beats paper';
            } else if(playerChoice.toLowerCase() === possibleChoice[1]) {
                return result = 'you win, rock beats scissor'
            } else if(playerChoice.toLowerCase() === possibleChoice[2]) {
                return result = 'draw'
            } 
        }
    } else {
        console.log('please choose a valid option')
    }
}

playRound(playerChoice, computerChoice);
console.log(result)