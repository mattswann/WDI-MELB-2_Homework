
function coinFlip() {
	if (headsCount >= 5 || tailsCount >= 5) {return};

	// get the result of the coin flip
	var result = Math.random() > .5 ? "Heads" : "Tails";
	(result === "Heads") ? headsCount++ : tailsCount++;

	// show the current score
	var showCount = "Heads: " + headsCount + " Tails: " + tailsCount;
	headsTotal.innerHTML = headsCount || "0";
	tailsTotal.innerHTML = tailsCount || "0";

	// check if someone won
	if (headsCount === 5) {
		winner = "Heads";
		displayResult.innerHTML = "Heads wins!";
	}
		else if (tailsCount === 5) {
			winner = "Tails";
			displayResult.innerHTML = "Tails wins!";
		};
}

function imageFlip() {
	var toggle = (imageCount%2 === 0) ? 1 : -1;
	coin.style.transform = "scaleX(" + toggle +")";
	imageCount++;
	if (imageCount >= 20) {
		clearInterval(timer);
	}
}

function startTimer() {
	timer = setInterval(imageFlip, 100)
	imageCount = 0;
}


var headsCount = 0;
var tailsCount = 0;
var winner;
var imageCount = 0
var timer;


// console.log("The overall winner was " + winner);


// html stuff
var headsTotal = document.getElementById("headsTotal");
var tailsTotal = document.getElementById("tailsTotal");
var coin = document.getElementsByTagName("img")[0];
coin.addEventListener('click', function() {
	startTimer();
	setTimeout(coinFlip, 2000);
});

var displayResult = document.getElementById("displayResult");