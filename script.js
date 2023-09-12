const playRoundButton = document.querySelector('#round-button')
let playerChoice = '';
const possibleChoice = ['rock', 'paper', 'scissor'];
const allowedChoice = /^rock$|^paper$|^scissor$/i;
let computerChoice = '';//random choice by the computer
let roundResult = '';   //message displaying if player won lost or drew
let totalCount = 0;     //tracks wins and losses

function getComputerChoice() {
    return possibleChoice[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice) {
   
    if(allowedChoice.test(playerChoice)) {
        if(computerChoice === possibleChoice[0]) {
            if(playerChoice.toLowerCase() === possibleChoice[0]) { //rock
                return roundResult = 'draw';
            } else if(playerChoice.toLowerCase() === possibleChoice[1]) {
                totalCount++;
                return roundResult = 'you win, paper beats rock'
            } else if(playerChoice.toLowerCase() === possibleChoice[2]) {
                totalCount--;
                return roundResult = 'you lose, rock beats scissor'
            } 
        } else if(computerChoice === possibleChoice[1]) { //paper
            if(playerChoice.toLowerCase() === possibleChoice[0]) {
                totalCount--;
                return roundResult = 'you lose, paper beats rock';
            } else if(playerChoice.toLowerCase() === possibleChoice[1]) {
                return roundResult = 'draw'
            } else if(playerChoice.toLowerCase() === possibleChoice[2]) {
                totalCount++;
                return roundResult = 'you win, scissor beats paper'
            } 
        } else if(computerChoice === possibleChoice[2]) { //scissor
            if(playerChoice.toLowerCase() === possibleChoice[0]) {
                totalCount--;
                return roundResult = 'you lose, scissor beats paper';
            } else if(playerChoice.toLowerCase() === possibleChoice[1]) {
                totalCount++;
                return roundResult = 'you win, rock beats scissor'
            } else if(playerChoice.toLowerCase() === possibleChoice[2]) {
                return roundResult = 'draw'
            } 
        }
    } else {
        alert('please choose a valid option')
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        playerChoice = prompt('Please choose between rock paper and scissor', '');
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice)
        console.log(roundResult);
    }
    if (totalCount > 0) {
        console.log('congratulations, you beat the machine')
    } else if (totalCount < 0) {
        console.log('the machine won, you loser')
    } else {
        console.log('that is a perfect draw')
    }
    totalCount = 0;
}

playRoundButton.addEventListener('click', game);