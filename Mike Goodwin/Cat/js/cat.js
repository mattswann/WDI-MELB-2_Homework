var movePixels = 10;
var delayMs = 200;
var catTimer = null;
var forward = true;

function catWalk() {
	var img = document.getElementsByTagName('img')[0];
	var currentLeft = parseInt(img.style.left);

	if (forward) {
		img.style.left = (currentLeft + movePixels) + 'px';		
	} else {
		img.style.left = (currentLeft - movePixels) + 'px';
	}
	
	if (currentLeft > (window.innerWidth-img.width)) {
		forward = false;
		img.style.transform = 'scaleX(-1)';
	}
	if (currentLeft <= 0) {
		forward = true;
		img.style.transform = 'scaleX(1)';
	}
	
	var scrnMidPoint = window.innerWidth / 2;
	var imgMidPoint = (currentLeft + (img.width/2));
	
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
	delayMs /= 1.5;
	clearInterval(catTimer);
	startCatWalk();
});
