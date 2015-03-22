//-----------------------------------------------------------------
// Constants and Globals
//-----------------------------------------------------------------

var ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

//-----------------------------------------------------------------
// Helper Functions
//-----------------------------------------------------------------

// Found this at;
// http://stackoverflow.com/a/13778494/2355035
function getCssProperty(elmId, property){
   var elem = document.getElementById(elmId);
   return window.getComputedStyle(elem,null).getPropertyValue(property);
}

function domKeyBind(letter) {
  if (game.containsLetter(letter)) {
    DOMBind.keyBox(letter).addEventListener('click', function(e) {
      DOMBind.keyBox(letter).className += " crystal-box";
      game.guessLetter(letter);
    });
  } else {
    DOMBind.keyBox(letter).addEventListener('click', function(e) {
      DOMBind.keyBox(letter).className += " lava-box";
      game.guessLetter(letter);
      var creeperPos = parseInt(getCssProperty('creeper-image', 'left'));
      var newCreeperPos = (creeperPos - 100).toString() + "px";
      DOMBind.creeperImage.style.left = newCreeperPos;
    });
  }
}

//-----------------------------------------------------------------
// Objects
//-----------------------------------------------------------------

// create dom-->variable bindings
var DOMBind = {
  guessLabel:       document.getElementById('guess-box'),
  curLetter:        document.getElementById('letter-box'),
  wordString:       document.getElementById('word-box'),
  creeperImage:     document.getElementById('creeper-image'),

  keyBox: function(character) {
    return document.getElementById("key-box-" + character);
  }
}

var game = {
  MAX_WRONG_GUESSES: 8,
  EMPTY_CHAR: " - ",
  currentGuesses: 0,
  secretWord: '',
  secretWordArray: [],
  guessedLetters: [],
  wordList: ['ruby', 'rails', 'javascript', 'array', 'hash', 'underscore',
    'sinatra', 'model', 'controller', 'view', 'devise','capybara', 'jasmine',
    'cache', 'sublime', 'terminal', 'system', 'twitter','facebook', 'function',
    'google', 'amazon', 'development', 'data', 'design', 'inheritance',
    'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route','gem',
    'deployment', 'database'
  ],

  setSecretWord: function() {
    this.secretWord      = _.sample(this.wordList).toUpperCase();
    this.secretWordArray = this.secretWord.split("");
  },

  guessLetter: function(letter) {
    this.guessedLetters.push(letter);
    if (!this.containsLetter(letter)) {
      this.currentGuesses += 1;
      DOMBind.guessLabel.innerHTML = this.remainingGuesses();
    } else {
      DOMBind.wordString.innerHTML = this.checkLetters(this.guessedLetters);
    }
  },

  remainingGuesses: function() {
    return this.MAX_WRONG_GUESSES - this.currentGuesses;
  },

  containsLetter: function(letter) {
    return _.contains(game.secretWordArray, letter);
  },

  checkLetters: function(guessedLetters){
    // check if each letter in secret word is in the guessed array;
    //    if found     - return the letter
    //    if not found - return a dash
    var result = _.map(this.secretWordArray, function(letter){
      if (_.contains(guessedLetters, letter)) { return letter + " "; }
      else { return game.EMPTY_CHAR; }
    });
    return result.join("");
  },

  init: function() {
    this.setSecretWord();
    ALPHABET.forEach(domKeyBind);
    DOMBind.guessLabel.innerHTML = this.MAX_WRONG_GUESSES;
    DOMBind.curLetter.innerHTML = "-";
    DOMBind.wordString.innerHTML = this.checkLetters(this.guessedLetters);
  }
}

game.init();

//-----------------------------------------------------------------
// Manual/Stupid Stuff
//-----------------------------------------------------------------

// clicking on the creeper turns it into a cool-dude!
DOMBind.creeperImage.addEventListener('click', function(){
  var oldImage = DOMBind.creeperImage.src;
  var newImage = "img/creeper_boom.gif";
  DOMBind.creeperImage.src = newImage;
  window.setTimeout(function() {
    DOMBind.creeperImage.src = oldImage;
  }, 2500);
});
