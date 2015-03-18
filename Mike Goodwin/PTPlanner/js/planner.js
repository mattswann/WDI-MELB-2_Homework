var metro = {
	Alamein: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
	"Glen Waverly": ["Flagstaff", "Melbourne Central", "Richmond", "Kooyong", "Tooronga"],
	Sandringham: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"],
	Pakenham: ["Parliament","Richmond","Hawksburn","Toorak","Armadale","Malvern","Caulfield"]
}
// Parliament removed from the Glen Waverly line to create the Pakenham line

var lines = Object.keys(metro);

loadLines(lines);

function loadLines(arr) {
	var startLine = document.getElementById("startLine");
	var startStop = document.getElementById("startStop");
	var endLine = document.getElementById("endLine");
	var endStop = document.getElementById("endStop");
	// debugger;
	for (var i = 0; i < arr.length; i++) {
		var option = document.createElement("option");
		option.text = arr[i];
		startLine.add(option);
		// loadStops(startStop,metro[arr[i]]);
		var option = document.createElement("option");
		option.text = arr[i];
		endLine.add(option);
		// loadStops(endStop,metro[arr[i]]);
	}
}

function loadStops(listElement,stopsArray) {
	for (var i = 0; i < stopsArray.length; i++) {
		var option = document.createElement("option");
		option.text = stopsArray[i];
		listElement.add(option);
	};
}

// var userLineStart = prompt("On which line do you wish to start your journey?");
// while (!validEntry(lines,userLineStart)) {
// 	var userLineStart = prompt("That line is not valid. Please re-enter.");
// }

// var userStopStart = prompt("At which stop do you wish to start your journey?");
// while (!validEntry(metro[userLineStart],userStopStart)) {
// 	var userStopStart = prompt("That line is not valid. Please re-enter.");
// }

// var userLineEnd = prompt("On which line do you wish to end your journey?");
// while (!validEntry(lines,userLineEnd)) {
// 	var userLineEnd = prompt("That line is not valid. Please re-enter.");
// }

// var userStopEnd = prompt("At which stop do you wish to end your journey?");
// while (!validEntry(metro[userLineEnd],userStopEnd)) {
// 	var userStopEnd = prompt("That line is not valid. Please re-enter.");
// }

var interchange = "Richmond";
var totalStops = 0;
var journeyLeg;
var msg = "You're journeying from " + userStopStart;
msg += ", on the " + userLineStart + " line, to ";
msg += userStopEnd + ", on the " + userLineEnd + " line.";

// console.log(msg);

if (userLineStart === userLineEnd) {
// Start and end stations are on the same line

	// Calculate the trip between the start station and the end station on the line
	journeyLeg = getStops(metro[userLineStart],userStopStart,userStopEnd)
	totalStops += journeyLeg.length - 1;

	displayStops(journeyLeg);
} else {
// Start and end stations are on different lines

	// Calculate the trip between the start station and the interchange station on the first line
	journeyLeg = getStops(metro[userLineStart],userStopStart,interchange)
	totalStops += journeyLeg.length - 1;

	displayStops(journeyLeg);

	// Calculate the trip between the interchange station and the end station on the 2nd line
	journeyLeg = getStops(metro[userLineEnd],interchange,userStopEnd)
	totalStops += journeyLeg.length - 1;
	
	// Prevent the interchange station from being displayed twice
	journeyLeg.shift();

	displayStops(journeyLeg);
}

console.log("Your journey will take you through " + totalStops + " stops.");

/*------------------------------------------*/
/*          F U N C T I O N S               */
/*------------------------------------------*/

function validEntry (array,value) {
// Tests if a specified item exists with the provided array
	if (array.indexOf(value) === -1) {
		return false;
	} else {
		return true;
	}
}

function displayStops (journey) {
// Display the stops on the journey array
	for (var i = 0; i < journey.length; i++) {
		console.log(journey[i]);
	}
}

function getStops (line,start,end) {
// Return array of stops between two stops (inclusive) on the provided line
	var ixStart = findIndex(line,start);
	var ixEnd = findIndex(line,end);

	var leg = [];

	if (ixStart < ixEnd) {
		for (var i = ixStart; i <= ixEnd; i++) {
			leg.push(line[i]);
		}
	} else {
		for (var i = ixStart; i >= ixEnd; i--) {
			leg.push(line[i]);
		}
	}

	return leg;
}

function findIndex (line,stop) {
// Determines the index value of a stop on a line
	return line.indexOf(stop);
}

