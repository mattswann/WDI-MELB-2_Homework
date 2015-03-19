// create the dom-->variable binding
var domBinds = {
  guessLabel: document.getElementById('prevGuessLetter'),
  giveUpButton: document.getElementById('giveUpButton'),
  resetButton: document.getElementById('resetButton'),
  guessesLeftLabel: document.getElementById('guessesLeft'),
  lettersGuessed: document.getElementById('guessedLetters'),
  wordString: document.getElementById('wordString')
}

var word = {
  secretWord: "",
  secretWordArray: [],
  wordList: ['ruby', 'rails', 'javascript', 'array', 'hash', 'underscore',
    'sinatra', 'model', 'controller', 'view', 'devise', 'authentication',
    'capybara', 'jasmine', 'cache', 'sublime', 'terminal', 'system', 'twitter',
    'facebook', 'function', 'google', 'amazon', 'development', 'data', 'design',
    'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route',
    'gem', 'deployment', 'database'
  ],

  setSecretWord: function(){
    this.secretWord      = _.sample(word.wordList).toUpperCase();
    this.secretWordArray = this.secretWord.split("");
  },

  letterInWord: function(letter) {
    return _.contains(this.secretWordArray, letter);
  },

  checkLetters: function(guessedLetters){
    // check if each letter in secret word is in the guessed array;
    //    if found     - return the letter
    //    if not found - return a dash
    var result = _.map(this.secretWordArray, function(letter){
      if (_.contains(guessedLetters, letter))
        return letter;
      else
        return "-";
    });
    return result.join("");
  }
};

var player = {
  MAX_WRONG_GUESSES: 8,
  wrongGuesses: 0,
  guessedLetters: [],

  makeGuess: function(letter){
    // process guess if button pressed within allowed alphabet
    if (game.ALLOWED_LETTERS.indexOf(letter) > -1) {
      game.updateDisplay(letter);

      // if letter not already guessed, add to guessedLetters
      if (this.guessedLetters.indexOf(letter) === -1) {

        // increment wrongGuesses
        if (!word.letterInWord(letter)) {
          this.wrongGuesses++;
          this.checkLose();
        }

        this.guessedLetters.push(letter);
        game.currentWord = word.checkLetters(this.guessedLetters);
      }
    }
  },

  checkWin: function(wordString){
    console.log("winwin");
  },

  checkLose: function(wrongLetters){
    console.log("losers");
  }
};

var game = {
  ALLOWED_LETTERS:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  currentWord: "",

  resetGame: function(){
    word.setSecretWord();
    console.log("reset game");
  },

  giveUp: function(){
    console.log("You gave up");
  },

  updateDisplay: function(letter, wrongGuesses) {
    if (this.ALLOWED_LETTERS.indexOf(letter) > -1) {
      domBinds.guessLabel.innerHTML = letter;
    }
    domBinds.guessesLeftLabel.innerHTML = player.MAX_WRONG_GUESSES - player.wrongGuesses;
    domBinds.lettersGuessed.innerHTML = player.guessedLetters;
    domBinds.wordString.innerHTML = this.currentWord;
  }
};

function eventListeners() {
  // Found keyboard solution at:
  // http://stackoverflow.com/a/17015116/2355035
  window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    key = String.fromCharCode(key);
    if (e.keyCode === 13) {
      player.makeGuess(domBinds.guessLabel.innerHTML);
      player.checkWin();
      player.checkLose();
    }
    game.updateDisplay(key);
  }

  domBinds.giveUpButton.addEventListener('click', game.giveUp);
  domBinds.resetButton.addEventListener('click', game.resetGame);
}

// Start a new game on load
game.resetGame();
eventListeners();
