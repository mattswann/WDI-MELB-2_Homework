// https://gist.github.com/mattswann/fae35dac6721373680c2
// I BUILT A FUN TRAIN LINE TO TRAVEL ON
// EDIT: MAINLY TO GO SEE BATMAN

var alameinLine = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenWaverlyLine = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringhamLine = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];
var batmanLine = ['Wayne Enterprises', 'Batcave', 'Richmond', 'Gotham CBD', 'Arkham Asylum'];

var metro = {
  Alamein: alameinLine,
  'Glen Waverly': glenWaverlyLine,
  Sandringham: sandringhamLine,
  'Gotham City': batmanLine
}

var origin = {
  station: '',
  line: ''
};

var destination = {
  station: '',
  line: ''
};

function getOrigin() {
  var originLine = prompt("Please choose your origin train line: Alamein, Glen Waverly, Sandringham or Gotham City.");
  while (metro[originLine] === undefined) {
    originLine = prompt("Your input was not recognised. Please choose your origin train line: Alamein, Glen Waverly, Sandringham or Gotham City.");
  }
  origin.line = originLine;

  var originStation = prompt("Please enter your origin station from the list: " + metro[originLine].join(", ") + ".");
  while (metro[originLine].indexOf(originStation) === -1) {
    originStation = prompt("Your station was not in the list. Please enter a station on the list: " + metro[originLine].join(", ") + ".");
  }
  origin.station = originStation;
}

function getDestination() {
  var destinationLine = prompt("Please choose your destination train line: Alamein, Glen Waverly, Sandringham or Gotham City.");
  while (metro[destinationLine] === undefined) {
    destinationLine = prompt("Your input was not recognised. Please choose your destination train line: Alamein, Glen Waverly, Sandringham or Gotham City.");
  }
  destination.line = destinationLine;

  var destinationStation = prompt("Please enter your destination station from the list: " + metro[destinationLine].join(", ") + ".");
  while (metro[destinationLine].indexOf(destinationStation) === -1) {
    destinationStation = prompt("Your station was not in the list. Please enter a station on the list: " + metro[destinationLine].join(", ") + ".");
  }
  destination.station = destinationStation;
}

function findStationIndex(station, line) {
  var stationIndex = metro[line].indexOf(station);
  return stationIndex;
}

function buildJourney(lineArray, startIndex, distance, direction) {
  var buildArray = [];
  if (direction === 1) {
    buildArray = metro[lineArray].slice(startIndex, (startIndex+distance+1));
  } else if (direction === -1) {
    buildArray = metro[lineArray].slice((startIndex - distance), (startIndex+1));
    buildArray.reverse();
  }
  return buildArray;
}

function calculateJourney() {
  var firstLineOriginIndex = findStationIndex(origin.station, origin.line);
  var firstLineIntersectIndex = findStationIndex("Richmond", origin.line);

  var firstLineDirection = 0;
  var firstLineDistance =  firstLineIntersectIndex - firstLineOriginIndex;

  if (firstLineOriginIndex > firstLineIntersectIndex) {
    firstLineDirection = -1;
  } else if (firstLineOriginIndex < firstLineIntersectIndex) {
    firstLineDirection = 1;
  } else {
    firstLineDirection = 1;
  }
  firstLineDistance *= firstLineDirection;

  var firstJourney = buildJourney(origin.line, firstLineOriginIndex, firstLineDistance, firstLineDirection);

  var lastLineDestinationIndex = findStationIndex(destination.station, destination.line);
  var lastLineIntersectIndex = findStationIndex("Richmond", destination.line);

  var lastLineDirection = 0;
  var lastLineDistance = lastLineDestinationIndex - lastLineIntersectIndex;

  if (lastLineIntersectIndex > lastLineDestinationIndex) {
    lastLineDirection = -1;
  } else if (lastLineIntersectIndex < lastLineDestinationIndex) {
    lastLineDirection = 1;
  }
  lastLineDistance *= lastLineDirection;

  var lastJourney = buildJourney(destination.line, lastLineIntersectIndex, lastLineDistance, lastLineDirection).slice(1);

  return firstJourney.concat(lastJourney);;
}

function calculateSingleLineJourney() {
  var originIndex = findStationIndex(origin.station, origin.line);
  var destinationIndex = findStationIndex(destination.station, destination.line);
  singleLineJourney = []

  if (originIndex > destinationIndex) {
    singleLineJourney = buildJourney(origin.line, originIndex, originIndex - destinationIndex, -1);
  } else if (originIndex < destinationIndex) {
    singleLineJourney = buildJourney(origin.line, originIndex, destinationIndex - originIndex, 1);
  } else {
    singleLineJourney = [origin.station];
  }
  return singleLineJourney;
}

getOrigin();
getDestination();

var journey = [];
if (origin.line === destination.line) {
  journey = calculateSingleLineJourney();
} else {
  journey = calculateJourney();
}

if (journey.length === 1) {
  console.log("You won't travel anywhere as you entered only one stop.");
  console.log("The stop is: " + journey.join(", ") + ".");
} else if (journey.length > 1) {
  console.log("You will travel " + journey.length + " stops.");
  console.log("The stops are: " + journey.join(", ") + ".");
}