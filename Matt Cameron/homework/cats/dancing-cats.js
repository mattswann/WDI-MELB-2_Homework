
function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var img2 = document.getElementsByTagName('img')[1];
  var currentLeft = parseInt(img.style.left);

  // stop the cat in the middle, and do stuff
  var startDancing = ((window.innerWidth-img.width)/2)-10;
	var stopDancing = ((window.innerWidth-img.width)/2)+10;

  if((currentLeft > startDancing) && (currentLeft < stopDancing)) {
  		// stop catWalk
  		clearInterval(catTimer);
  		catTimer = null;

  		//change the visible image to the dancing cat
			img.classList.add("hidden");
			img2.classList.remove("hidden");
			setTimeout(startCatWalk, 3000);
  	} else {
  		// ensure that the regular cat is showing
  		img.classList.remove("hidden");
  		img2.classList.add("hidden");
  	};


  if (direction === "right") {
		img.style.left = (currentLeft + movePixels) + 'px';
		if (currentLeft >= window.innerWidth-img.width) {
			direction = "left";
			img.classList.add("flipped");
		}
	}
		if (direction === "left") {
  	img.style.left = (currentLeft - movePixels) + 'px';
  	if (currentLeft <= 0) {
			direction = "right";
			img.classList.remove("flipped");
  	}
	}

}

function startCatWalk() {
	if (catTimer !== null) {return};
  catTimer = window.setInterval(catWalk, delayMs);
}

function stopCatWalk() {
	clearInterval(catTimer);
	delayMs = 50;
	catTimer = null;
}

function speedUp() {
	clearInterval(catTimer);
	catTimer = null;
	delayMs -= 10;
	startCatWalk();
}


var direction = "right";
var movePixels = 15;
var delayMs = 50;
var catTimer = null;

var start = document.getElementById("start-button");
start.addEventListener('click', function() {
	startCatWalk(); });

var stop = document.getElementById("stop-button");
stop.addEventListener('click', stopCatWalk);

var faster = document.getElementById("speed-button");
faster.addEventListener('click', speedUp);