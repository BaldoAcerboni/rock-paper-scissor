const hand = ["rock", "paper", "scissor"];
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");
const result = document.querySelector(".result");
const handsPlayed = document.querySelector(".hands");
const scorePara = document.querySelector(".score");
let userHand;
let score = [0, 0];

function randomChoice() {
  return hand[Math.floor(Math.random() * 3)];
}

function checkWin(user, computer) {
  updateScore();
  if (user === computer) {
    result.textContent = "It is a draw";
  } else if (user === "rock") {
    if (computer === "paper") {
      result.textContent = "Computer wins the round";
      updateScore(1);
    } else if (computer === "scissor") {
      result.textContent = "User wins the round";
      updateScore(0);
    }
  } else if (user === "paper") {
    if (computer === "rock") {
      result.textContent = "User wins the round";
      updateScore(0);
    } else if (computer === "scissor") {
      result.textContent = "Computer wins the round";
      updateScore(1);
    }
  } else {
    if (computer === "rock") {
      result.textContent = "Computer wins the round";
      updateScore(1);
    } else if (computer === "paper") {
      result.textContent = "User wins the round";
      updateScore(0);
    }
  }
  handsPlayed.textContent = `User: ${user}, Computer: ${computer}`;
}

function updateScore(n) {
  if (n !== undefined) {
    score[n]++;
  }
  scorePara.textContent = `User`;
  if (score[n] === 2) {
    if (n === 0) {
      scorePara.textContent = `User wins the game 
      SCORE: User: ${score[0]} Computer: ${score[1]}`;
    } else {
      scorePara.textContent = `Computer wins the game 
      SCORE: User: ${score[0]} Computer: ${score[1]}`;
    }
    score = [0, 0];
  } else {
    scorePara.textContent = `SCORE: User: ${score[0]} Computer: ${score[1]}`;
  }
}

rockBtn.addEventListener("click", () => {
  userHand = "rock";
  checkWin(randomChoice(), userHand);
});

paperBtn.addEventListener("click", () => {
  userHand = "paper";
  checkWin(randomChoice(), userHand);
});

scissorBtn.addEventListener("click", () => {
  userHand = "scissor";
  checkWin(randomChoice(), userHand);
});
