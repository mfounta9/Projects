"use strict";

let computerOptions = [
    'Freddy',
    'Jason',
    'Leatherface'
]
function computerPlay() {
    let randomSelect = Math.floor(Math.random() * computerOptions.length);
    return computerOptions[randomSelect];
}
function playRound(playerSelection) {
    let playerChoiceStr = playerSelection.toLowerCase(); 
    // filters playerSelection to lower case allowing case insensitivity
    if (playerChoiceStr === 'Freddy' && computerPlay() === 'Leatherface') {
        result = playerWin;
    }  else if (playerChoiceStr === 'Leatherface' && computerPlay() === 'Jason') {
        result = playerWin;
    } else if (playerChoiceStr === 'Jason' && computerPlay() === 'Freddy') {
        result = playerWin;
    } else if (playerChoiceStr === computerPlay()) {
        result = playerTie;
    } else {
        result = playerLoss;
    }
    return result;
}
function checkWinner() {
    let finalScore = '';
    if (wins == 5) {
        resetGame();
        body.style.backgroundColor = rgb(0, 255, 0);
        finalScore = "You survived!";
    } else if (losses == 5) {
        resetGame(); // resets score to 0-0
        body.style.backgroundColor = rgb(102, 0, 204);
        finalScore = "You Died!...";
    }
    finalResult.textContent = finalScore;
}
function resetGame() {
    wins = 0;
    losses = 0;
    winCount.textContent = wins;
    lossCount.textContent = losses;
    finalResult.textContent = '';
    results.textContent = '';
    
}
// named function to reduce repetitive code for button listeners
function playerSelects(e) {
    playerSelection = e.target.id; // this works because the id is equal to the input parameter needed
    playRound(playerSelection);

    if (result === playerWin) {
        wins += 1;
    } else if (result === playerTie) {
        result = playerTie;
    } else {
        losses += 1;
    }

    results.textContent = result;
    winCount.textContent = wins;
    lossCount.textContent = losses;

    checkWinner(); // helper function to evaluate winner/loser
}

let result = ''; // declare result variable to store round results
let playerSelection = ''; // initialize player selection

const playerLoss = "You Died!";
const playerWin = "You Survived!";
const playerTie = "A Tie!";

let wins = 0; // default scores
let losses = 0;

const winCount = document.querySelector('.wins'); // score tally nodes
const lossCount = document.querySelector('.losses');
// initializes 0/0 as first score represented before counting any wins/losses
winCount.textContent = wins;
lossCount.textContent = losses;

const results = document.querySelector('#results'); // results div
const finalResult = document.querySelector('#final-result'); //final-result node

const body = document.querySelector('body'); // node to support changing background colors

// button element nodes
const FreddyBtn = document.querySelector('#Freddy');
const JasonBtn = document.querySelector('#Jason');
const LeatherfaceBtn = document.querySelector('#Leatherface');
const resetBtn = document.querySelector('#reset-all'); // reset!
// button event listeners
FreddyBtn.addEventListener('click', playerSelects);
JasonBtn.addEventListener('click', playerSelects);
LeatherfaceBtn.addEventListener('click', playerSelects);
resetBtn.addEventListener('click', resetGame); // reset!