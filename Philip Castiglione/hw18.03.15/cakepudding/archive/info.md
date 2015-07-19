<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Hangman</title>
  <link rel="stylesheet" href="style.css">
  <script type='text/javascript' src='js/underscore.min.js'></script>
  <script type='text/javascript' src='js/game.js'></script>
</head>
<body>
  <div id="gamePlayArea">
    <div id="hangmanArea">
      Guesses Left: <span id="guessesLeft"></span>
    </div>
    <div id="letterArea">
      <div id="lettersUsed">
        Letters Guessed Already:
        <div id="guessedLetters"></div>
      </div>
      <div id="guessBox">
        Guess a Letter:
        <input id="letterField" type="text" />
      </div>
    </div>
  </div>
  <div id="wordString"></div>
  <div id="gameControlArea">
    <input id="giveUpButton" class="button" type="submit" value="Give up"/>
    <input id="resetButton" class="button" type="submit" value="Reset Game"/>
  </div>
</body>
</html>

var word = {
  secretWord: "",
  wordList: ['ruby', 'rails', 'javascript', 'array', 'hash', 'underscore', 'sinatra', 'model', 'controller', 'view', 'devise', 'authentication', 'capybara', 'jasmine', 'cache', 'sublime', 'terminal', 'system', 'twitter', 'facebook', 'function', 'google', 'amazon', 'development', 'data', 'design', 'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route', 'gem', 'deployment', 'database'],
 
  // Selects a random word from the word list sets the secret word
  setSecretWord: function(){},
 
  // Takes an array of letters as input and returns an array of two items:
  // 1) A string with the parts of the secret word that have been guessed correctly and underscore for the parts that haven't
  // 2) An array of all the guessed letters that were not in the secret word
  checkLetters: function(guessedLetters){}
};
 
var player = {
  MAX_GUESSES: 8,
  guessedLetters: [],
 
  // Takes a new letter as input and updates the game
  makeGuess: function(letter){},
 
  // Check if the player has won and end the game if so
  checkWin: function(wordString){},
 
  // Check if the player has lost and end the game if so
  checkLose: function(wrongLetters){}
};
 
var game = {
  // Resets the game
  resetGame: function(){},
 
  // Reveals the answer to the secret word and ends the game
  giveUp: function(){},
 
  // Update the display with the parts of the secret word guessed, the letters guessed, and the guesses remaining
  updateDisplay: function(secretWordWithBlanks, guessedLetters, guessesLeft){}
};
 
window.onload = function(){
  // Start a new game
  // Add event listener to the letter input field to grab letters that are guessed
  // Add event listener to the reset button to reset the game when clicked
  // Add event listener to the give up button to give up when clicked
};