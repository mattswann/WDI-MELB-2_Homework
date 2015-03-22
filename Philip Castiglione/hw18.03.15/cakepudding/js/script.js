// define globals
var secretWord = [];
var guessedChars = [];
var maxGuesses = 0;
var currentGuesses = 0;
var highScore = 0;
var currentScore = 0;

var sound = {
  soundOn: true,
  timerMS: 3000,
  soundScapeTimer: '',
  soundScape: function() {},
  soundScapeSounds: [],
  gameSounds: {},
  gameMusic: ''
}

// prepare buttons to run game once loaded and begin soundscape
window.onload = function() {
  document.getElementById('play').addEventListener('click', initGame);
  document.getElementById('pause').addEventListener('click', pauseGame);
  document.getElementById('forfeit').addEventListener('click', lose);
  document.getElementById('sound').addEventListener('click', toggleSound);
  // sounds
}

function toggleSound() {
  if (sound.soundOn) {
    sound.soundOn = false;
  } else {
    sound.soundOn = true;
  }
}

// initialise variables and viewport for game
function initGame() {
  secretWord = getSpaceWord();
  guessedChars = [' '];
  maxGuesses = getMaxGuesses();
  currentGuesses = maxGuesses;
  
  document.getElementById('play').removeEventListener('click', initGame);
  document.getElementById('play').classList.toggle('inactive');
  
  document.getElementById('in_game').classList.toggle('hide');
  renderGuessingWord();
  renderPrettyRandom();

  document.getElementById('game_wrapper').classList.toggle('hide');
  document.getElementById('alphabet').innerHTML = "Press a letter on your keboard to begin!";
  document.getElementById('blork_div').style.marginLeft = '2%';
  document.getElementById('blork_div').style.marginRight = '60%';
  document.getElementById('spaceman1').style.display = 'inline';
  document.getElementById('spaceman2').style.display = 'none';
  document.getElementById('spaceman1').style.marginLeft = '0%';

  currentScore = 0;
  renderCurrentScore();
  renderGameAnimationWrapper("none","","block");
  
  window.addEventListener('keyup', runGuess);
}

// returns random word from spaceWords array
function getSpaceWord() {
  var word = _.sample(spaceWords);
  return word.split('');
}

// returns validated number of guesses entered by user, or defaults to 8
function getMaxGuesses() {
  var guesses = document.getElementById('max_chances').value;
  if (Number.isNaN(parseInt(guesses, 10)) || parseInt(guesses, 10) < 1) {
    guesses = 8;
  }
  return parseInt(guesses, 10);
}

// renders random pretty chars for user while game console transitions
// also ensures console line width is preloaded correctly
function renderPrettyRandom() {
  var charPrettyHTML = document.getElementById('char_pretty');
  charPrettyHTML.innerHTML = _.sample(acceptedChars).toUpperCase();
  var displayCount = 30; // modify this value to influence duration

  function displayRandom() {
    charPrettyHTML.innerHTML = _.sample(acceptedChars).toUpperCase();
    displayCount--;
    if (!displayCount) {
      clearInterval(prettyTimer);
      charPrettyHTML.innerHTML = ":";
    }
  }
  var prettyTimer = setInterval(displayRandom, 50);
}

// activated by pause button; terminates input on keyup and swaps pause for unpause
function pauseGame() {
  window.removeEventListener('keyup', runGuess);
  document.getElementById('pause').innerHTML = 'UNPAUSE';
  document.getElementById('pause').removeEventListener('click', pauseGame);
  document.getElementById('pause').addEventListener('click', continueGame);
  renderGameAnimationWrapper("block","PAUSED","none");
}

// toggles display of overlay (and text for overlay) and/or wrapper
function renderGameAnimationWrapper(overlayDisplay, overlayHTML, wrapperDisplay) {
  var overlay = document.getElementById('overlay');
  overlay.style.display = overlayDisplay;
  overlay.innerHTML = overlayHTML;
  var wrapper = document.getElementById('game_wrapper');
  wrapper.style.display = wrapperDisplay;
}

// activated by unpause button; re-initiates input on keyup and swaps unpause for pause
function continueGame() {
  window.addEventListener('keyup', runGuess);
  document.getElementById('pause').innerHTML = 'PAUSE';
  document.getElementById('pause').removeEventListener('click', continueGame);
  document.getElementById('pause').addEventListener('click', pauseGame);
  renderGameAnimationWrapper("none","","block");
}

// activated on win/loss/forfeit; terminates input on keyup and restarts visual display
function resetGame() {
  window.removeEventListener('keyup', runGuess);
  document.getElementById('play').addEventListener('click', initGame);
  document.getElementById('play').classList.toggle('inactive');
  document.getElementById('in_game').classList.toggle('hide');
  renderGameAnimationWrapper("none","","none");
  document.getElementById('alphabet').innerHTML = "";
  document.getElementById('spaceman2').style.display = "none";
}

// activated on keyup; executes game round
function runGuess() {
  var guessedChar = acceptedChars[event.which - 65];
  if (!validateChar(guessedChar)) {return;}
  if (checkAlreadyGuessed(guessedChar)) {return;}
  
  renderCharPretty(guessedChar);
  addGuessedChar(guessedChar);
  renderGuessedAlphabet(guessedChar);
  renderGuessingWord();
  
  if (!checkGuessedChar(guessedChar)) {
    currentGuesses--;
    renderLosingImage();
  }
  updateCurrentScore();
  renderCurrentScore();
  checkWinLoss();
}

// validates input
function validateChar(character) {
  return acceptedChars.indexOf(character) !== -1;
}

// checks if input already guessed
function checkAlreadyGuessed(character) {
  return guessedChars.indexOf(character) !== -1;
}

// renders character guessed for user with animation
function renderCharPretty(character) {
  var charPrettyHTML = document.getElementById('char_pretty');
  charPrettyHTML.innerHTML = character.toUpperCase();
  setTimeout(toggleHighlight,150);
  setTimeout(toggleHighlight,900);
  function toggleHighlight() {
    charPrettyHTML.classList.toggle('highlight');
  }
}

// renders alphabet for user, showing what is already guessed
function renderGuessedAlphabet() {
  var alphabetHTML = document.getElementById('alphabet');
  var guessedDisplay = [];
  _.each(acceptedChars, function(acceptedChar) {
    if (guessedChars.indexOf(acceptedChar) === -1) {
      guessedDisplay.push(acceptedChar.toUpperCase());
    } else {
      guessedDisplay.push("<span class='guessed'>" + acceptedChar.toUpperCase() + "</span>");
    }
  });
  alphabetHTML.innerHTML = guessedDisplay.join(" ");
}

// adds guessed char to array
function addGuessedChar(character) {
  guessedChars.push(character);
}

// checks if guessed car in secret word
function checkGuessedChar(character) {
  return secretWord.indexOf(character) !== -1;
}

// renders secret word showing correctly guessed characters
function renderGuessingWord() {
  var shownWord = [];
  var secretWordHTML = document.getElementById('secret_word');
  for (i in secretWord) {
    if (guessedChars.indexOf(secretWord[i]) !== -1) {
      shownWord.push(secretWord[i].toUpperCase());
    } else {
      shownWord.push('_');
    }
    shownWord.push('&nbsp;'); // spaces chars out
  }
  secretWordHTML.innerHTML = shownWord.join('');
}

// renders 'miss' animation for user based on max and current guesses
function renderLosingImage() {
  blorkRotate(30);

  var marginLeft = 2;
  var marginRight = 60;
  var moveDistance = 62 / maxGuesses;
  var moveMultiple = maxGuesses - currentGuesses;
  marginLeft += moveDistance * moveMultiple;
  marginRight -= moveDistance * moveMultiple;
  blorkMove(marginLeft, marginRight);

  blorkRotate(0);
}

// rotates each blork individually
function blorkRotate(degrees) {
  var blork1HTML = document.getElementById('blork1');
  var blork2HTML = document.getElementById('blork2');
  var blork3HTML = document.getElementById('blork3');
  blork1HTML.style.transform = 'rotate(' + degrees + 'deg)';
  blork2HTML.style.transform = 'rotate(' + degrees + 'deg)';
  blork3HTML.style.transform = 'rotate(' + degrees + 'deg)';
}

// moves blorks as a group
function blorkMove(marginLeft, marginRight) {
  var blorkDivHTML = document.getElementById('blork_div');
  blorkDivHTML.style.marginLeft = marginLeft + '%';
  blorkDivHTML.style.marginRight = marginRight + '%';
}

// calculates and updates current score
function updateCurrentScore() {
  var fewGuesses = 10 / maxGuesses; // fewer chances -> higher score multiplier
  var hitCount = 0;
  var missedGuesses = -100 * (maxGuesses - currentGuesses); // missed guess costs 100 points
  _.each(secretWord,function(secretLetter) {
    if (secretLetter !== " " && guessedChars.indexOf(secretLetter) !== -1) {
      hitCount++;
    }
  });

  var hitGuesses = 250 * hitCount; // hit guess earns 250 points

  currentScore =  Math.round( fewGuesses * hitGuesses - missedGuesses);
}

// renders current score for user
function renderCurrentScore() {
  document.getElementById('current_score').innerHTML = currentScore;
}

// checks and executes win or loss
function checkWinLoss() {
  var secretComplete = true;
  if (currentGuesses === 0) {
    lose();
  }
  _.each(secretWord, function(secretLetter) {
    if (guessedChars.indexOf(secretLetter) === -1) {
      secretComplete = false;
    }
  });
  if (secretComplete) {
    win();
  }
}

// renders losing information for user and resets game
function lose() {
  document.getElementById('spaceman1').style.display = "none";
  document.getElementById('spaceman2').style.display = "inline";
  
  function loseWrapper() {renderGameAnimationWrapper("block","THE BLORKS GOT YOU!","none");}
  setTimeout(loseWrapper, 2500);
  setTimeout(resetGame, 5000);
}

// renders win information (and any new high score) for user and resets game
function win() {
  if (currentScore > highScore) {
    highScore = currentScore;
    document.getElementById('high_score').innerHTML = highScore;
  }
  
  document.getElementById('spaceman1').style.marginLeft = '20%';
  
  function winWrapper() {renderGameAnimationWrapper("block","YOU ESCAPED!","none");}
  setTimeout(winWrapper, 2500);
  setTimeout(resetGame, 5000);
}

// use pretty transitions/animations
// refactor to put variables/functions objects?
// add sound stuff