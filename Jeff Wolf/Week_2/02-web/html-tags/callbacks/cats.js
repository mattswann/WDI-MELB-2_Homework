var movePixels = 10;
var delayMs = 50;
var catTimer = null;
var goRight = true;

function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  
  if (goRight) {
    img.style.left = (currentLeft + movePixels) + 'px';
  } else {
    img.style.left = (currentLeft - movePixels) + 'px';
  }

  if (goRight === true && currentLeft > (window.innerWidth-img.width)) {
    goRight = false;
    img.style.transform = 'scaleX(-1)';
  } else if (goRight === false && currentLeft < 0) {
    goRight = true;
    img.style.transform = 'scaleX(1)';
  }
}
function startCatWalk() {
  if (catTimer !== null) { 
    return; 
  };
  catTimer = window.setInterval(catWalk, delayMs);
}

function accelerate() {
  if (catTimer === null || delayMs <= 0) {
    return;
  }
  clearInterval(catTimer);
  catTimer = null;
  delayMs = delayMs - 5;
  startCatWalk();
}

function stopCatWalk() {
  delayMs = 50;
  clearInterval(catTimer);
  catTimer = null;
}

var startBtn = document.getElementById('start-button');
startBtn.addEventListener('click', startCatWalk);

var stopBtn = document.getElementById('stop-button');
stopBtn.addEventListener('click', stopCatWalk);

var speedBtn = document.getElementById('speed-button');
speedBtn.addEventListener('click', accelerate);




//my code below-------------------DT code above

// var movePixels = 10;
// var delayMs = 50;
// var delayMs1 = 1;
// var delayMs2 = 500;
// var catTimer = null;
// function catWalk() {
//   var img = document.getElementsByTagName('img')[0];
//   var currentLeft = parseInt(img.style.left);
//   img.style.left = (currentLeft + movePixels) + 'px';
//   if (currentLeft > (window.innerWidth-img.width)) {
//     img.style.left = '0px';
//   }
// }

// //while(currentLeft x, y)
//   //this is to look at the x movement of the gif.





// function startCatWalk() {
//   if )catTimer !== null) {
//     return;
//   };
//   catTimer = window.setInterval(catWalk, delayMs);
// }

// function stopCatWalk() {
//   delayMs = 50;
//   clearInterval(catTimer)
//   catTimer = null;
//   window.clearInterval(catTimer);
// }

// function goFaster() {
// 	catTimer = window.setInterval(catWalk, delayMs1)
// }

// function goSlower() {
// 	catTimer = window.setInterval(catWalk, delayMs2)
// }

// document.getElementById('startButton').addEventListener('click', startCatWalk);
// document.getElementById('stopButton').addEventListener('click', stopCatWalk);
// document.getElementById('speedButton').addEventListener('click', goFaster);
// document.getElementById('slowButton').addEventListener('click', goSlower);

