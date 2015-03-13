var metro = {
	Alamein: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
	"Glen Waverly": ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
	Sandringham: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
}

var interchange = "Richmond";
var userLineFirst = "Alamein";
var userStopFirst = "Glenferrie";
var userLineLast = "Sandringham";
var userStopLast = "Windsor";
var totalStops = 0;
var indexStart;
var indexFinish;
var currLine = metro[userLineFirst];

console.log(userLineFirst + ": " + userStopFirst + " to " + userLineLast + ": " + userStopLast);

if (userLineFirst === userLineLast) {

	indexStart = findIndex(metro[userLineFirst],userStopFirst);
	indexFinish = findIndex(metro[userLineFirst],userStopLast);

	totalStops += countStops(indexStart,indexFinish);

} else {

	indexStart = findIndex(metro[userLineFirst],userStopFirst);
	indexFinish = findInterchange(userLineFirst);

	totalStops += countStops(indexStart,indexFinish);

	indexStart = findInterchange(userLineLast);
	indexFinish = findIndex(metro[userLineLast],userStopLast);

	totalStops += countStops(indexStart,indexFinish);
}

console.log("totalStops : " + totalStops);

function countStops (start,stop) {
// Computes the difference between two values and returns it
	var stops;

	if (start < stop) {
		stops = stop - start;
	} else {
		stops = start - stop;
	}

	return stops;
}

function findInterchange (line) {
// Determines the index value of the nominated interchange station
	return metro[line].indexOf(interchange);
}

function findIndex (line,stop) {
// Determines the index value of a stop on a line
	return line.indexOf(stop);
}