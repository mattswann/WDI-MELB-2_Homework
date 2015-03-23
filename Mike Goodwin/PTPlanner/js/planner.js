var metro = {
	Alamein: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
	"Glen Waverly": ["Flagstaff", "Melbourne Central", "Richmond", "Kooyong", "Tooronga"],
	Sandringham: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"],
	Pakenham: ["Parliament","Richmond","Hawksburn","Toorak","Armadale","Malvern","Caulfield"]
}

var lines;
var userLineStart;
var userLineEnd;
var userStopStart;
var userStopEnd;
var interchange = "Richmond";

init();

/*------------------------------------------*/
/*      E V E N T   L I S T E N E R S       */
/*------------------------------------------*/

document.getElementById("startLine").addEventListener("change",function() {
	removeChildElements(document.getElementById("startStop"));
	userLineStart = document.getElementById("startLine").value;
	loadSelectionElement(document.getElementById("startStop"),metro[userLineStart]);
});

document.getElementById("endLine").addEventListener("change",function() {
	removeChildElements(document.getElementById("endStop"));
	userLineEnd = document.getElementById("endLine").value;
	loadSelectionElement(document.getElementById("endStop"),metro[userLineEnd]);
});

document.getElementById("submit").addEventListener("click",function() {
	userStopStart = document.getElementById("startStop").value;
	userStopEnd = document.getElementById("endStop").value;

	var trip = buildJourney();
	var totalStops = trip.length -  1;

	var msg = "You're journey from " + userStopStart;
	msg += ", on the " + userLineStart + " line, to ";
	msg += userStopEnd + ", on the " + userLineEnd + " line, ";
	msg += "will take you through " + totalStops + " stops.";

	document.getElementById("description").innerHTML = msg;

	displayStops(trip);
});



/*------------------------------------------*/
/*          F U N C T I O N S               */
/*------------------------------------------*/

function init() {
	lines = Object.keys(metro);

	loadSelectionElement(document.getElementById("startLine"),lines);
	loadSelectionElement(document.getElementById("endLine"),lines);

	userLineStart = document.getElementById("startLine").value;
	userLineEnd = document.getElementById("endLine").value;

	loadSelectionElement(document.getElementById("startStop"),metro[userLineStart]);
	loadSelectionElement(document.getElementById("endStop"),metro[userLineEnd]);
}

function loadSelectionElement(selectionElement,array) {
	// Populate the selection element using the array
	for (var i = 0; i < array.length; i++) {
		var option = document.createElement("option");
		option.text = array[i];
		selectionElement.add(option);
	}
}

function removeChildElements(parentElement) {
	while (parentElement.lastChild) {
		parentElement.removeChild(parentElement.lastChild);
	}
}

function buildJourney() {
	if (userLineStart === userLineEnd) {
	// Start and end stations are on the same line

		// Calculate the trip between the start station and the end station on the line
		var journey = getStops(metro[userLineStart],userStopStart,userStopEnd)

	} else {
	// Start and end stations are on different lines

		// Retrieve the stops on the trip between the start station and the interchange station on the first line
		var journeyLeg = getStops(metro[userLineStart],userStopStart,interchange)

		var journey = journeyLeg;

		// Retrieve the stops on the trip between the interchange station and the end station on the 2nd line
		journeyLeg = getStops(metro[userLineEnd],interchange,userStopEnd)
		
		// Prevent the interchange station from being displayed twice
		journeyLeg.shift();

		journey = journey.concat(journeyLeg);
	}
	
	return journey;
}

function displayStops (journey) {
// Display the stops on the journey array
	removeChildElements(document.getElementById("stops"));

	for (var i = 0; i < journey.length; i++) {
		var listItem = document.createElement("li");
		listItem.innerHTML = journey[i];
		
		if (i < journey.length - 1) {
			listItem.innerHTML += " >> ";
		}

		document.getElementById("stops").appendChild(listItem);
	}
}

function getStops (line,start,end) {
// Return array of stops between two stops (inclusive) on the provided line
	var ixStart = line.indexOf(start);
	var ixEnd = line.indexOf(end);

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
