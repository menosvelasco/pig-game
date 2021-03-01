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

let currentScore = 0;
let activePlayer = 0;

const scoreArray = [0, 0];

score_0_Ele.textContent = 0;
score_1_Ele.textContent = 0;
diceEle.classList.add('hidden');

//	rolling dice funionality
rollDice.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const randomDice = Math.trunc(Math.random() * 6) + 1;
  console.log(randomDice);
  // 2. display dice roll
  diceEle.classList.remove('hidden');
  diceEle.src = `${randomDice}-dice.png`;

  // 3. check for rolled 1
  if (randomDice !== 1) {
    // add dice to current score
    currentScore += randomDice;
    document.getElementById(
      `current-${activePlayer}`
    ).textContent = currentScore;
  } else {
    //  switch to next player
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0Ele.classList.toggle('active');
    player1Ele.classList.toggle('active');
  }
});
