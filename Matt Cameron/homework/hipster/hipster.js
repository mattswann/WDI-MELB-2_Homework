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
    cray: ['"My ex-boyfriend was',"I don't know how I dated him for six weeks!"],
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
      bubble.innerHTML = "You're a true hipster, but like <i>whatever</i> man.";
      return true;
    }
  },

  // Check if the player has lost and end the game if so
  checkLose: function(){
    if (player.guessesLeft === 0) {
      game.giveUp();
      return true;
    }
  }
};

var game = {
  // Resets the game
  resetGame: function(){
    player.guessesLeft = 8;
    word.blankWord = [];
    word.guessedLetters = [];
    word.wrongLetters = [];
    word.setSecretWord();
    game.updateDisplay();

  },

  // Reveals the answer to the secret word and ends the game
  giveUp: function(){
    wordString.innerHTML = word.secretWord;
      bubble.innerHTML = "Get the hell out of here, you're not a hipster at all!";
      player.guessesLeft = 0;
      game.updateDisplay();
      game.resetGame();
  },
  // Update the display with the parts of the secret word guessed, the letters guessed, and the guesses remaining
  updateDisplay: function() {
    displayGuesses.innerHTML = player.guessesLeft;
    wordString.innerHTML = word.blankWord.join("");
    usedLetters.innerHTML = word.wrongLetters.join(" ");

    if (player.checkLose()) {
      this.giveUp
    }
    player.checkWin();
  }
};


function lookupKeyCode(keyCode) {
    return keyCodes[keyCode-65];
}

var keyCodes = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// HTML stuff
var input = document.body;
input.addEventListener('keyup', function(event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    var actualLetter = lookupKeyCode(event.keyCode)
    player.makeGuess(actualLetter);
  }
});

var giveUpButton = document.getElementById("giveUpButton");
giveUpButton.addEventListener('click', game.giveUp);

var resetButton = document.getElementById("resetButton");
resetButton.addEventListener('click', game.resetGame);

var bubble = document.getElementById("bubble");

var displayGuesses = document.getElementById("guessesLeft");
displayGuesses.innerHTML = 8;

var usedLetters = document.getElementById("guessedLetters");

var wordString = document.getElementById("wordString");

var beforeAfterSecret = document.getElementsByClassName("beforeAfterSecret");


// set Secret word and set up basics on load
word.setSecretWord();


