var metro = {
	 alamein: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
	 glenWaverly: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
	 sandringham: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran','Windsor'],
}

var startLine = capitalizeFirstLetter(prompt('Your starting line?'));
var startPoint = capitalizeFirstLetter(prompt('You starting station?'));
var endline = capitalizeFirstLetter(prompt('Your end point line?'));
var endPoint = capitalizeFirstLetter(prompt('Your desintation station?'));
var interchange = 'Richmond';
var journey1 = startLine.indexOf(startPoint) - startLine.indexOf(interchange);
var journey2 = endline.indexOf(interchange) - endline.indexOf(endPoint);
var tripLength = Math.abs(journey1);
var tripTotal = Math.abs(journey1) + Math.abs(journey2);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//associate startLine prompt with metro.linename
if (startLine === 'Alamein') {
	startLine = metro.alamein;
} else if ((startLine === 'Glen waverly') || (startLine === 'Glen Waverly')) {
	startLine = metro.glenWaverly; 
} else if (startLine === 'Sandringham') {
	startLine = metro.sandringham;
}

//associate endline prompt with metro.linename
if (endline === 'Alamein') {
	endline = metro.alamein;
} else if ((endline === 'Glen waverly') || (endline === 'Glen Waverly')) {
	endline = metro.glenWaverly; 
} else if (endline === 'Sandringham') {
	endline = metro.sandringham;
}

if (startLine !== endline) {
		console.log('You trip from ' + startPoint + ' to ' + endPoint + ' will be ' + tripTotal + ' stations.' + ' You will need to change trains at ' + interchange);
	} else if (startLine === endline) {
		journey1 = startLine.indexOf(startPoint) - startLine.indexOf(endPoint);
		console.log('You trip from ' + startPoint + ' to ' + endPoint + ' will be ' + tripLength + ' stations');
	} else {
			prompt("Please enter a valid starting station & destination")
		}