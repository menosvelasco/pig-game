'use strict';

// Selecting elements
const score_0_Ele = document.getElementById('score-0');
const score_1_Ele = document.getElementById('score-1');

const current_0_Ele = document.getElementById('current-0');
const current_1_Ele = document.getElementById('current-1');

const diceEle = document.querySelector('.roll-dice');
const newGame = document.querySelector('.btn-new-game');
const rollDice = document.querySelector('.btn-roll-dice');
const holdPoints = document.querySelector('.btn-hold-points');

let currentScore = 0;

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
    current_0_Ele.textContent = currentScore; // change later
  } else {
    //  switch to next player
  }
});
