// user throw a dice
var userDice = Math.floor(Math.random() * 6) + 1;
// show result
console.log('userDice is');
console.log(userDice);


// bot throw a dice
var botDice = Math.floor(Math.random() * 6) + 1;
// show result
console.log('botDice is');
console.log(botDice);


// which one is the biggest
if (userDice > botDice) {
  console.log('The user win');
} else if (userDice < botDice) {
  console.log('The bot win');
} else {
  console.log('No winner');
}
