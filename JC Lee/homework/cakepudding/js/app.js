var word = {
  secretWord: "",
  wordList: ['ruby', 'rails', 'javascript', 'array', 'hash', 'underscore', 'sinatra', 'model', 'controller', 'view', 'devise', 'authentication', 'capybara', 'jasmine', 'cache', 'sublime', 'terminal', 'system', 'twitter', 'facebook', 'function', 'google', 'amazon', 'development', 'data', 'design', 'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route', 'gem', 'deployment', 'database'],
 
  // Selects a random word from the word list sets the secret word
  setSecretWord: function(){
    this.secretWord = _.sample(this.wordList);
    this.secretArray = _.uniq(_.toArray(this.secretWord));
  },
 
  // Takes an array of letters as input and returns an array of two items:
  // 1) A string with the parts of the secret word that have been guessed correctly and underscore for the parts that haven't
  // 2) An array of all the guessed letters that were not in the secret word
  checkLetters: function(guessedLetters){

    guessedArray = _.toArray(guessedLetters.toLowerCase());
    //console.log(guessedArray);
    correctArray = _.intersection(guessedArray, this.secretArray);
    console.log("correct array = " + correctArray);
    wrongArray = _.difference(guessedArray, this.secretArray);

    //console.log("wrongArray = " + wrongArray);
    console.log("correctArray = " + correctArray);
    

    if(_.size(wrongArray)>0) {
       console.log("i dont have any changes");
    //   console.log("this.wrongArray  = " + this.wrongArray);
    //   console.log("this.wrongArray.length = " + _.size(this.wrongArray));
      if (_.size(this.wrongArray)>0) {
        this.wrongArray = wrongArray.concat(this.wrongArray);
      } else {
        this.wrongArray = wrongArray;
      }
      return false;
    } else {
       console.log("i have new value");
      if (_.size(this.correctArray)>0) {
        this.correctArray = correctArray.concat(this.correctArray);
      } else {
        this.correctArray = correctArray;
      }

      return true;
    }
    
  },
  destroy: function() {
    this.correctArray= [];
    this.wrongArray = [];
  }

};
 
var player = {
  MAX_GUESSES: 8,
  guessedLetters: [],
  wrongGuess: 8,
  // Takes a new letter as input and updates the game
  makeGuess: function(letter){
    
    if(this.wrongGuess > 0) {
      var guess = word.checkLetters(letter);
      var same = _.isEqual(_.sortBy(word.correctArray), _.sortBy(word.secretArray));
      console.log("guess =" + guess);
      if(!guess && !same) {
        console.log("Wrong guess");
        this.wrongGuess -=1;
        game.printToBox(letter, false);
        game.updateDisplay();
        if(this.wrongGuess === 0) {
          this.checkLose();
        }
      } else {
        console.log("correct guess");
        game.printToBox(letter, true);
 
        console.log(same);
        if(same) {
          this.checkWin();
        } 
          
      }
    }  else{
      this.checkLose();
    }
    document.getElementById('letterField').value = "";
  },
 
  // Check if the player has won and end the game if so
  checkWin: function(wordString){
    alert("You have won");
    console.log(word.correctArray);
  },
 
  // Check if the player has lost and end the game if so
  checkLose: function(wrongLetters){
    alert("You have lost with these wrong guesses");
    console.log(word.wrongArray);
  }
};
 
var game = {
  // Resets the game
  resetGame: function(){
    alert('resetting game');
    
    document.getElementById('letterField').value = "";
    document.getElementById('wrongLetters').innerHTML = "";
    document.getElementById('wordString').innerHTML = "";
    document.getElementById('guessesLeft').innerHTML ="";
    console.log("player.MAX_GUESSES = " + player.MAX_GUESSES);
    player.wrongGuess = player.MAX_GUESSES;
    console.log("player.wrongGuess = " + player.wrongGuess);
    word.setSecretWord();
    game.setUpDisplay();
    console.log(this.secretWord);
  },
 
  // Reveals the answer to the secret word and ends the game
  giveUp: function() { 
    this.resetGame();
    alert('Answer is ' + word.secretWord);
    
  },
 
  // Update the display with the parts of the secret word guessed, the letters guessed, and the guesses remaining
  updateDisplay: function(secretWordWithBlanks, guessedLetters, guessesLeft){
    document.getElementById('guessesLeft').innerHTML = player.wrongGuess.toString();
  },
  setUpDisplay: function() {
    document.getElementById('guessesLeft').innerHTML = player.MAX_GUESSES.toString();
    _.times(_.size(word.secretWord), function (num) {
      var html = "<span class='letter box' id='letter"+(num+1)+"'>";
      html += "</span>";
      document.getElementById('wordString').innerHTML += html;
    });

    _.times(8, function(num) {
      var html = "<span class='letter wrong' id='wrong"+(num+1)+"'>";
      html += "</span>";
      document.getElementById('wrongLetters').innerHTML += html;
    });
  },
  printToBox: function(letter, correct) {
    if(correct === true) {
      var array = _.toArray(word.secretWord);
      _.times(_.size(array), function (num) {
        if(array[num] === letter ) {
          var letterName = "letter" + (num+1).toString();
          document.getElementById(letterName).innerHTML = letter.toUpperCase();
        }
      });
    } else {
      var sizeWrong = _.size(word.wrongArray);
      //console.log(sizeWrong);
      var name = "wrong"+ sizeWrong.toString()
      document.getElementById(name).innerHTML = letter.toUpperCase();
    }
    
    
  }

};
 
window.onload = function(){
  // Start a new game
  word.setSecretWord();
  console.log(word.secretWord);
  console.log("secret word = " + this.secretWord);
  game.setUpDisplay();
  
  // events - keypress, keyup, keydown, click, change
  // Add event listener to the letter input field to grab letters that are guessed
  var input = document.getElementById('letterField');
  input.addEventListener('keyup', function(e) { 
    var key = e.keyCode;
    if ((key >= 65 && key <= 90) || (key >= 95 && key <= 122)) {
      player.makeGuess(input.value);
    }
   });

  // Add event listener to the reset button to reset the game when clicked
  var reset = document.getElementById('resetButton');
  reset.addEventListener('click', game.resetGame);

  // Add event listener to the give up button to give up when clicked
  var giveup = document.getElementById('giveUpButton');
  giveup.addEventListener('click', game.giveUp);
};