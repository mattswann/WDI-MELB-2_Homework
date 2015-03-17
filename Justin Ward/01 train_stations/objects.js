//make a program that takes the line + stop the user is getting on and off, and prints out all the stations in between.
//make objects lines and route

// TODO have to handle indexes so that richmond and / or destination is not returned twice. A unique! function would nail it.
var route = {
    stationStart: 'Southern Cross',
    stationEnd: 'Melbourne Central',
    routeArray: []
};

var lines = {
    alamein:     ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
    glenwaverly: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
    sandringham: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
};

// are start and end stations different? WORKS
function startEndSame(route){
    if (route.stationStart === route.stationEnd){
        return true;
    } else {
        return false;
    }
}

// are start and end stations on the same line? WORKS
function startEndSameLine(route,lines) {
    for (var line in lines) {
        if (lines.hasOwnProperty(line)) {
            if (contains(lines[line], route.stationStart) && contains(lines[line], route.stationEnd)) {
                return line;
            }
        }
    }
    return false;
}

// does array contain a value return BOOL.
function contains(arr, findValue) {
    var i = arr.length;

    while (i--) {
        if (arr[i] === findValue) return true;
    }
    return false;
}

//list all the stations from the passed station to Richmond in order. Return ordered array. WORKS
function stationsPerLine(start,end,rLine){
    var stationsInOrder = [];
    var startIndex = 0;
    var endIndex = 0;

    // find position of station in line array
    startIndex = rLine.indexOf(start);

    // find position of Richmond in line array
    endIndex = rLine.indexOf(end);

    console.log("endIndex:" + endIndex);
    console.log("startIndex:" + startIndex);

    //use slice
    if (startIndex < endIndex){
        stationsInOrder = rLine.slice(startIndex,endIndex);
    } else {
        stationsInOrder = rLine.slice(endIndex,startIndex); //have to reverse since richmond is earlier in the array
        stationsInOrder.reverse();
    }
    return stationsInOrder;
}

// create function that returns the line for any given station. WORKS
function whatLineIsStationOn(station, line){
    for (var line in lines) {
        if (lines.hasOwnProperty(line)) {
            if (contains(lines[line], station)) {
                return line;
            }
        }
    }
    return line;
}

Array.prototype.unique = function() {
    var o = {}, i, l = this.length, r = [];
    for(i=0; i<l;i+=1) o[this[i]] = this[i];
    for(i in o) r.push(o[i]);
    return r;
};

// controller function -stick all the WORKING parts together
function controllerGetStations(route, lines){
    var theLine;

    // TODO will be unpredictable if station start is Richmond. Pass in station in start end pair that is not Richmond.
    theLine = whatLineIsStationOn(route.stationStart);

    console.log("SHOW ALL STATIONS BETWEEN HERE AND THERE!");
    console.log('You want to go from: ' + route.stationStart + ' to ' + route.stationEnd);

    //are the start and end stations the same?
    if (startEndSame(route)){
        console.log("You are already at your destination. Have a look around.");
    } else {
        console.log("Here is a list of stations you will pass through in order:");
    }

    //are the start and end stations on the same line? If so -get solution, print and exit.
    if (startEndSameLine(route,lines)){
        console.log("Good news! You do not have to change lines");
        console.log("You can stay on the " + theLine + " line.");
        route.routeArray = stationsPerLine(route.stationStart,route.stationEnd,lines[theLine]);
        route.routeArray.unshift(route.stationStart);
        console.log("The stations are: " + route.routeArray);
    // otherwise calculate the multiline journey
    } else {
        var startLine, endLine;
        var multiLineJourneyOneA = [];
        var multiLineJourneyTwoA =[];

        startLine = whatLineIsStationOn(route.stationStart);
        endLine = whatLineIsStationOn(route.stationEnd);
        multiLineJourneyOneA = stationsPerLine(route.stationStart,'Richmond',lines[startLine]);
        multiLineJourneyTwoA = stationsPerLine('Richmond',route.stationEnd,lines[endLine]);
        console.log('multiLineJourneyOneA: ' + multiLineJourneyOneA);
        console.log('multiLineJourneyTwoA: ' + multiLineJourneyTwoA);
        route.routeArray = multiLineJourneyOneA.concat(multiLineJourneyTwoA);
    }
    //Add destination to end.
    route.routeArray.push(route.stationEnd);
    route.routeArray.unique();
    return route; //route object contains route array.
}

// START. runs here.
controllerGetStations(route,lines);

// DONE. Print the results.
console.log("There are " + route.routeArray.length + " stations on your journey. They are:");
console.log(route.routeArray.join());

// throw new Error("testing functions one at a time!");
// todo handle Richmond as start or destination.