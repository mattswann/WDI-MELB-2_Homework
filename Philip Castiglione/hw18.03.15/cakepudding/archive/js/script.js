var secretWord = [];
var guessedChars = [];
var maxGuesses = 0;
var currentGuesses = 0;
var highScore = 0;
var currentScore = 0;

window.onload = function() {
  document.getElementById('play').addEventListener('click', playGame);
  document.getElementById('pause').addEventListener('click', pauseGame);
  document.getElementById('forfeit').addEventListener('click', lose);
}

function playGame() {
  secretWord = getSpaceWord();
  guessedChars = [' '];
  maxGuesses = getMaxGuesses();
  currentGuesses = maxGuesses;
  document.getElementById('play').removeEventListener('click', playGame);
  document.getElementById('play').classList.toggle('inactive');
  document.getElementById('in_game').classList.toggle('hide');
  document.getElementById('game_wrapper').classList.toggle('hide');
  document.getElementById('alphabet').innerHTML = "Press a letter on your keboard to begin!";
  document.getElementById('blork_div').style.marginLeft = '2%';
  document.getElementById('blork_div').style.marginRight = '60%';
  currentScore = 0;
  renderCurrentScore();
  renderGuessingWord();
  renderPrettyRandom();
  renderGameAnimationWrapper("none","","block");
  window.addEventListener('keyup', runGuess);
}

function getSpaceWord() {
  var word = _.sample(spaceWords);
  return word.split('');
}

function getMaxGuesses() {
  var guesses = document.getElementById('max_chances').value;
  if (Number.isNaN(parseInt(guesses, 10)) || parseInt(guesses, 10) < 1) {
    guesses = 8;
  }
  return parseInt(guesses, 10);
}

function renderPrettyRandom() {
  var charPrettyHTML = document.getElementById('char_pretty');
  charPrettyHTML.innerHTML = _.sample(acceptedChars).toUpperCase();
  var displayCount = 30;
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

function pauseGame() {
  window.removeEventListener('keyup', runGuess);
  document.getElementById('pause').innerHTML = 'UNPAUSE';
  document.getElementById('pause').removeEventListener('click', pauseGame);
  document.getElementById('pause').addEventListener('click', continueGame);
  renderGameAnimationWrapper("block","PAUSED","none");
}

function renderGameAnimationWrapper(overlayDisplay, overlayHTML, wrapperDisplay) {
  var overlay = document.getElementById('overlay');
  overlay.style.display = overlayDisplay;
  overlay.innerHTML = overlayHTML;
  var wrapper = document.getElementById('game_wrapper');
  wrapper.style.display = wrapperDisplay;
}

function continueGame() {
  window.addEventListener('keyup', runGuess);
  document.getElementById('pause').innerHTML = 'PAUSE';
  document.getElementById('pause').removeEventListener('click', continueGame);
  document.getElementById('pause').addEventListener('click', pauseGame);
  renderGameAnimationWrapper("none","","block");
}

function resetGame() {
  window.removeEventListener('keyup', runGuess);
  document.getElementById('play').addEventListener('click', playGame);
  document.getElementById('play').classList.toggle('inactive');
  document.getElementById('in_game').classList.toggle('hide');
  renderGameAnimationWrapper("none","","none");
  document.getElementById('alphabet').innerHTML = "";
}

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

function validateChar(character) {
  return acceptedChars.indexOf(character) !== -1;
}

function checkAlreadyGuessed(character) {
  return guessedChars.indexOf(character) !== -1;
}

function renderCharPretty(character) {
  var charPrettyHTML = document.getElementById('char_pretty');
  charPrettyHTML.innerHTML = character.toUpperCase();
  setTimeout(toggleHighlight,150);
  setTimeout(toggleHighlight,900);
  function toggleHighlight() {
    charPrettyHTML.classList.toggle('highlight');
  }
}

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

function addGuessedChar(character) {
  guessedChars.push(character);
}

function checkGuessedChar(character) {
  return secretWord.indexOf(character) !== -1;
}

function renderGuessingWord() {
  var shownWord = [];
  var secretWordHTML = document.getElementById('secret_word');
  for (i in secretWord) {
    if (guessedChars.indexOf(secretWord[i]) !== -1) {
      shownWord.push(secretWord[i].toUpperCase());
    } else {
      shownWord.push('_');
    }
    shownWord.push('&nbsp;');
  }
  secretWordHTML.innerHTML = shownWord.join('');
}

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

function blorkRotate(degrees) {
  var blork1HTML = document.getElementById('blork1');
  var blork2HTML = document.getElementById('blork2');
  var blork3HTML = document.getElementById('blork3');
  blork1HTML.style.transform = 'rotate(' + degrees + 'deg)';
  blork2HTML.style.transform = 'rotate(' + degrees + 'deg)';
  blork3HTML.style.transform = 'rotate(' + degrees + 'deg)';
}

function blorkMove(marginLeft, marginRight) {
  var blorkDivHTML = document.getElementById('blork_div');
  blorkDivHTML.style.marginLeft = marginLeft + '%';
  blorkDivHTML.style.marginRight = marginRight + '%';
}

function updateCurrentScore() {
  var fewGuesses = maxGuesses;
  var missedGuesses = (maxGuesses - currentGuesses);
  var hitGuesses = 0;
  _.each(secretWord,function(secretLetter) {
    if (secretLetter !== " " && guessedChars.indexOf(secretLetter) !== -1) {
      hitGuesses++;
    }
  });
  currentScore =  Math.round(- 100 * missedGuesses + (10 / fewGuesses * 250 * hitGuesses));
}

function renderCurrentScore() {
  document.getElementById('current_score').innerHTML = currentScore;
}

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

function lose() {
  //lose animation?
  renderGameAnimationWrapper("block","THE BLORKS GOT YOU!","none");
  setTimeout(resetGame, 3000);
}

function win() {
  if (currentScore > highScore) {
    highScore = currentScore;
    document.getElementById('high_score').innerHTML = highScore;
  }
  //win animation?
  renderGameAnimationWrapper("block","YOU ESCAPED!","none");
  setTimeout(resetGame, 3000);
}

// win and lose animations
// refactor to put variables in an object
// refactor crappy coding
// add sound and button to toggle
// use pretty transitions