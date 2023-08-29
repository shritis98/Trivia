
var readlineSync = require("readline-sync");
var name = readlineSync.question("What's your name? ");
console.log("Welcome " + name + " to Quiz on FRIENDS");
console.log("Let's start");
var score = 0;
function play(question, answer) {
  var input = readlineSync.question(question);
  if (input.toUpperCase() === answer.toUpperCase()) {
    console.log("Your answer is correct");
    score++;
  } else {
    console.log("Oops! Wrong answer");
  }
  console.log("Your score is: " + score);
}

var game = [
  {
    question: 'Which character has a twin? ',
    answer: 'Phoebe'
  },
  {
    question: 'Who got stuck in leather pants? ',
    answer: 'Ross',
  },
  {
    question: 'Who hates Thanksgiving? ',
    answer: 'Chandler',
  },
  {
    question: 'Monica dated an opthalmologist named? ',
    answer: 'Richrd'
  },
  {
    question: "What is Chandler Bing's middle name? ",
    answer: 'Muriel'
  },
  {
    question: 'Who says the last line of the series? ',
    answer: 'Chandler'
  }]

for (var i = 0; i < game.length; i++) {
  play(game[i].question, game[i].answer);

}
console.log("_____________");
console.log("Final score: " + score);

