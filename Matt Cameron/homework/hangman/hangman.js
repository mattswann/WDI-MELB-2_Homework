var word = {
  secretWord: "",
  wordList: ['ruby', 'rails', 'javascript', 'array', 'hash', 'underscore', 'sinatra', 'model', 'controller', 'view', 'devise', 'authentication', 'capybara', 'jasmine', 'cache', 'sublime', 'terminal', 'system', 'twitter', 'facebook', 'function', 'google', 'amazon', 'development', 'data', 'design', 'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route', 'gem', 'deployment', 'database'],

  // Selects a random word from the word list sets the secret word
  setSecretWord: function(){
      word.secretWord = _.sample(word.wordList);
  },

  // Takes an array of letters as input and returns an array of two items:
  // 1) A string with the parts of the secret word that have been guessed correctly and underscore for the parts that haven't
  // 2) An array of all the guessed letters that were not in the secret word
  checkLetters: function(letter){
    guessedLetters.push(letter);
    usedLetters.innerHTML = guessedLetters;

  }
};

/*function  checkEachLetter(letter) {
  if (_.contains(word.secretWord, letter)) {
    console.log("Yes, " + letter + " is in the secret word.");

  } else console.log("Not in the secret word.")
}
*/




var guessedLetters = [];

var player = {
  MAX_GUESSES: 8,
  guessedLetters: [],
  guessesLeft: 8,

  // Takes a new letter as input and updates the game
  makeGuess: function(letter){
    if(player.guessesLeft <= 0) { return; };
    console.log(_.contains(word.secretWord, letter) ? "Yes" : "No");
    player.guessesLeft--;

    displayGuesses.innerHTML = player.guessesLeft;
    word.checkLetters(letter);
   player.checkWin();
   player.checkLose();
  },

  // Check if the player has won and end the game if so
  checkWin: function(wordString){
    //if guessed letters contains each letter in the secret word
    var uniqueSecret = _.uniq(word.secretWord);
    var uniqueGuessedLetters = _.uniq(guessedLetters);

    if (uniqueSecret.length === _.intersection(uniqueSecret, uniqueGuessedLetters).length) {
      result.innerHTML = "YOU WIN!";
    }
  },

  // Check if the player has lost and end the game if so
  checkLose: function(wrongLetters){
    if (player.guessesLeft === 0) {
      result.innerHTML = "YOU LOSE!";
    }
  }
};

var game = {
  // Resets the game
  resetGame: function(){},

  // Reveals the answer to the secret word and ends the game
  giveUp: function(){},

  // Update the display with the parts of the secret word guessed, the letters guessed, and the guesses remaining
  updateDisplay: function(secretWordWithBlanks, guessedLetters, guessesLeft){}
};

//set Secret word on load for now
word.setSecretWord();

// HTML stuff
var input = document.getElementById("letterField");

var guessButton = document.getElementById("guessBtn");
guessButton.addEventListener('click', function() {
  player.makeGuess(input.value);
  input.value = "";
});

var giveUpButton = document.getElementById("giveUpButton");
giveUpButton.addEventListener('click', game.giveUp);

var resetButton = document.getElementById("resetButton");
resetButton.addEventListener('click', game.resetGame);

var spoiler = document.getElementById("spoiler");
spoiler.innerHTML = word.secretWord;

var displayGuesses = document.getElementById("guessesLeft");
displayGuesses.innerHTML = 8;

var result = document.getElementById("result");

var usedLetters = document.getElementById("guessedLetters");

window.onload = function(){
  // Start a new game
  // Add event listener to the letter input field to grab letters that are guessed
  // Add event listener to the reset button to reset the game when clicked
  // Add event listener to the give up button to give up when clicked
};