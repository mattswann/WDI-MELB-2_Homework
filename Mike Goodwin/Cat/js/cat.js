var movePixels = 10;
var delayMs = 200;
var catTimer = null;
var forward = true;

function catWalk() {
	var img = document.getElementsByTagName('img')[0];
	var currentLeft = parseInt(img.style.left);

	// Shift image right (forward) or left (not forward) a set number of pixels
	if (forward) {
		img.style.left = (currentLeft + movePixels) + 'px';		
	} else {
		img.style.left = (currentLeft - movePixels) + 'px';
	}
	
	// If on the far right of the window, flip the image and set it to move to the left
	if (currentLeft > (window.innerWidth-img.width)) {
		forward = false;
		img.style.transform = 'scaleX(-1)';
	}
	// If on the far left of the window, flip the image and set it to move to the right
	if (currentLeft <= 0) {
		forward = true;
		img.style.transform = 'scaleX(1)';
	}
	
	// Find the centre of the window and the centre of the image
	var scrnMidPoint = window.innerWidth / 2;
	var imgMidPoint = (currentLeft + (img.width/2));
	
	// When the centre of the image is approximately at the centre of the window, temporarily both stop the image from moving and change its source 
	if (imgMidPoint > (scrnMidPoint - (movePixels/2)) && imgMidPoint < (scrnMidPoint + (movePixels/2))) {
		clearInterval(catTimer);
		img.src = "http://www.netanimations.net/DANCING%20BLACK%20CAT.gif";
		
		setTimeout(function () {
			img.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
			startCatWalk();
		},5000)
	}
}

function startCatWalk() {
	catTimer = window.setInterval(catWalk, delayMs);
}

var startBtn = document.getElementById('start-button');
var stopBtn = document.getElementById('stop-button');
var speedBtn = document.getElementById('speed-button');

startBtn.addEventListener('click', function () {
	startCatWalk();
});

stopBtn.addEventListener('click', function () {
	clearInterval(catTimer);
});

speedBtn.addEventListener('click', function () {
	// Reduce the delay to increase the speed at which the image moves
	delayMs /= 1.5;
	clearInterval(catTimer);
	startCatWalk();
});
