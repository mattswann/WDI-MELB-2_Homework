
var metro = {
	"Alamein": ["Flinders", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
	"Glen Waverly": ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
	"Sandringham": ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"],
}


//populates the line dropdown
function lineSelection(lineDropdown) {  
	for (var line in metro) {							// for..in loop initialises a variable that will hold one iteration of the 'object'
		var option = document.createElement("option");  //creates new option tagged element
		option.text = line;   							//assigning option.text with literal text of the key from metro
		option.value = line;							//assigning option.value the value of the key from metro
		document.getElementById(lineDropdown).appendChild(option);
	}
}


//populates the station dropdown
function displayStations(lineDropdown, stationDropdown) { 
	
	deleteStations(stationDropdown);					//clears stations

	var selectedLine = document.getElementById(lineDropdown).value; 
	var lineArray = metro[selectedLine];

	for (var i = 0; i <lineArray.length; i++) {						// iterates through the array associated with selectedLine to create <option>
		var option = document.createElement("option");				// with the value based on metro[selectedLine] at index i
		option.text = lineArray[i];									
		option.value = lineArray[i];								
		document.getElementById(stationDropdown).appendChild(option);
	}
}

/////////function to clear out station dropdown of previous values
function deleteStations(stationDropdown) { 
	var stations = document.getElementById(stationDropdown);
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

/////////// IF statement to determine which way to display array for first line
	var embark;
	if (start < indexStartRich) {
		var embark = (metro[startLine].slice(start+1, indexStartRich));
	} else {
		var embark = (metro[startLine].slice(indexStartRich, start).reverse());
		}

/////////// IF statement to determine which way to display array for second line
	var disembark;											
	if (finish < indexFinishRich) {												
		var disembark = (metro[stopLine].slice(finish, indexFinishRich).reverse());
	} else {
		var disembark = (metro[stopLine].slice(indexFinishRich, finish));
	}

	var journey = embark.concat(disembark);

	var result = "If you depart " + startStation.toUpperCase() + " and disembark at " + stopStation.toUpperCase() + 
				 " you will have travelled " + numberOfStops + " stop/s via " + journey;

	document.getElementById("display").innerHTML = result; //prints result to element with Id "display"
}

lineSelection("startLine"); //initialise the startLine drop list
lineSelection("stopLine"); //initialise the stopLine drop list
document.getElementById("btnGo").onclick = calcDistance;
