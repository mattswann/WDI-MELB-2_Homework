// CLOSURES

// outer function
var gameMaker = function() {
	var version = 4;
	var score = 50;

	// inner object which contains functions
	var publicAPI = {

		// without closures, we couldn't access this function from outside gameMaker()
		start: function() {
			console.log("I can accesss the version number, which is " + version)
		},
		currentScore: function() {
			console.log("I can access the current score, which is " + score)
		}
	}

	// return the inner object
	return publicAPI;
}

var game = gameMaker();


// Now I can call game.start(); which accesses the publicAPI
game.start();