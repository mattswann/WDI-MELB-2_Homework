var trainLines = {
  'Alamein' : ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
  'Glen Waverly' : ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
  'Sandringham' : ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'],
  'Imaginary Line' : ['Bourke','Flinders Street' , 'Elizabeth', 'Swan station','Kooyong', 'Prada', 'Sprinster']
};

function planMyTrip(startLine, startStation, finishLine, finishStation){
    
  // setting initial array variable to store train-line's name and index of the stop in the train-line's array
  var startIndexArray = [startLine, trainLines[startLine].indexOf(startStation)];
  var finishIndexArray = [finishLine, trainLines[finishLine].indexOf(finishStation)];
  // storing the result of findIntersection function into intersection variable
  var intersection = findIntersection(startLine, startStation, finishLine, finishStation);

  // storing the transition endpoints on starting train-line and finishing train-line
  var transitionIndexStart = [startLine, trainLines[startLine].indexOf(intersection)];
  var transitionIndexFinish = [finishLine, trainLines[finishLine].indexOf(intersection)];

  // setting the validation for the input
  var invalidTrainLineCondition = !(trainLines.hasOwnProperty(startIndexArray[0]) && trainLines.hasOwnProperty(finishIndexArray[0]));
  var invalidTrainStopCondition = (startIndexArray[1] === -1) || (finishIndexArray[1] === -1);

  if (invalidTrainLineCondition || invalidTrainStopCondition){
    console.log("There's an incorrect input. Please make sure to input correct train lines and stops")
  } else if (intersection === undefined){
    console.log("There's no intersection connecting the line")
  }else if(startLine === finishLine){
    console.log("The total number of stops = " + (Math.abs(finishIndexArray[1] - startIndexArray[1])) );
    console.log("* Line " + startLine + " :");
    console.log(joinArray(startIndexArray[1], finishIndexArray[1], trainLines[startIndexArray[0]]));
  }else if(startStation === finishStation){ 
    console.log("The total number of stops = 0" );
    console.log("The journey is:");
    console.log(startStation);
  }else {
    var firstTotal = Math.abs(startIndexArray[1] - transitionIndexStart[1]);
    var secondTotal = Math.abs(finishIndexArray[1] - transitionIndexFinish[1]);
    console.log("The total number of stops = " + (firstTotal + secondTotal) );
    console.log("* Line " + startLine +  " (with "+ firstTotal +" stops) is:");
    console.log(joinArray(startIndexArray[1], transitionIndexStart[1], trainLines[startIndexArray[0]]));
    console.log("* Line " + startLine +  " (with "+ secondTotal +" stops):");
    console.log(joinArray(transitionIndexFinish[1], finishIndexArray[1], trainLines[finishIndexArray[0]]));
  }
};

// function to join array into a string
function joinArray(start, finish, array){
  if( start < finish ){
    return array.slice(start, finish + 1).join(' - ');
  } else {
    return array.slice(finish, start + 1).reverse().join(' - ');
  }
};

function getNumStops(startLine, startStation, finishLine, finishStation, intersection){
  var firstTotal = Math.abs(trainLines[startLine].indexOf(startStation) - trainLines[startLine].indexOf(intersection));
  var secondTotal = Math.abs(trainLines[finishLine].indexOf(finishStation) - trainLines[finishLine].indexOf(intersection));

  return [firstTotal, secondTotal, (firstTotal + secondTotal)];
};

function findIntersection(startLine, startStation, finishLine, finishStation){
  var transitStops = allIntersections(trainLines);
  var transit = transitStationObject(trainLines, transitStops);
  var intersection = [];
  for (var keys in transit){
      if(transit[keys].indexOf(startStation) !== -1 && transit[keys].indexOf(finishStation) !== -1 && trainLines[startLine].indexOf(keys) !== -1 && trainLines[finishLine].indexOf(keys) !== -1){
          intersection = intersection.concat(keys);
      }
  }
    if(intersection.length === 1){
        return intersection[0];
    } else{
        var minimum = Math.min.apply(Math,intersection.map(function(item){return getNumStops(startLine, startStation, finishLine, finishStation, item)[2] }));
        return intersection.filter(function(item){return getNumStops(startLine, startStation, finishLine, finishStation, item)[2] === minimum})[0];
    }
};

function transitStationObject(trainLines, array){
  var transitStation = {};
  for(var i=0; i < array.length;i++){
    var station = [];
    for (var keys in trainLines){
      if(trainLines[keys].indexOf(array[i]) !== -1){
        station = station.concat(trainLines[keys]);
        station.splice(station.indexOf(array[i]),1);
      }
    }
    transitStation[array[i]] = station.concat(array[i]);
  }
  return transitStation;
};

// collect all the transit stops in an array
function allIntersections(trainLines){
  var transit = [];
  for(var keys in trainLines){
    transit = transit.concat(trainLines[keys]);
  } 
  return transit = uniq(duplicate(transit));
};

// collect an array of duplicate items
function duplicate(array) { 
  var seen = {}; 
  var duplicate = {}; 
  return array.filter(function(item) { 
    return seen.hasOwnProperty(item) ? (duplicate[item] = true) : (seen[item] = false); 
  }); 
}

// collect an array of unique items
function uniq(array) {
    var seen = {};
    return array.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
} 