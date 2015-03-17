function totalScores() {
	var players = Object.keys(scores);
	// get each player individually
	for (var a = 0; a < players.length; a++) {
		var person = players[a];
		var total = 0;

		// total each player's score
		for (var i = 0; i < scores[person].length; i++) {
			total += scores[person][i];
		}

		// compare that score against par
		var againstPar;
		if (total > course.coursePar) {
			againstPar = (total - course.coursePar) + " over par.";
		} else if (total < course.coursePar) {
			againstPar = (course.coursePar - total) + " under par.";
		} else {
			againstPar = "Equal to par."
		}
		console.log(person + " scored: " + total + ". " + againstPar);
	}
};

var scores = {
	Bob: [3,2,6,11,9,2,6,9,10],
	Jimbo: [5,12,9,22,13,7,16,10,11],
	Fish: [2,2,4,5,4,3,6,4,1],
};

var course = {
	par: [3,4,5,5,3,3,4,3,5],
	coursePar: 35
};

