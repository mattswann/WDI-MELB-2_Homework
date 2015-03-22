// create the dom-->variable binding
var DOMBind = {
  guessLabel: document.getElementById('prevGuessLetter'),
  giveUpButton: document.getElementById('giveUpButton'),
  resetButton: document.getElementById('resetButton'),
  guessesLeftLabel: document.getElementById('guessesLeft'),
  lettersGuessed: document.getElementById('guessedLetters'),
  wordString: document.getElementById('wordString'),
  charBox: function(character) {
    return this.document.getElementById("char-box-" + character);
  }
}

var word = {
  EMPTY_CHAR: "-",
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
      if (_.contains(guessedLetters, letter)) { return letter; }
      else { return word.EMPTY_CHAR; }
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
        }
        this.guessedLetters.push(letter);
        game.currentWord = word.checkLetters(this.guessedLetters);
      }
    }
  },

  checkWin: function(wordString){
    if (!_.contains(wordString, word.EMPTY_CHAR))
      console.log("Congrats you win lol.");
  },

  checkLose: function(wrongLetters){
    if (this.MAX_WRONG_GUESSES - this.wrongGuesses === 0) {
      console.log("You lost and are bad.");
      game.resetGame();
    }
  }
};

var game = {
  ALLOWED_LETTERS:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  currentWord: "",

  resetGame: function(){
    word.setSecretWord();
    player.wrongGuesses = 0;
    player.guessedLetters = [];
    game.currentWord = "";
    console.log("reset game");
    game.init()
  },

  giveUp: function(){
    console.log("You gave up");
    DOMBind.wordString.innerHTML = word.secretWord;
  },

  updateDisplay: function(letter, wrongGuesses) {
    if (this.ALLOWED_LETTERS.indexOf(letter) > -1) {
      DOMBind.guessLabel.innerHTML = letter;
    }
    DOMBind.guessesLeftLabel.innerHTML = player.MAX_WRONG_GUESSES - player.wrongGuesses;
    DOMBind.lettersGuessed.innerHTML = player.guessedLetters;
    DOMBind.wordString.innerHTML = this.currentWord;
  },

  init: function() {
    // Found keyboard solution at:
    // http://stackoverflow.com/a/17015116/2355035
    window.onkeyup = function(e) {
      var key = e.keyCode ? e.keyCode : e.which;
      key = String.fromCharCode(key);
      if (e.keyCode === 13) {
        player.makeGuess(DOMBind.guessLabel.innerHTML);
        player.checkWin(game.currentWord);
        player.checkLose();
      }
      game.updateDisplay(key);
    }
    DOMBind.wordString.innerHTML = word.checkLetters(player.guessedLetters);
    DOMBind.giveUpButton.addEventListener('click', game.giveUp);
    DOMBind.resetButton.addEventListener('click', game.resetGame);

    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    _.each(alphabet, function(letter) {
      DOMBind.charBox.call(this, letter).addEventListener('click', function(){
        player.makeGuess(letter);
        player.checkWin(game.currentWord);
        player.checkLose();
        game.updateDisplay(letter);
      });
    });
    game.updateDisplay(letter);
  }
};

// Start a new game on load
game.resetGame();
game.init();
