var trainLines = {
  'Alamein' : ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
  'Glen Waverly' : ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
  'Sandringham' : ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'],
  'Imaginary Line' : ['Bourke' , 'Elizabeth', 'Swan station', 'Prada', 'Sprinster', 'Richmond']
};

function planMyTrip(startLine, startStop, finishLine, finishStop){
  // setting initial array variable to store train-line's name and index of the stop in the train-line's array
  var startIndexArray = [startLine, trainLines[startLine].indexOf(startStop)];
  var finishIndexArray = [finishLine, trainLines[finishLine].indexOf(finishStop)];
  // storing the result of findIntersection function into intersection variable
  var intersection = findIntersection(startIndexArray, finishIndexArray);

  // storing the transition endpoints on starting train-line and finishing train-line
  var transitionIndexStart = [startLine, trainLines[startLine].indexOf(intersection)];
  var transitionIndexFinish = [finishLine, trainLines[finishLine].indexOf(intersection)];

  // setting the validation for the input
  var invalidTrainLineCondition = !(trainLines.hasOwnProperty(startIndexArray[0]) && trainLines.hasOwnProperty(finishIndexArray[0]));
  var invalidTrainStopCondition = (startIndexArray[1] === -1) || (finishIndexArray[1] === -1);

  if (invalidTrainLineCondition || invalidTrainStopCondition){
    console.log("There's an incorrect input. Please make sure to input correct train lines and stops")
  } else if(startLine == finishLine){
    console.log("The total number of stops " + (Math.abs(finishIndexArray[1] - startIndexArray[1])));
    console.log("The journey is:");
    console.log(joinArray(startIndexArray[1], finishIndexArray[1], trainLines[startIndexArray[0]]));
  } else {
    var firstTotal = Math.abs(startIndexArray[1] - transitionIndexStart[1]);
    var secondTotal = Math.abs(finishIndexArray[1] - transitionIndexFinish[1]);
    console.log("The total number of stops " + (firstTotal + secondTotal) );
    console.log("* This journey (with "+ firstTotal +" stops) is:");
    console.log(joinArray(startIndexArray[1], transitionIndexStart[1], trainLines[startIndexArray[0]]));
    console.log("* followed by the following journey (with "+ secondTotal +" stops):");
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

// function to find intersection stop between 2 train lines
function findIntersection(startIndexArray, finishIndexArray){
  // var starTrainArray = trainLines[startIndexArray[0]];
  // var finishTrainArray = trainLines[finishIndexArray[0]];
  // var result = '';
  // for(var i=0;i<starTrainArray .length;i++){
  //   for(var j=0; j<finishTrainArray.length;j++){
  //     if(starTrainArray[i]  == finishTrainArray[j]){
  //       return result = starTrainArray[i];
  //     }
  //   }
  // }
};

function transitStation(trainLines, array){
  var transitStation = {};
  for(var i=0; i < array.length;i++){
    var station = [];
    for (var keys in trainLines){
      if(trainLines[keys].indexOf(array[i]) !== -1){
        station.push(keys)
      }
    }
    transitStation[array[i]] = station
  }
  return transitStation;
};

function allIntersections(trainLines){
  var transit = [];
  for(var keys in trainLines){
    transit = transit + trainLines[keys];
  }

  //collect all the transit stops in an array
  return transit = uniq(duplicate(transit.split(',')));

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