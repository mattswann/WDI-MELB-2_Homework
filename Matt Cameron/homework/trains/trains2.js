function getStops(start, end) {

	var line = metro[checkLine(start)];
	var hopOn = line.indexOf(start);
	var hopOff = line.indexOf(end);
	var route;

	// only same line is passed in
	if (hopOn <= hopOff) {
		route = line.slice(hopOn, hopOff+1);
		$stopsDisplay.html(route.length + " stops.");
		$routeDisplay.html(route.join(", "))
		} else {
				route = line.slice(hopOff, hopOn);
				$stopsDisplay.html(route.length + " stops.");
				$routeDisplay.html(route.reverse().join(", "));
		}
};

function checkLine(station) {
		// handle Richmond differently because it is on all lines
	  if (station === "Richmond") {
	  		//if starting at Richmond, set the line to the end station's line
	  	if ($startStation.val() === "Richmond") {
	  		return checkLine($endStation.val());
	  	} else { // if ending at Richmond, set the line to the start station's line
	  		return checkLine($startStation.val());
	  	}
	} else if (_.contains(metro["alamein"], station)) {
			return "alamein";
	} else if (_.contains(metro["glen waverly"], station)) {
			return "glen waverly";
	} else if (_.contains(metro["sandringham"], station)) {
			return "sandringham";
	} else alert("ERROR");
}


// The train directory
var metro = {
	alamein:	["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
	"glen waverly": ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
	sandringham: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
}




	var $startStation = $('#startStation');
	var $endStation = $('#endStation');



$('form').on('submit', function(event) {
	event.preventDefault();


	// if on the same line
	if (checkLine($startStation.val()) === checkLine($endStation.val())) {
		getStops($startStation.val(), $endStation.val());
	} else {
		// if on different lines
		var step1 = getStops($startStation.val(), "Richmond"));
		console.log(getStops("Richmond", $endStation.val()));

	}


});

var $stopsDisplay = $('#stopsDisplay');
var $routeDisplay = $('#routeDisplay');

