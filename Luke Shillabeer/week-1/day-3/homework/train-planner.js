/*
  TODO: This needs ACTUAL, PROPER commenting becuase as it stands, I have
  to think about how it works for like, ten minutes and it's 1:15am and I'm
  done for the night #inthecommitsforevz
*/


var metro = {
  alamein:     ["Flinders Street", "Richmond", "East Richmond", "Burnley"],
  glenWaverly: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
  sandringham: ["Southern Cross", "Richmond", "South Yarra", "Prahan", "Windsor"],
  lines:       ["alamein","glenWaverly","sandringham"],
}

function findLine(station) {
  for (var line in metro["lines"]) {
    var currentLine = metro[metro["lines"][line]];

    // check the current line for the station, if it exists set startLine
    // to currentLine - this loops more than it needs to, but watevz
    currentLine.forEach(function(iterStation) {
      if (station === iterStation)
         result = metro["lines"][line];
    });
  }
  return result;
}

function findStopOnLine(line, station) {
  var result;
  /*
    lol I can't remember what this was for, but I remember it was part
    of a plan, so it stays so I can remember!
  */
}

function lineStations(start, stop, line) {
  // returns a single line's appropriate stations, taking direction of
  // travel into account.
  if (start > stop) {
    return line.slice(stop, start + 1).reverse();
  } else {
    return line.slice(start, stop + 1);
  }
}

function travel(start, stop) {
  var startLine  = findLine(start);
  var startIndex = metro[startLine].indexOf(start);
  var stopLine   = findLine(stop);
  var stopIndex  = metro[stopLine].indexOf(stop);
  var journey    = [];

  if (startLine === stopLine) {
    console.log(lineStations(startIndex, stopIndex, metro[startLine]));
  } else {
    // will only work with a single instance of intersection e.g.
    // currently you can't move through 3+ lines.
    var startInterceptIdx = metro[startLine].indexOf("Richmond");
    var stopInterceptIdx  = metro[stopLine].indexOf("Richmond");

    console.log(lineStations(startIndex, startInterceptIdx, metro[startLine]));
    console.log(lineStations(stopInterceptIdx, stopIndex, metro[stopLine]));
  }
}

travel("Prahan", "Prahan");
