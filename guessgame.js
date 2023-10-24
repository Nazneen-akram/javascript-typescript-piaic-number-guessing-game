/*
. The game uses the inquirer library to capture user input and the chalk library to add colored output.
. It generates a random number for the player to guess.
. The code includes functions for taking user input, checking guesses, and providing feedback.
. The game continues until the player guesses the correct number.
. The code is structured to make use of async/await for input.
. A counter keeps track of the number of guesses.
. Run the game using the following command: node guessgame.js
*/



import inquirer from 'inquirer';
import chalk from 'chalk';

// Generate a Random Number
const randomNumber = Math.floor(Math.random() * 10 + 1);

// Counting the number of guesses
let guessCount = 1;

const takeUserInput = async () => {
  const userInput = await inquirer.prompt([
    {
      type: 'number',
      name: 'num1',
      message: 'Enter your guess:'
    }
  ]);

  const userGuess = userInput.num1;
  checkGuess(userGuess);
};

function checkGuess(userGuess) {
  if (userGuess === randomNumber) {
    console.log(chalk.green(`CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN ${guessCount} GUESS`));
  } else if (userGuess > randomNumber) {
    guessCount++;
    console.log(chalk.red("OOPS SORRY!! TRY A SMALLER NUMBER"));
    takeUserInput();
  } else {
    guessCount++;
    console.log(chalk.red("OOPS SORRY!! TRY A GREATER NUMBER"));
    takeUserInput();
  }
}

takeUserInput();
