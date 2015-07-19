// This needs some SERIOUS work on it, it's absolutely terrible currently

// ----------------------------------------
// Helper Functions                       |
// ----------------------------------------

function invertNum(num) {
  return num * -1;
}

function speedUp() {
  movePixels += 2;
}

function inBounds(elem) {
  var currentPosLeft  = parseInt(elem.style.left);
  var currentPosRight = parseInt(elem.style.left) + elem.width;
  var leftBound       = 0;
  var rightBound      = window.innerWidth;

  if (currentPosRight > rightBound || currentPosLeft < leftBound) {
    return false;
  }
  return true;
}

// ----------------------------------------
// Move Functions                         |
// ----------------------------------------


function catMove(elem, catPos) {
  if (catDirection === 1) {
    elem.style.left = (catPos + movePixels) + 'px';
  } else if (catDirection === -1) {
    elem.style.left = (catPos - movePixels) + 'px';
  }
}

function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var catPos = parseInt(img.style.left);
  var catPosMid = parseInt(img.style.left) + (img.width / 2);

  var midway = window.innerWidth / 2;
  if (catPosMid > midway - movePixels && catPosMid < midway + movePixels) {
    console.log("wat")
    img.src = "http://media.giphy.com/media/mfZna9qCS5eGA/giphy.gif";
    setTimeout(function(){
      img.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
    }, 1000);
  }

  if (!inBounds(img)) {
    catDirection = invertNum(catDirection);
    img.style.transform = "scaleX(" + catDirection + ")";
  }
  catMove(img, catPos);
}

function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs);
}

var catDirection = 1;
var movePixels = 2;
var delayMs = 10;
var catTimer = null;

// buttons
var startButton = document.getElementById("start-button");
var goFasterButton = document.getElementById("speed-button");

// eventListeners
startButton.addEventListener('click', startCatWalk);
goFasterButton.addEventListener('click', speedUp);




