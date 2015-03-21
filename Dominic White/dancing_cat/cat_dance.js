var movePixels = 10;
var delayMs = 50;
var catTimer = null;
function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
  if (currentLeft > (window.innerWidth-img.width)) {    //once the image reaches beyond the right edge of the screen
    img.style.left = '0px';								//it then returns to the left
   		// if (currentLeft === (window.innerWidth-img.width)) {
    	// img.style.transform = "scaleX(-1)"
    	// }
	}
  }

function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs);
}

function stopCatWalk() {
	clearInterval(catTimer);
}

function speedCatWalk() {
	movePixels += 5;
}


// function slowCatWalk() {
// 	if (movePixels > 0) {
// 		movePixels -= 5;
// 	} else {
// 		movePixels = movePixels;
// 	} 
// }

var start = document.getElementById("start-button");
start.addEventListener("click", startCatWalk);

var stop = document.getElementById("stop-button");
stop.addEventListener("click", stopCatWalk);

var speed_up = document.getElementById("speed-button");
speed_up.addEventListener("click", speedCatWalk);

var slow_down = document.getElementById("slow-button");
slow_down.addEventListener("click", slowCatWalk);




