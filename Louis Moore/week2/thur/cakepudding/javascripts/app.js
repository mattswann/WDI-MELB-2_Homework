var word = {
    secretWord: [],
    guessedLetters: [],
    puzzle: [],

    wordList: ['ruby', 'rails', 'javascript', 'array', 'hash', 'underscore', 'sinatra', 'model', 'controller', 'view', 'devise', 'authentication', 'capybara', 'jasmine', 'cache', 'sublime', 'terminal', 'system', 'twitter', 'facebook', 'function', 'google', 'amazon', 'development', 'data', 'design', 'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route', 'gem', 'deployment', 'database'],

    setSecretWord: function() {
        this.secretWord = _.sample(word.wordList).split('');
    },

    setPuzzle: function() {
        this.puzzle = Array(this.secretWord.length + 1).join('_').split('');
    },

    checkLetters: function(input) {
        word.guessedLetters.push(input)

        _.each(word.secretWord, function(secretLetter, index) {
            if (secretLetter === input) {
                word.puzzle[index] = input;
                wordString.innerHTML = word.puzzle;
            };
        })
    }
};

var player = {
    MAX_GUESSES: 8,
    guessedLetters: [],
};

var game = {
    resetGame: function() {
        game.updateGuessesLeft(8);
        word.setSecretWord();
        word.setPuzzle();
        wordString.innerHTML = word.puzzle;
    },

    giveUp: function() {},

    updateGuessedLetters: function(guessedLetters) {
        return word.guessedLetters
    },
    updateGuessesLeft: function(guessesLeft) {
        return player.MAX_GUESSES - word.guessedLetters.length + _.without(word.puzzle, "_").length; 
        } 
};

function printMessage() {
    console.log("something");
}


window.onload = function() {

    word.setSecretWord();
    word.setPuzzle();

    var guessedLetters = document.getElementById('guessedLetters');
    guessedLetters.innerHTML = word.guessedLetters;

    var wordString = document.getElementById('wordString');
    wordString.innerHTML = word.puzzle;

    var guessesLeft = document.getElementById('guessesLeft');
    guessesLeft.innerHTML = player.MAX_GUESSES;

    var resetButton = document.getElementById('resetButton');
    resetButton.addEventListener("click", game.resetGame);

    var input = document.getElementById('letterField');
    input.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
            var inputValue = input.value
                //make the guess
            word.checkLetters(inputValue);
            //clear the input box
            this.value = '';
            // update the screen
            guessedLetters.innerHTML = game.updateGuessedLetters();
            guessesLeft.innerHTML = game.updateGuessesLeft();
        }
    })
};