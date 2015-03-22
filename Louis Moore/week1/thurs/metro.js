var metro = {
	 alamein: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
	 glenWaverly: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
	 sandringham: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran','Windsor'],
}

// var startLine = upCase(prompt('Your starting line?'));
// var startPoint = upCase(prompt('You starting station?'));
// var endLine = upCase(prompt('Your end point line?'));
// var endPoint = upCase(prompt('Your desintation station?'));
// var interchange = 'Richmond';

var startLine = ''
var startPoint = ''
var endLine = ''
var endPoint = ''
var interchange = 'Richmond';

var journey1 = startLine.indexOf(startPoint) - startLine.indexOf(interchange);
var journey2 = endLine.indexOf(interchange) - endLine.indexOf(endPoint);
var tripLength = Math.abs(journey1);
var tripTotal = Math.abs(journey1) + Math.abs(journey2);



function upCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function startingLine() {
if (startLine === 'Alamein') {
	startLine = metro.alamein;
} else if ((startLine === 'Glen waverly') || (startLine === 'Glen Waverly')) {
	startLine = metro.glenWaverly; 
} else if (startLine === 'Sandringham') {
	startLine = metro.sandringham;
}
};

function endingLine() {
if (endLine === 'Alamein') {
	endLine = metro.alamein;
} else if ((endLine === 'Glen waverly') || (endLine === 'Glen Waverly')) {
	endLine = metro.glenWaverly; 
} else if (endLine === 'Sandringham') {
	endLine = metro.sandringham;
}
};


function logJourney() {
if (startLine != endLine) {
		console.log('You trip from ' + startPoint + ' to ' + endPoint + ' will be ' + tripTotal + ' stations.' + ' You will need to change trains at ' + interchange);
	} else if (startLine === endLine) {
		console.log('You trip from ' + startPoint + ' to ' + endPoint + ' will be ' + tripLength + ' stations');
	} else {
			prompt("Please enter a valid starting station & destination")
		}
};

var startLineSelect = document.getElementById('startLineSelect')
startLineSelect.addEventListener('change', startingLine)

var endLineSelect = document.getElementById('endLineSelect');
endLineSelect.addEventListener('change', endingLine)