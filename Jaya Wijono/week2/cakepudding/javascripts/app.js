var input = '';
var MAX_GUESSES = 8;
var guessedLettersHTML = '';
var wordStringHTML = '';
var dancingBanana = '';
var youWin = '';
var youLose = '';
var revealAnswer = '';
var guessesLeftHTML = '';

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
  checkLetters: function(guessedLetters){
    return [currentGuess(guessedLetters),missedGuess(guessedLetters)];
  }
};
 
var player = {
  guessedLetters: [],
  guessCount: MAX_GUESSES,
 
  // Takes a new letter as input and updates the game
  makeGuess: function(){
    letter = input.value
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
      dancingBanana.style.display = 'inline';
      youWin.style.display = 'inline';
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
    player['guessCount'] = MAX_GUESSES;
    player['guessedLetters'] = [];
    youLose.style.display = 'none';
    dancingBanana.style.display = 'none';
    youWin.style.display = 'none';
    revealAnswer.innerHTML = '';
    game.updateDisplay('', [],MAX_GUESSES);
  },
 
  // Reveals the answer to the secret word and ends the game
  giveUp: function(){
    player.guessCount = 0;
    youLose.style.display = 'inline';
    revealAnswer.innerHTML = 'The answer is: "' + word.secretWord + '"';
    guessesLeftHTML.innerHTML = generateCross(player.guessCount);
  },
 
  // Update the display with the parts of the secret word guessed, the letters guessed, and the guesses remaining
  updateDisplay: function(secretWordWithBlanks, guessedLetters, guessesLeft){
    input.value = '';
    wordStringHTML.innerHTML = secretWordWithBlanks;
    guessedLettersHTML.innerHTML = guessedLetters.join(',');
    guessesLeftHTML.innerHTML = generateCross(player.guessCount);
  }
};

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
 
window.onload = function(){
  input = document.getElementById('letterField');
  guessedLettersHTML = document.getElementById('guessedLetters');
  wordStringHTML = document.getElementById('wordString');
  var giveUpButton = document.getElementById('giveUpButton');
  var resetButton = document.getElementById('resetButton');
  dancingBanana = document.getElementById('dancing_banana');
  youWin = document.getElementById('you_win');
  youLose = document.getElementById('you_lose');
  revealAnswer = document.getElementById('reveal_answer');
  guessesLeftHTML = document.getElementById('guessesLeft');

  // Start a new game
  word.setSecretWord();

  // Add event listener to the letter input field to grab letters that are guessed
  input.addEventListener('keyup',player.makeGuess);

  // Add event listener to the reset button to reset the game when clicked
  resetButton.addEventListener('click',game.resetGame)

  // Add event listener to the give up button to give up when clicked
  giveUpButton.addEventListener('click',game.giveUp)

};
