var word = {
  secretWord: "",
  wordList: ['ruby', 'rails', 'javascript', 'array', 'hash', 'underscore', 'sinatra', 'model', 'controller', 'view', 'devise', 'authentication', 'capybara', 'jasmine', 'cache', 'sublime', 'terminal', 'system', 'twitter', 'facebook', 'function', 'google', 'amazon', 'development', 'data', 'design', 'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route', 'gem', 'deployment', 'database'],

  // Selects a random word from the word list sets the secret word
  setSecretWord: function(){
      word.secretWord = _.sample(word.wordList);
      spoiler.innerHTML = word.secretWord;

      // set blankWord and display it
      _.each(word.secretWord, word.createBlankWord);
      wordString.innerHTML = word.blankWord.join("");
  },

  createBlankWord: function() {
    word.blankWord.push(" _ ");
  },

  blankWord: [],
  wrongLetters: [],
  guessedLetters: [],

};

var player = {
  MAX_GUESSES: 8,
  guessesLeft: 8,

  // Takes a new letter as input and updates the game
  makeGuess: function(letter){
    // if the player is out of guesses, don't let them play
    if(player.guessesLeft <= 0) { return; };

    // if the letter is right
    if (_.contains(word.secretWord, letter)) {

      // Loop through and display each occurrence of the letter
      for (var i=0; i < word.secretWord.length; i++) {
        var foundIdx = word.secretWord.indexOf(letter, i);
        if (foundIdx !== -1) {
          word.blankWord.splice(foundIdx, 1, letter);
        }
      }
    } else { // if the letter is wrong
      word.wrongLetters.push(letter);
      player.guessesLeft--;
    }

    //keep track of the letters tried
    word.guessedLetters.push(letter);
    game.updateDisplay();
  },

  // Check if the player has won and end the game if so
  checkWin: function(wordString){
    //if guessed letters contains each letter in the secret word
    var uniqueSecret = _.uniq(word.secretWord);
    var uniqueGuessedLetters = _.uniq(word.guessedLetters);

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
  updateDisplay: function() {
    displayGuesses.innerHTML = player.guessesLeft;
    wordString.innerHTML = word.blankWord.join("");
    usedLetters.innerHTML = word.wrongLetters;
    player.checkWin();
    player.checkLose();
  }
};


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

var displayGuesses = document.getElementById("guessesLeft");
displayGuesses.innerHTML = 8;

var result = document.getElementById("result");

var usedLetters = document.getElementById("guessedLetters");

var wordString = document.getElementById("wordString");

// set Secret word and set up basics on load
word.setSecretWord();









