
function calcStops(start, end) {
	var startLine = checkLine(start);
	var endLine = checkLine(end);
	var hopOnIndex = startLine.indexOf(start);
	var hopOffIndex = endLine.indexOf(end);
	// If the lines are the same...
	if (startLine === endLine) {
		return Math.abs(hopOffIndex - hopOnIndex);
	} else {
	var toRichmond = Math.abs(startLine.indexOf("Richmond") - hopOnIndex);
	var fromRichmond = Math.abs(hopOffIndex - checkLine(end).indexOf("Richmond"));
	return toRichmond + fromRichmond;
	}
}

function getStops(start, end) {
		var startLine = checkLine(start);
		var endLine = checkLine(end);
		var hopOnIndex = startLine.indexOf(start);
		var hopOffIndex = endLine.indexOf(end);
	if (startLine === endLine) {				// travelling on the same line
		if (hopOnIndex <= hopOffIndex) {
			var route = startLine.slice(hopOnIndex+1, hopOffIndex+1); // add first 1 because station we get on at is not a stop, and second 1 because slice does not include last element you feed it.
		} else {
			var route = (startLine.slice(hopOffIndex, hopOnIndex)).reverse();
		}
		return route.join(', ');
	} else { // travelling to a different line
		var changeAtRichmond = startLine.indexOf("Richmond");
		var boardAtRichmond = endLine.indexOf("Richmond");

		// get the stops on the way to Richmond
		if (hopOnIndex <= changeAtRichmond) {
		var route1 = startLine.slice(hopOnIndex+1, changeAtRichmond+1);
		} else {
			var route1 = (startLine.slice(changeAtRichmond, hopOnIndex)).reverse();
		}

		// get the stops on the way from Richmond to destination
		if (boardAtRichmond <= hopOffIndex) {
			var route2 = endLine.slice(boardAtRichmond+1, hopOffIndex+1);
		}
		else {
			var route2 = (endLine.slice(hopOffIndex, boardAtRichmond).reverse());
		}
		var wholeRoute = "Stations are: " + route1.join(', ') + " then " + route2.join(', ') + ".";
		return wholeRoute;
	}
}

function checkLine(station) {
		// handle Richmond differently because it is on all lines
	  if (station === "Richmond") {
	  		//if starting at Richmond, set the line to the end station's line
	  	if (startStation.options[startStation.selectedIndex].value === "Richmond") {
	  		return checkLine(endStation.options[endStation.selectedIndex].value);
	  	} else { // if ending at Richmond, set the line to the start station's line
	  		return checkLine(startStation.options[startStation.selectedIndex].value);
	  	}
	} else if (metro["Alamein"].indexOf(station) >= 0) {
			return metro["Alamein"];
	} else if (metro["Glen Waverly"].indexOf(station) >= 0) {
			return metro["Glen Waverly"];
	} else if (metro["Sandringham"].indexOf(station) >= 0) {
			return metro["Sandringham"];
	} else alert("ERROR");
}

// The train directory
var metro = {
	Alamein:	["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
	"Glen Waverly": ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
	Sandringham: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
}

// HTML elements
var button = document.getElementById("submit");
var startStation = document.getElementById("startStation");
var endStation = document.getElementById("endStation");
var stopsDisplay = document.getElementById("stopsDisplay");
var routeDisplay = document.getElementById("routeDisplay")

button.addEventListener('click', function() {
	stopsDisplay.innerHTML = calcStops(startStation.options[startStation.selectedIndex].value, endStation.options[endStation.selectedIndex].value) + " stops";
	routeDisplay.innerHTML = getStops(startStation.options[startStation.selectedIndex].value, endStation.options[endStation.selectedIndex].value);
});

