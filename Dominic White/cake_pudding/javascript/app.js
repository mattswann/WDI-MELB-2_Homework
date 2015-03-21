var word = {
  secretWord: "",
  wordList: ['ruby', 'rails', 'javascript', 'devise'],     //, 'hash', 'underscore', 'sinatra', 'model', 'controller', 'view', 'array', 'authentication', 'capybara', 'jasmine', 'cache', 'sublime', 'terminal', 'system', 'twitter', 'facebook', 'function', 'google', 'amazon', 'development', 'data', 'design', 'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route', 'gem', 'deployment', 'database'],
 
  // Selects a random word from the word list sets the secret word
  setSecretWord: function(){
    word.secretWord = _.sample(word.wordList);        //can be written as this.secretWord = ....
    console.log(word.secretWord);
  },
 
  // Takes an array of letters as input and returns an array of two items:
  // 1) A string with the parts of the secret word that have been guessed correctly and underscore for the parts that haven't
  // 2) An array of all the guessed letters that were not in the secret word
  checkLetters: function(guessedLetters){}
};
 
var player = {
  MAX_GUESSES: 8,
  guessedLetters: [],
 
  // Takes a new letter as input and updates the game
  makeGuess: function(letter){
      this.guessedLetters.push(letter)  //player.makeGuess.guessedLetters.push(letter);
  },
 
  // Check if the player has won and end the game if so
  checkWin: function(wordString){},
 
  // Check if the player has lost and end the game if so
  checkLose: function(wrongLetters){}
};
 
var game = {
  // Resets the game
  resetGame: function(){
    console.log("Reset Pressed");
    console.log(word.secretWord);           //diplays secret word //will eventually write to document
    word.secretWord = "";                   //resets secret word
    console.log(player.guessedLetters);     
    player.guessedLetters = [];

  },
 
  // Reveals the answer to the secret word and ends the game
  giveUp: function(){
    console.log("")
  },
 
  // Update the display with the parts of the secret word guessed, the letters guessed, and the guesses remaining
  updateDisplay: function(secretWordWithBlanks, guessedLetters, guessesLeft){}
};

window.onload = function(){
  // Start a new game
  console.log("New Game")
  // Add event listener to the letter input field to grab letters that are guessed
  var input = document.getElementById("letterField");
  input.addEventListener("keyup", function() {
  var letter = document.getElementById("letterField").value;
      console.log(letter);
      player.guessedLetters.push(letter);
    });
  // Add event listener to the reset button to reset the game when clicked     
  var resetBtn = document.getElementById("resetButton");
  resetBtn.addEventListener("click", game.resetGame);

  // Add event listener to the give up button to give up when clicked
  var giveUpBtn = document.getElementById("giveUpButton");
  giveUpBtn.addEventListener("click", game.giveUp);
};