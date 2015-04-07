//-----------------------------------------------------------------
// Constants and Globals
//-----------------------------------------------------------------

var ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

//-----------------------------------------------------------------
// Helper Functions
//-----------------------------------------------------------------

// This function is intended to smooth the motion of the creeper
// TODO: complete it (it is not completed or even working)
function creeperMotion($element) {
  var guessesRemaining = game.remainingGuesses();
  var creeperPos       = $element.position();
  var totalTime        = 2000;
  var frames           = 60;
  window.setTimeout()

  console.log(creeperPos.left / guessesRemaining);
}

// Found this at;
// http://stackoverflow.com/a/13778494/2355035
function getCssProperty(elmId, property){
   var elem = document.getElementById(elmId);
   return window.getComputedStyle(elem,null).getPropertyValue(property);
}

function domKeyBind(letter) {
  if (game.containsLetter(letter)) {
    sel.$keyBox(letter).on('click', function(e) {
      $(this).addClass('crystal-box');
      game.guessLetter(letter);
    });
  } else {
    sel.$keyBox(letter).on('click', function(e) {
      $(this).addClass('lava-box');
      var moveResolved = game.guessLetter(letter);

      // moveResolved will ONLY be true when guesses has reduced
      if (moveResolved === true) {

        // move creeper across the screen
        var creeperPos = parseInt(getCssProperty('creeper-image', 'left'));
        var newCreeperPos = (creeperPos - 100).toString() + "px";
        sel.$creeperImage.css('left', newCreeperPos);

        // make creeper explode when guesses are at zero
        if (game.remainingGuesses() === 0) {
          sel.$playerImage.css('display', 'none');
          sel.$creeperImage.attr('src', "img/explosion.gif");
          window.setTimeout(function() {
            sel.$creeperImage.css('display', 'none');
          }, 800);
        }
      }
    });
  }
}

//-----------------------------------------------------------------
// Objects
//-----------------------------------------------------------------

// jqueryselectors
var sel = {
    $guessLabel:   $('#guess-box'),
    $curLetter:    $('#letter-box'),
    $wordString:   $('#word-box'),
    $creeperImage: $('#creeper-image'),
    $playerImage:  $('#player-image'),

    $keyBox: function(character) {
      var selector = "#key-box-" + character;
      return $(selector);
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
    // return early if letter already guessed
    if (_.contains(this.guessedLetters, letter)) {
      console.log(this.guessedLetters, letter);
      return;
    }

    this.guessedLetters.push(letter);
    sel.$curLetter.html(letter);

    if (!this.containsLetter(letter)) {
      this.currentGuesses += 1;
      sel.$guessLabel.html(this.remainingGuesses());
    } else {
      sel.$wordString.html(this.checkLetters(this.guessedLetters));
    }
    return true;
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
    sel.$guessLabel.html(this.MAX_WRONG_GUESSES);
    sel.$curLetter.html("-");
    sel.$wordString.html(this.checkLetters(this.guessedLetters));
  }
}

game.init();

//-----------------------------------------------------------------
// Manual/Stupid Stuff
//-----------------------------------------------------------------

// clicking on the creeper turns it into a cool-dude!
sel.$creeperImage.on('click', function(){
  var oldImage = sel.$creeperImage.attr("src");
  var newImage = "img/creeper_boom-test.gif";
  sel.$creeperImage.attr("src", newImage);
  window.setTimeout(function() {
    sel.$creeperImage.attr("src", oldImage)
  }, 2500);
  creeperMotion(sel.$creeperImage);
});
