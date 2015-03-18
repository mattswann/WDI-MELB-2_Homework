/*
  https://gist.github.com/mattswann/a86671fddee623efae3f
*/

function coinFlip() {
  return (Math.floor(Math.random() * 2) == 0) ? 'HEADS' : 'TAILS';
}

function appendToList(listID) {
  var list = document.getElementById(listID);
  var node = document.createElement("li");
  list.appendChild(node);
}

function updateID(elemID, text) {
  document.getElementById(elemID).innerHTML = text;
}

function coinGame() {
  var game = {
    HEADS: 0,
    TAILS: 0
  }

  while (game.HEADS < 5 && game.TAILS < 5) {
    game[coinFlip()] += 1;
  }

  // Update the DOM with result
  if (game.HEADS === 5) {
    updateID(headsDiv, "Heads: " + game.HEADS);
    updateID(tailsDiv, "Tails: " + game.TAILS);
    updateID(winnerDiv, "HEADS WINNER!");
  }
  else if (game.TAILS === 5) {
    updateID(headsDiv, "Heads: " + game.HEADS);
    updateID(tailsDiv, "Tails: " + game.TAILS);
    updateID(winnerDiv, "TAILS WINNER!");
  }
}

var headsDiv = "coin-heads";
var tailsDiv = "coin-tails";
var winnerDiv = "coin-winner";
var coinImg   = document.getElementById("coin");

coin.addEventListener("click", function(){
  coinGame();
});

