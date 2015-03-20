var word = {
  secretWord: "",
  hipsterWordList: {
    amazeballs: ['"OMG, that new haircut is"',""],
    totes: ['"Dude, we should','get matching suspenders!"'],
    awks: ['"Holy crap, it was totes','when I saw a hobo wearing the same coat as me last week."'],
    devo: ['"I was ','after my gluten-free cat died."'],
    bin: ['"I\'m so hungry, I need to put something in my ',""],
    whatevs: ['"And I was like', 'man"'],
    yolo: ['"I almost didn\'t go Gelato Messina last week, but then I was like, ',""],
    cray: ['"That new barrista is absolutely "',""],
    froff: ['"Dude we should grab a ','after your backwax"'],
    threads: ['"Got me some killer new','at Savers yesterday"'],
    messina: ['"The icecream at ','is soooo much better than 7 Apples"'],
    dope: ['"Picked up a ','fedora for my grandpa\'s funeral next week"'],
    fixie: ['"I\'ll just swing past on my','and we can get some delicious organic, gluten-free, kale."']
},

  setSecretWord: function(){
    // Selects a random word from the word list sets the secret word
    word.secretWord = _.sample(_.keys(word.hipsterWordList));

    // set blankWord and display it
    _.each(word.secretWord, word.createBlankWord);
    wordString.innerHTML = word.blankWord.join("");

    // set before and after sentence
    beforeAfterSecret[0].innerHTML = word.hipsterWordList[word.secretWord][0];
    beforeAfterSecret[1].innerHTML = word.hipsterWordList[word.secretWord][1];
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
      spoiler[0].innerHTML = "You're a true hipster,";
      spoiler[1].innerHTML = "but like whatever man.";
      return true;
    }
  },

  // Check if the player has lost and end the game if so
  checkLose: function(wrongLetters){
    if (player.guessesLeft === 0) {
      spoiler[0].innerHTML = "Get the hell out of here,";
      spoiler[1].innerHTML = "you're not a hipster at all!";
      return true;
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
    usedLetters.innerHTML = word.wrongLetters.join(" ");

    if (player.checkLose()) {
      wordString.innerHTML = word.secretWord;
    }
    player.checkWin();
  }
};

function validateInput(letter) {
  var objRegExp  = /^[a-z]+$/;
  return objRegExp.test(letter);
}



// HTML stuff
var input = document.getElementById("letterField");
input.focus();
input.addEventListener('keyup', function(event) {

if (event.keyCode >= 65 && event.keyCode <= 90) {
    player.makeGuess(input.value);
 }
  input.value = "";
});

var giveUpButton = document.getElementById("giveUpButton");
giveUpButton.addEventListener('click', game.giveUp);

var resetButton = document.getElementById("resetButton");
resetButton.addEventListener('click', game.resetGame);

var spoiler = document.getElementsByClassName("spoiler");

var displayGuesses = document.getElementById("guessesLeft");
displayGuesses.innerHTML = 8;

var result = document.getElementById("result");

var usedLetters = document.getElementById("guessedLetters");

var wordString = document.getElementById("wordString");

var beforeAfterSecret = document.getElementsByClassName("beforeAfterSecret");


// set Secret word and set up basics on load
word.setSecretWord();









