console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
const favoriteNumber = 3;
const guessedNumber = parseInt(window.prompt("Gimme a number"));

if (guessedNumber < favoriteNumber) {
  console.log('too low');
} else if (guessedNumber > favoriteNumber) {
  console.log('too high');
} else {
  console.log('Congratulations!!!');
}

// Exercise 2
const userAnswer = window.prompt("Who is the current president?");

switch (userAnswer) {
  case "Joe Biden":
    response = 'Correct';
    break;
  case "Donald Trump":
  case "George Washington":
  case "Donald Glover":
  case "Phillip Schmidt":
  default:
    response = 'Incorrect';
    break;
}

console.log(response);