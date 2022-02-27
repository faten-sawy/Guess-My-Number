'use strict';

const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

let myNumber = randomNumber();

let score = 5;

let highScore = 0;

checkButton.addEventListener('click', () => {
  console.log(myNumber);
  // using "+" to convert string to number
  let guessNumber = +document.querySelector('.guess').value;

  if (score > 1) {
    if (guessNumber) {
      if (guessNumber > 0 && guessNumber <= 20) {
        if (guessNumber !== myNumber) {
          guessNumber > myNumber
            ? displayMessage('too High')
            : displayMessage('too Low');
          score--;
          document.querySelector('.score').textContent = score;
        } else {
          displayMessage('🎉correct answer');
          checkButton.disabled = true;
          document.querySelector('body').style.backgroundColor = 'green';
          document.querySelector('.number').textContent = myNumber;
          if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
          }
        }
      } else {
        displayMessage('⛔️ Number must between 1 and 20');
      }
    } else {
      displayMessage('⛔️ There is No Number');
    }
  } else {
    displayMessage('💥 You Lost');
    checkButton.disabled = true;
    checkButton.getElementsByClassName.color = 'gray';
    document.querySelector('.score').textContent = 0;
  }
  console.log({ guessNumber });
});

againButton.addEventListener('click', () => {
  myNumber = randomNumber();
  score = 5;
  displayMessage('start guessing...');

  document.querySelector('.score').textContent = score;
  checkButton.disabled = false;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
});
function displayMessage(text) {
  document.querySelector('.message').textContent = text;
}
function randomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}
