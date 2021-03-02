'use strict';

// Selecting elements
const player0Ele = document.querySelector('.player-0-panel');
const player1Ele = document.querySelector('.player-1-panel');

const score_0_Ele = document.getElementById('score-0');
const score_1_Ele = document.getElementById('score-1');

const current_0_Ele = document.getElementById('current-0');
const current_1_Ele = document.getElementById('current-1');

const diceEle = document.querySelector('.roll-dice');
const newGame = document.querySelector('.btn-new-game');
const rollDice = document.querySelector('.btn-roll-dice');
const holdPoints = document.querySelector('.btn-hold-points');

let scoreArray, currentScore, activePlayer, playing;

const init = function () {
  scoreArray = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score_0_Ele.content = 0;
  score_1_Ele.content = 0;

  current_0_Ele.textContent = 0;
  current_1_Ele.textContent = 0;

  diceEle.classList.add('hidden');
  player0Ele.classList.remove('winner');
  player1Ele.classList.remove('winner');

  player0Ele.classList.add('active');
  player1Ele.classList.remove('active');
};

const switchPlayer = function () {
  document.getElementById(`current-${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0Ele.classList.toggle('active');
  player1Ele.classList.toggle('active');
};

//	rolling dice funionality
rollDice.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const randomDice = Math.trunc(Math.random() * 6) + 1;
    // 2. display dice roll
    diceEle.classList.remove('hidden');
    diceEle.src = `dice-${randomDice}.png`;

    // 3. check for rolled 1
    if (randomDice !== 1) {
      // add dice to current score
      currentScore += randomDice;
      document.getElementById(
        `current-${activePlayer}`
      ).textContent = currentScore;
    } else {
      //  switch to next player
      switchPlayer();
    }
  }
});

holdPoints.addEventListener('click', function () {
  if (playing) {
    // 1. add current score to active player score
    scoreArray[activePlayer] += currentScore;
    // scoreArray[1] = scoreArray[1] + currentScore

    document.getElementById(`score-${activePlayer}`).textContent =
      scoreArray[activePlayer];
    // 2. check if player score is >= 100 Finish the game
    if (scoreArray[activePlayer] >= 10) {
      playing = false;
      diceEle.classList.add('hidden');

      document
        .querySelector(`.player-${activePlayer}-panel`)
        .classList.add('winner');
      document
        .querySelector(`.player-${activePlayer}-panel`)
        .classList.remove('active');
    } else {
      switchPlayer();
    }
  }
  // 3. switch to the next player
});

newGame.addEventListener('click', init);
