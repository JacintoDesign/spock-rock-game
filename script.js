const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const choices = {   rock: {name: "Rock", defeats: ["scissors","lizard"]},
                    paper: {name: "Paper", defeats: ["rock", "spock"]},
                    scissors: {name: "Scissors", defeats: ["paper", "lizard"]},
                    lizard: {name: "Lizard", defeats: ["paper","spock"]},
                    spock: {name: "Spock", defeats: ["scissors","rock"]}
                };

// Reset score & playerChoice/computerChoice
function reset() {
    playerScoreNumber = 0;
    computerScoreNumber = 0;
    playerScoreEl.innerHTML = playerScoreNumber;
    computerScoreEl.innerHTML = computerScoreNumber;
    playerChoiceEl.innerHTML = '';
    computerChoiceEl.innerHTML = '';
    resultText.innerHTML = '';
    resetSelected();
}

// Reset all 'selected' icons 
function resetSelected() {
    // Remove 'selected' styling
    playerRock.classList.remove('selected');
    playerScissors.classList.remove('selected');
    playerPaper.classList.remove('selected');
    playerLizard.classList.remove('selected');
    playerSpock.classList.remove('selected');

    computerRock.classList.remove('selected');
    computerScissors.classList.remove('selected');
    computerPaper.classList.remove('selected');
    computerLizard.classList.remove('selected');
    computerSpock.classList.remove('selected');
}

// Passing player selection value and styling icons
function select(playerChoice) {
    resetSelected();
    checkResult(playerChoice);

    // Add 'selected' styling & playerChoice
    switch(playerChoice) {
        case 'rock':
            playerRock.classList.add('selected');
            playerChoiceEl.innerHTML = " --- Rock";
            break;
        case 'paper':
            playerPaper.classList.add('selected');
            playerChoiceEl.innerHTML = " --- Paper";
            break;
        case 'scissors':
            playerScissors.classList.add('selected');
            playerChoiceEl.innerHTML = " --- Scissors";
            break;
        case 'lizard':
            playerLizard.classList.add('selected');
            playerChoiceEl.innerHTML = " --- Lizard";
            break;
        case 'spock':
            playerSpock.classList.add('selected');
            playerChoiceEl.innerHTML = " --- Spock";
            break;       
    }
}

function checkResult(playerChoice) {
    resetSelected();
    // Random computer choice
    let computerChoiceNumber = Math.random();
    if (computerChoiceNumber < 0.2) {
        computerChoice = "rock";
      } else if (computerChoiceNumber <= 0.4) {
          computerChoice = "paper";
      } else if (computerChoiceNumber <= 0.6) {
          computerChoice = "scissors";
      } else if (computerChoiceNumber <= 0.8) {
          computerChoice = "lizard";
      } else {
          computerChoice = "spock";
      };

    // Add 'selected' styling & computerChoice
    switch(computerChoice) {
        case 'rock':
            computerRock.classList.add('selected');
            computerChoiceEl.innerHTML = " --- Rock";
            break;
        case 'paper':
            computerPaper.classList.add('selected');
            computerChoiceEl.innerHTML = " --- Paper";
            break;
        case 'scissors':
            computerScissors.classList.add('selected');
            computerChoiceEl.innerHTML = " --- Scissors";
            break;
        case 'lizard':
            computerLizard.classList.add('selected');
            computerChoiceEl.innerHTML = " --- Lizard";
            break;
        case 'spock':
            computerSpock.classList.add('selected');
            computerChoiceEl.innerHTML = " --- Spock";
            break;       
    }

    // Check result, increase scores, update resultText
    if (playerChoice === computerChoice) {
        resultText.innerHTML = "It's a tie.";
    } else {
        let choice = choices[playerChoice];
        if (choice.defeats.indexOf(computerChoice) > -1) {
            resultText.innerHTML = "You Won!";
            playerScoreNumber++;
            playerScoreEl.innerHTML = playerScoreNumber;
        } else {
            resultText.innerHTML = "You Lost!"
            computerScoreNumber++;
            computerScoreEl.innerHTML = computerScoreNumber;
        }
    }
}

// On startup, set initial values
reset();