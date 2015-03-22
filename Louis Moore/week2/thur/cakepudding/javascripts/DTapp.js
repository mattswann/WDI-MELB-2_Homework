var game = {
  
  MAX_GUESSES: 8,
  guessedLetters: [],
  secret: [],
  puzzle: [],

  wordList: ['json', 'ruby', 'javascript', 'python', 'git', 'jquery', 'html'],

  init: function(){
    game.setSecret();
    game.setPuzzle();    
  },
  ///DONE
  setSecret: function() {
    game.secret = _.sample(game.wordList).split('');
  },

  setPuzzle: function() {
    game.puzzle = Array(game.secret.length+1).join('_').split('');
  },

  guessesLeft: function() {
    return game.MAX_GUESSES - game.guessedLetters.length;
  },

  //pass in a letter from input
  guess: function(letter) {
    this.guessedLetters.push(letter)

 
    _.each(this.secret, function(secretLetter, index){
      console.log('secretLetter:', secretLetter);
      console.log('index' index)

      if (secretLetter === letter){
        game.puzzle[index] = letter;
      };
    })

  }

};


window.onload = function() {

  game.init();

  var wordString = document.getElementById('wordString');
  wordString.innerHTML = game.puzzle;

  var guessesLeft = document.getElementById('guessesLeft');
  guessesLeft.innerHTML = game.guessesLeft();

  var letterField = document.getElementById('letterField');
  letterField.addEventListener('keyup', function(event) {
    //get the value of the input box when we press enter 

    if (event.keyCode === 13) {
      var inputValue = this.value;
      //make the guess
      game.guess(inputValue);
      // coear the input box
      this.value = '';
      //update the screen
      guessesLeft.innerHTML = game.guessesLeft();
    }
  });
}