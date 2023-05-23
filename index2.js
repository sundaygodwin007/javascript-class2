"use strict";

const number = document.querySelector(".number");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const btnAgain = document.querySelector(".again");
const btnCheck = document.querySelector(".check");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highscore");

let score = 10;
let highScore = 0;

btnAgain.style.display = "none";

const hiddenNumber = Math.trunc(Math.random() * 20) + 1;
number.textContent = hiddenNumber;

//
function checkScore() {
  if (score > 1) {
    scoreEl = score;
  } else {
    message.textContent = "oops sorry Game over";
    btnCheck.style.display = "none";
    btnAgain.style.display = "block";
    btnAgain.textContent = "Try Again";
  }
}

// Checking if guess matches the hidden number
function checkGuess() {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    message.textContent = "No number inputed !";
  } else if (guess > 20) {
    message.textContent = "choose between 1-20";
  } else if (guess === hiddenNumber) {
    document.querySelector(".body").style.backgroundColor = "green";
    message.textContent = "Correct you guessed it";
    number.style.width = "30rem";
    btnAgain.style.display = "block";
    btnCheck.style.display = "none";
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  } else if (guess < hiddenNumber) {
    message.textContent = "Sorry too low";
    score--;
    scoreEl.textContent = score;
    checkScore();
  } else if (guess > hiddenNumber) {
    message.textContent = "sorry too high";
    score--;
    scoreEl.textContent = score;
    checkScore();
  }
}
btnCheck.addEventListener("click", checkGuess); //event listener for the guess button

function tryAgain() {
  const hiddenNumber = Math.trunc(Math.random() * 20) + 1;

  number.textContent = hiddenNumber;
  const guess = Number(document.querySelector(".guess").value);

  btnCheck.style.display = "block";
  btnAgain.style.display = "none";
  message.textContent = "Start Guessing...";
  scoreEl.textContent = score;
}
btnAgain.addEventListener("click", tryAgain); //event listner for the try again button
