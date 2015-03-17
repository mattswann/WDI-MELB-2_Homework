var movePixels = 10;
var delayMs = 50;
var catTimer = null;
var catimage = document.getElementsByTagName('img')[0];
var catRight = true;
var catLeft = false;

function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);

    // move right
    if (catRight === true) {
      img.style.left = (currentLeft + movePixels) + 'px';
    }
    //stop flip
     if (currentLeft > (window.innerWidth-img.width)) {
      catFlipLeft();
      catRight = false;
      catLeft = true;
    }
    // move left
    if (catLeft === true) {
      img.style.left = (currentLeft - movePixels) + 'px';
  }
    //stop flip
    if (currentLeft === 0) {
    catFlipRight();
    catRight = true;
    catLeft = false;
  }
}


function catFlipLeft() {
  var img = document.getElementsByTagName('img')[0];
  img.style.transform = 'scaleX(-1)';
}

function catFlipRight() {
  var img = document.getElementsByTagName('img')[0];
  img.style.transform = 'scaleX(1)';
}

function startCatWalk() {
  if (catTimer !== null) { return; }
  catTimer = window.setInterval(catWalk, delayMs);
}

function fasterCatWalk() {
  if (delayMs < 1){ return; }
  delayMs -= 20
  if (catTimer !== null) {
      clearInterval(catTimer);
  }
    catTimer = window.setInterval(catWalk, delayMs);
}

function stopCatWalk() {
  clearInterval(catTimer);
  catTimer = null;
  delayMs = 50;
}

var buttonStart = document.getElementById('start-button');
buttonStart.addEventListener('click', startCatWalk)
var buttonSpeed = document.getElementById('speed-button');
buttonSpeed.addEventListener('click', fasterCatWalk)
var buttonStop = document.getElementById('stop-button');
buttonStop.addEventListener('click', stopCatWalk)