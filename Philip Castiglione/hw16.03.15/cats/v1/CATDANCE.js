var movePixels = 10;
var delayMs = 100;
var catTimer = null;
var catMoving = false;
var cageBoolean = false;

var startBtn = document.getElementById("start-button");
var stopBtn = document.getElementById("stop-button");
var fastBtn = document.getElementById("fast-button");
var slowBtn = document.getElementById("slow-button");

startBtn.addEventListener('click', startCatWalk);
stopBtn.addEventListener('click', stopCatWalk);
fastBtn.addEventListener('click', goFaster);
slowBtn.addEventListener('click', goSlower);

function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = currentLeft + movePixels + 'px';
  var halfway = (window.innerWidth-img.width)/2;
  if (currentLeft > halfway) {
    if (!cageBoolean) {
      img.src = "http://placecage.com/c/200/200";
      stopCatWalk();
      setTimeout(function() {
        img.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
        startCatWalk();
        cageBoolean = true;
      },1500);
    }
  } else if (currentLeft < halfway) {
    if (cageBoolean) {
      img.src = "http://placecage.com/c/200/200";
      stopCatWalk();
      setTimeout(function() {
        img.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
        startCatWalk();
        cageBoolean = false;
      },1500);
    }
  }
  if (currentLeft > (window.innerWidth-img.width)) {
    img.className = "flip";
    movePixels *= -1;
    img.style.left = currentLeft + movePixels + 'px';
    cageBoolean = true;
  }
  if (currentLeft < 0) {
    img.className = "";
    movePixels *= -1;
    img.style.left = currentLeft + movePixels + 'px';
    cageBoolean = false;
  }
}

function startCatWalk() {
  if (catMoving) {
    return;
  }
  catMoving = true;
  catTimer = window.setInterval(catWalk, delayMs);
}

function stopCatWalk() {
  catMoving = false;
  clearInterval(catTimer);
}

function goFaster() {
  if (delayMs > 10) {
    delayMs -= 30;
  }
  if (catMoving) {
    stopCatWalk();
    startCatWalk();
  }
}

function goSlower() {
  if (delayMs < 100) {
    delayMs += 30;
  }
  if (catMoving) {
    stopCatWalk();
    startCatWalk();
  }
}