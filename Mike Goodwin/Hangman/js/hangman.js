var word = {
    secretWord: "",
    secretWordHidden: "",
    wordList: ['ruby', 'rails', 'javascript', 'array', 'hash', 'underscore', 'sinatra', 'model', 'controller', 'view', 'devise', 'authentication', 'capybara', 'jasmine', 'cache', 'sublime', 'terminal', 'system', 'twitter', 'facebook', 'function', 'google', 'amazon', 'development', 'data', 'design', 'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route', 'gem', 'deployment', 'database'],

    validLetters: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],

    validLetter: function(ltr) {
        return _.contains(this.validLetters, ltr);
    },

    // Selects a random word from the word list sets the secret word
    setSecretWord: function() {
        this.secretWord = _.sample(this.wordList);
        this.secretWordHidden = "_".repeat(this.secretWord.length);
    },

    // Takes an array of letters as input and returns an array of two items:
    // 1) A string with the parts of the secret word that have been guessed correctly and underscore for the parts that haven't
    // 2) An array of all the guessed letters that were not in the secret word
    checkLetters: function(guessedLetters) {
        var output = [];
        var answer = "";
        var secretArray = this.secretWord.split("");

        // For each letter in the secret word, identify if it is in the list of guessed letters
        _.each(secretArray,function(ltr) {
            var x = _.find(guessedLetters, function(guess) {
                return ltr === guess;
            });

            x === undefined ? answer+= "_" : answer += ltr;
        });
        output.push(answer);

        // Create array of guessed letters not in secret word
        var wrongGuesses = _.difference(guessedLetters,secretArray); 
        output.push(wrongGuesses);

        return output;
    }
};

var player = {
    MAX_GUESSES: 8,
    guessedLetters: [],

    // Takes a new letter as input and updates the game
    makeGuess: function(letter) {
        this.guessedLetters.push(letter);
        var arr = word.checkLetters(this.guessedLetters);
        game.updateDisplay(arr[0],arr[1],(this.MAX_GUESSES - arr[1].length));
        this.checkLose(arr[1].length);
        this.checkWin(arr[0]);
    },

    // Check if the player has won and end the game if so
    checkWin: function(wordString) {
        if (wordString === word.secretWord) {
            document.getElementById("userMsg").innerHTML = "Congratulations! You guessed correctly.";
            _.delay(game.resetGame,3000);
        }
    },

    // Check if the player has lost and end the game if so
    checkLose: function(wrongLetters) {
        if (wrongLetters === this.MAX_GUESSES) {
            document.getElementById("userMsg").innerHTML = "I'm sorry, but you didn't guess correctly. Better luck next time.";
            game.giveUp();
        }
    }
};

var game = {
    // Resets the game
    resetGame: function() {
        word.setSecretWord();
        player.guessedLetters = [];
        game.updateDisplay(word.secretWordHidden,[],player.MAX_GUESSES);
    },

    // Reveals the answer to the secret word and ends the game
    giveUp: function() {
        document.getElementById("wordString").innerHTML = word.secretWord;
        _.delay(game.resetGame,3000);
    },

    // Update the display with the parts of the secret word guessed, the letters guessed, and the guesses remaining
    updateDisplay: function(secretWordWithBlanks, guessedLetters, guessesLeft){
        // debugger;
        document.getElementById("wordString").innerHTML = secretWordWithBlanks.split("").join(" ");
        document.getElementById("guessedLetters").innerHTML = guessedLetters.join(" ");
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        document.getElementById("letterField").value = "";
        document.getElementById("userMsg").innerHTML = "";

    }
};

window.onload = function() {
    // Start a new game
    game.resetGame();
    
    var letterField = document.getElementById("letterField");

    // Add event listener to the letter input field to grab the first letter guessed
    letterField.addEventListener("keyup",function(){
        if (enterPressed(event)) {
            var ltr = letterField.value.toLowerCase().charAt(0);

            if (word.validLetter(ltr)) {
                player.makeGuess(ltr);
            } else {
                document.getElementById("userMsg").innerHTML = "Please enter a valid letter (a-z, A-Z)";
            }
        }
    });

    // Add event listener to the reset button to reset the game when clicked
    document.getElementById("resetButton").addEventListener("click",game.resetGame);
    
    // Add event listener to the give up button to give up when clicked
    document.getElementById("giveUpButton").addEventListener("click",game.giveUp);

    function enterPressed(e){
        return (e.keyCode === 13) || false;
    }
};