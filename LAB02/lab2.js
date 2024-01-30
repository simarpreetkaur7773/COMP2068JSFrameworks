
const prompt = require('prompt');

// Function to get random computer selection
function getComputerSelection() {
  const randomNum = Math.random();
  if (randomNum <= 0.34) {
    return 'PAPER';
  } else if (randomNum <= 0.67) {
    return 'SCISSORS';
  } else {
    return 'ROCK';
  }
}

// Prompt the user to choose ROCK, PAPER, or SCISSORS
prompt.start();
prompt.get(['userSelection'], function (err, result) {
  if (err) {
    console.error(err);
    return;
  }

  const userSelection = result.userSelection.toUpperCase();
  const computerSelection = getComputerSelection();

  // Display user and computer selections
  console.log(`User Selection: ${userSelection}`);
  console.log(`Computer Selection: ${computerSelection}`);

  // Determine the winner
  if (
    (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
  ) {
    console.log('User Wins');
  } else if (
    (computerSelection === 'ROCK' && userSelection === 'SCISSORS') ||
    (computerSelection === 'PAPER' && userSelection === 'ROCK') ||
    (computerSelection === 'SCISSORS' && userSelection === 'PAPER')
  ) {
    console.log('Computer Wins');
  } else {
    console.log("It's a tie");
  }
});
