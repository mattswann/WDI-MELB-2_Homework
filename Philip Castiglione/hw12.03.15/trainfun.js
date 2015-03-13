// https://gist.github.com/mattswann/fae35dac6721373680c2
// I BUILT A FUN TRAIN LINE TO TRAVEL ON
// EDIT: MAINLY TO GO SEE BATMAN

// build train network object
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

// build objects to store travel locations
var origin = {
  station: '',
  line: ''
};
var destination = {
  station: '',
  line: ''
};

// does what it says on the box
function getUserLine(point, defaultLine) {
  var line = prompt("Please choose your " + point + " train line: Alamein, Glen Waverly, Sandringham or Gotham City.");
  // validate input with annoyingly specific requirements
  var whileBreak = 0;
  while (metro[line] === undefined) {
    whileBreak ++;
    if (whileBreak > 10) {
      // catch infinite loop errors
      alert("You've either failed to enter input correctly ten times or something has gone wrong!");
      alert("Defaulting line to " + defaultLine + ".");
      line = defaultLine;
      break;
    }
    line = prompt("Your input was not recognised. Please choose your " + point + " train line: Alamein, Glen Waverly, Sandringham or Gotham City.");
  }
  return line;
}

function getUserStation(point, line, defaultStation) {
  var station = prompt("Please enter your " + point + " station from the list: " + metro[line].join(", ") + ".");
  // validate input with annoyingly specific requirements
  var whileBreak = 0;
  while (metro[line].indexOf(station) === -1) {
    whileBreak++;
    if (whileBreak > 10) {
      // catch infinite loop errors
      alert("You've either failed to enter input correctly ten times or something has gone wrong!");
      alert("Defaulting station to " + defaultStation + ".");
      station = defaultStation;
      break;
    }
    station = prompt("Your station was not in the list. Please enter a station on the list: " + metro[line].join(", ") + ".");
  }
  return station;
}

// get user location input
origin.line = getUserLine("origin", "Alamein");
origin.station = getUserStation("origin", origin.line, "Hawthorn");
destination.line = getUserLine("destination", "Sandringham");
destination.station = getUserStation("destination", destination.line, "Windsor");

// hardcode stations for testing engine
// origin.line = "Alamein";
// origin.station = "Flinders Street";
// destination.line = "Gotham City";
// destination.station = "Arkham Asylum";

// does what it says on the box
function findStationIndex(station, line) {
  var stationIndex = metro[line].indexOf(station);
  return stationIndex;
}

// does what it says on the box
function buildSegment(line, startIndex, distance, direction) {
  var buildArray = [];
  if (direction === 1) {
    buildArray = metro[line].slice(startIndex, (startIndex+distance+1));
  } else if (direction === -1) {
    buildArray = metro[line].slice((startIndex - distance), (startIndex+1));
    buildArray.reverse();
  }
  return buildArray;
}

// this is bad
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

  var firstJourney = buildSegment(origin.line, firstLineOriginIndex, firstLineDistance, firstLineDirection);

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

  //slice removes interchange duplication
  var lastJourney = buildSegment(destination.line, lastLineIntersectIndex, lastLineDistance, lastLineDirection).slice(1);

  return firstJourney.concat(lastJourney);;
}

// also bad
function calculateSingleLineJourney() {
  var originIndex = findStationIndex(origin.station, origin.line);
  var destinationIndex = findStationIndex(destination.station, destination.line);
  singleLineJourney = []

  if (originIndex > destinationIndex) {
    singleLineJourney = buildSegment(origin.line, originIndex, originIndex - destinationIndex, -1);
  } else if (originIndex < destinationIndex) {
    singleLineJourney = buildSegment(origin.line, originIndex, destinationIndex - originIndex, 1);
  } else {
    singleLineJourney = [origin.station];
  }
  return singleLineJourney;
}

// follow on badness
var journey = [];
if (origin.line === destination.line) {
  journey = calculateSingleLineJourney();
} else {
  journey = calculateJourney();
}

// output
if (journey.length === 1) {
  document.write("You won't travel anywhere as you entered only one stop.<br/>");
  document.write("The stop is: " + journey.join(", ") + ".<br/>");
} else if (journey.length > 1) {
  document.write("You will travel " + journey.length + " stops.<br/>");
  document.write("The stops are: " + journey.join(", ") + ".<br/>");
}