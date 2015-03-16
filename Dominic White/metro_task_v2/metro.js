
var metro = {
	"Alamein": ["Flinders", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
	"Glen Waverly": ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
	"Sandringham": ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"],
}

//populates the startLine dropdown
function lineStartSelection(metro) {
	for (var line in metro) {
		var option = document.createElement("option");
		option.text = line;
		option.value = line;
		document.getElementById("startLine").appendChild(option);
	}
}

//populates the startStation dropdown
function displayStartStations(metro) {
	deleteStartStations(); //deletes previous start stations

	var selectedLine = document.getElementById("startLine").value;
	var lineArray = metro[selectedLine];

	for (var i = 0; i <lineArray.length; i++) {
		var option = document.createElement("option");
		option.text = lineArray[i];
		option.value = lineArray[i];
		document.getElementById("startStation").appendChild(option);
	}
}

function deleteStartStations() {
	var stations = document.getElementById("startStation");
	while(stations.options.length > 0) {
		stations.remove(0);
	}
}

//populates the stopLine dropdown
function lineStopSelection(metro) {
	for (var line in metro) {
		var option = document.createElement("option");
		option.text = line;
		option.value = line;
		document.getElementById("stopLine").appendChild(option);
	}
}

//populates the stopStation dropdown
function displayStopStations(metro) {
	deleteStopStations(); //deletes previous stop stations

	var selectedLine = document.getElementById("stopLine").value;
	var lineArray = metro[selectedLine];

	for (var i = 0; i <lineArray.length; i++) {
		var option = document.createElement("option");
		option.text = lineArray[i];
		option.value = lineArray[i];
		document.getElementById("stopStation").appendChild(option);
	}
}

function deleteStopStations() {
	var stations = document.getElementById("stopStation");
	while(stations.options.length > 0) {
		stations.remove(0);
	}
}

function calcDistance(start, finish) {
	var startLine = document.getElementById("startLine").value;
	var startStation = document.getElementById("startStation").value;
	var stopLine = document.getElementById("stopLine").value;		
	var stopStation = document.getElementById("stopStation").value;

	var start = metro[startLine].indexOf(startStation);			//gets the index of starting station
	var finish = metro[stopLine].indexOf(stopStation);			//gets the index of finishing station 

	/////// INDEX OF RICHMOND STATION ON THE STARTING/DEPARTURE LINE
	var indexStartRich;
	if (startLine === "Alamein") {
		indexStartRich = metro["Alamein"].indexOf("Richmond");
	} else if (startLine === "Glen Waverly") {
		indexStartRich = metro["Glen Waverly"].indexOf("Richmond");		
	} else if (startLine === "Sandringham") {
		indexStartRich = metro["Sandringham"].indexOf("Richmond");
	}

	/////// INDEX OF RICHMOND STATION ON THE FINISH/ARRIVAL LINE 	
		var indexFinishRich;
	if (stopLine === "Alamein") {										
		indexFinishRich = metro["Alamein"].indexOf("Richmond");
	} else if (stopLine === "Glen Waverly") {
		indexFinishRich = metro["Glen Waverly"].indexOf("Richmond");
	} else if (stopLine === "Sandringham") {
		indexFinishRich = metro["Sandringham"].indexOf("Richmond");
	}

		var tripPartOne;																	
	if (startLine === "Alamein") {								// 	This If statement determines which line's Richmond
		var tripPartOne = Math.abs(start - indexStartRich);		//	station index to use. It is then subtracted from the
	} else if (startLine === "Glen Waverly") {					//	index of the departure station. Integer is then converted
		var tripPartOne = Math.abs(start - indexStartRich);		//	into a positive via Math.abs()
	} else if (startLine === "Sandringham") {					
		var tripPartOne = Math.abs(start - indexStartRich);		
	}

	var tripPartTwo;
	if (stopLine === "Alamein") {								// 	This If statement determines which line's Richmond
		var tripPartTwo = Math.abs(finish - indexFinishRich);	//	station index to use. It is then subtracted from the
	} else if (stopLine === "Glen Waverly") {					//	index of the arrival station. Integer is then converted
		var tripPartTwo = Math.abs(finish - indexFinishRich);	//	into a positive via Math.abs()
	} else if (stopLine === "Sandringham") {
		var tripPartTwo = Math.abs(finish - indexFinishRich);	
	}

	var numberOfStops = tripPartOne + tripPartTwo;

	var embark;
	if (start < indexStartRich) {
		var embark = (metro[startLine].slice(start+1, indexStartRich));
	} else {
		var embark = (metro[startLine].slice(indexStartRich+1, start).reverse());
		}


	var disembark;
	if (finish < indexFinishRich) {
		var disembark = (metro[stopLine].slice(finish, indexFinishRich).reverse());
	} else {
		var disembark = (metro[stopLine].slice(indexFinishRich, finish));
	}
	console.log(disembark);
	var journey = embark.concat(disembark);
	console.log(journey.toString());

	var result = "If you depart " + startStation.toUpperCase() + " and disembark at " + stopStation.toUpperCase() + 
				 " you will have travelled " + numberOfStops + " stop/s via " + journey;

	document.getElementById("display").innerHTML = result;
}

lineStartSelection(metro);
lineStopSelection(metro);

document.getElementById("btnGo").onclick = calcDistance;
