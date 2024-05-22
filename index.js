#! /usr/bin/env node
import inquirer from "inquirer";
/*
Step 1: Computer will generate a random number
Step 2: User input for guessing number
Step 3: Compare user input with computer generated number and show result
*/
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number from 1 - 10"
    },
]);
console.log(answers);
if (answers.userGuessedNumber === randomNumber) {
    console.log(`Congratulations! You guessed the right number`);
}
else {
    console.log(`Sorry! You failed to guess the right number`);
}
if (answers.userGuessedNumber != randomNumber) {
    console.log(`The right answer was ${randomNumber}`);
}
