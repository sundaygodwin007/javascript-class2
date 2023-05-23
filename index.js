// const btn = window.document.querySelector(".again");

// // Function to be triggered
// function makeSomeChanges() {
//   window.document.querySelector(".h1").textContent =
//     "will you guess my number?";

//   window.document.querySelector(".body").style.backgroundColor = "dodgerblue";
//   window.document.querySelector(".again").style.display = "none";
//   window.document.querySelector(".score").textContent = 15;
// }
// // setting Event
// btn.addEventListener("click", makeSomeChanges);

"use strict";

const number = document.querySelector(".number");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highscore");
// const btnChanges = document.querySelector(".change");

// creating score and highscore values
let score = 10;
let highScore = 0;

// Hide Again btn
btnAgain.style.display = "none";

// Generate a random number $ display in number field
const hiddenNumber = Math.trunc(Math.random() * 20) + 1;
number.textContent = hiddenNumber;

// function for checking score that will work for else if lower and higher than the range
function checkScore() {
  if (score > 1) {
    score--;
    scoreEl.textContent = score;
  } else {
    score--;
    scoreEl.textContent = score;
    message.textContent = "oops You lost! Game Over";
    btnAgain.style.display = "block";
    btnAgain.textContent = "try Again";
    btnCheck.style.display = "none";
  }
}

// Adding an event to the check button
btnCheck.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    message.textContent = "no number inputed";
  } else if (guess > 20) {
    message.textContent = "choose between 1 & 20";
  } else if (guess === hiddenNumber) {
    number.style.width = "30rem";
    document.body.style.backgroundColor = "#60b347";
    btnAgain.style.display = "block";
    message.textContent = "Correct! You Guessed it";
    btnCheck.style.display = "none";
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  } else if (guess < hiddenNumber) {
    message.textContent = "too low";
    document.body.style.backgroundColor = "rgb(0,0,0)";
    checkScore();
  } else if (guess > hiddenNumber) {
    message.textContent = "too high";
    document.body.style.backgroundColor = "rgb(0,0,0)";
    checkScore();
  }
});

// Play Again button
function playAgain() {
  number.textContent = Math.trunc(Math.random() * 20) + 1;
  message.textContent = "Start Guessing...";
  document.body.style.backgroundColor = "rgb(0,0,0)";
  btnAgain.style.display = "none";
  btnCheck.style.display = "block";
}
btnAgain.addEventListener("click", playAgain);
