var game = {
  MAX_GUESSES: 8,
  guessedLetters: [],
  secret: [],
  puzzle: [],
  wordList: ['pudding','cake','hodot','cakepudding'],
  setSecret: function(){
    game.secret = _.sample(game.wordList).split('');
  },

  setPuzzle: function(){
    game.puzzle = _.map(game.secret, function(item){return "_"})}

};