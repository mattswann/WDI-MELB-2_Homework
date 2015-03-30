// Setting global variables
//-------------------------
var MAX_GUESSES = 8;

// Objects
//------------------------
var word = {
  secretWord: "",
  wordList: ['ruby', 'rails', 'javascript', 'array', 'hash', 'underscore', 'sinatra', 'model', 'controller', 'view', 'devise', 'authentication', 'capybara', 'jasmine', 'cache', 'sublime', 'terminal', 'system', 'twitter', 'facebook', 'function', 'google', 'amazon', 'development', 'data', 'design', 'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route', 'gem', 'deployment', 'database'],
 
  // Selects a random word from the word list sets the secret word
  setSecretWord: function(){
    this.secretWord = _.sample(this.wordList);
  },
 
  // Takes an array of letters as input and returns an array of two items:
  // 1) A string with the parts of the secret word that have been guessed correctly and underscore for the parts that haven't
  // 2) An array of all the guessed letters that were not in the secret word
  checkLetters: function(guessedLetters){
    return [currentGuess(guessedLetters),missedGuess(guessedLetters)];
  }
};
 
var player = {
  guessedLetters: [],
  guessCount: MAX_GUESSES,
 
  // Takes a new letter as input and updates the game
  makeGuess: function(){
    letter = $('#letterField').val();
    if(!(_.contains(player['guessedLetters'],letter)) && player['guessCount'] !== 0){
      player['guessedLetters'] = player['guessedLetters'].concat(letter);
      if(!(_.contains(word.secretWord.split(''),letter))){
          player['guessCount'] = player['guessCount'] - 1;
      }
    }
    player.checkWin();
    player.checkLose();
    game.updateDisplay(word.checkLetters(player['guessedLetters'])[0], player['guessedLetters'], player['guessCount']);
  },
 
  // Check if the player has won and end the game if so
  checkWin: function(){
    if(word.checkLetters(player['guessedLetters'])[0].join('') === word.secretWord){
      $('#dancing_banana').css("display","inline");
      // youWin.style.display = 'inline';
      $('#you_win').css("display","inline");
      // youWin.scrollIntoView();
      $('#you_win')[0].scrollIntoView();
    }
  },
 
  // Check if the player has lost and end the game if so
  checkLose: function(){
    if(player.guessCount === 0){
      game.giveUp();
    }
  }
};
 
var game = {
  // Resets the game
  resetGame: function(){
    word.setSecretWord();
    initialDisplayString = _.map(word.secretWord.split(''), function(item){return item = '_'});
    player['guessCount'] = MAX_GUESSES;
    player['guessedLetters'] = [];
    $('#you_lose').css("display","none");
    $('#dancing_banana').css("display","none");
    $('#you_win').css("display","none");
    $('#reveal_answer').html('');
    game.updateDisplay(initialDisplayString, [],MAX_GUESSES);
  },
 
  // Reveals the answer to the secret word and ends the game
  giveUp: function(){
    player.guessCount = 0;
    $('#you_lose').css("display","inline");
    $('#reveal_answer').html('The answer is: "' + word.secretWord + '"');
    $('#guessesLeft').html(generateCross(player.guessCount));
    $('#you_lose')[0].scrollIntoView();
  },
 
  // Update the display with the parts of the secret word guessed, the letters guessed, and the guesses remaining
  updateDisplay: function(secretWordWithBlanks, guessedLetters, guessesLeft){
    $('#letterField').val('');
    $('#wordString').html(secretWordWithBlanks);
    $('#guessedLetters').html(guessedLetters.join(','));
    $('#guessesLeft').html(generateCross(player.guessCount));
  }
};

// helper functions
//------------------------

function currentGuess(guessedLetters){
  secretWordArray = word.secretWord.split('');
  result = _.map(secretWordArray, function(item){return item = '_'})
  for(var i=0;i<secretWordArray.length;i++){
    if(_.contains(guessedLetters,secretWordArray[i])){
      result[i] = secretWordArray[i];
    }
  }
  return result;
}

function missedGuess(guessedLetters) {
  secretWordArray = word.secretWord.split('');
  result = _.reject(guessedLetters,function(item){ return _.contains(secretWordArray,item)});
  return result;
}

function generateCross(number){
  list = '';
  for(var i=0;i<number;i++){
    list = list+'+';
  }
  return list;
}
 

// After the page finished loading 
//----------------------------------
$(document).ready(function(){

  // Start a new game
  game.resetGame();

  // Add event listener to the letter input field to grab letters that are guessed
  $('#letterField').on('keyup',player.makeGuess);

  // Add event listener to the reset button to reset the game when clicked
  $('#resetButton').on('click',game.resetGame)

  // Add event listener to the give up button to give up when clicked
  $('#giveUpButton').on('click',game.giveUp)

});
