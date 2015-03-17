// ----------------------------------------
// Helper Functions                       |
// ----------------------------------------

function speedUp() {
  movePixels += 2;
}

function setupEventHandlers() {
  // buttons
  var startButton    = document.getElementById("start-button");
  var goFasterButton = document.getElementById("speed-button");
  var stopButton     = document.getElementById("stop-button");

  // eventListeners
  startButton.addEventListener('click', startCatWalk);
  goFasterButton.addEventListener('click', speedUp);
  stopButton.addEventListener('click', stopCat);
}

// ----------------------------------------
// Just Code Yo                           |
// ----------------------------------------

setupEventHandlers();

var img = document.getElementsByTagName('img')[0];

var currentPosLeft  = parseInt(img.style.left);
var currentPosRight = parseInt(img.style.left) + img.width;
var leftBound       = 0;
var rightBound      = window.innerWidth;

var movePixels = 2;
var delayMs = 10;
var catTimer = null;

function catWalk() {
  currentPosLeft  = parseInt(img.style.left);
  currentPosRight = parseInt(img.style.left) + img.width;
  if (currentPosRight <= rightBound) {
    img.style.right = rightBound;
    img.style.transform = "scaleX(-1)";
    img.style.left = (parseInt(img.style.left) - movePixels) + 'px';
  }

  if (currentPosLeft >= leftBound) {
    img.style.left = leftBound;
    img.style.transform = "scaleX(1)";
    img.style.left = (parseInt(img.style.left) + movePixels) + 'px';
  }

}

function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs);
}

function stopCat() {
  ;
}
