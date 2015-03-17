// All 3 train lines intersect at Richmond, but there are NO other intersection points as trains run express.

// Write a JS program that takes the line + stop that a user is getting on at and the line + stop that user is getting off at and prints the total number of stops for the trip.

// Hints:

// Get your JS program to work for a single line before trying to tackle multiple lines. Consider diagramming the lines by sketching out the train lines and their stops and intersection. Make train lines keys in a hash, while the values are an array of all the stops on each line.

// The key to the lab is the intersection of the lines at Richmond.

// Non-Required Bonus:

// List the stations on the journey in order of travel
// Use input validation
// User must enter a line and station in the subway network
// If the user enters something else, your program should handle it
// Add an additional lines
// Allow trains to have multiple intersection points

var x = 'Jeff';

var Sandringham = ['Southern Cross ', 'Richmond ', 'South Yarra ', 'Prahran ', 'Windsor'];
var Alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var Glen_Waverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];

var depStation = 'Flagstaff' //add prompt('get from user') once working add getElementById from html page
var depLine = 'Glen_Waverly'
var destStation = 'South Yarra'
var destLine = 'Sandringham'
//var line still required.

//below code.. use of indexOf command 
var journeyPart1 = Alamein.indexOf(depStation) - Alamein.indexOf('Flinders Street')
var journeyPart1 = Alamein.indexOf(depStation) - Alamein.indexOf('Richmond')
var journeyPart2 = Alamein.indexOf('Richmond') - Alamein.indexOf(destStation)

var journeyPart1 = Sandringham.indexOf(depStation) - Sandringham.indexOf('Southern Cross')
var journeyPart1 = Sandringham.indexOf(depStation) - Sandringham.indexOf('Richmond')
var journeyPart2 = Sandringham.indexOf('Richmond') - Sandringham.indexOf(destStation)

var journeyPart1 = Glen_Waverly.indexOf(depStation) - Glen_Waverly.indexOf('Flagstaff')
var journeyPart1 = Glen_Waverly.indexOf(depStation) - Glen_Waverly.indexOf('Richmond')
var journeyPart2 = Glen_Waverly.indexOf('Richmond') - Glen_Waverly.indexOf(destStation)


//calculates dept station, dest station, and the amount of stations travelled.
var totalTrip = journeyPart2 - journeyPart1
var trip = Math.abs(totalTrip)
console.log(trip) //total stations travelled

var aUserJourney = 
	Math.abs(depLine.indexOf(depStation))
 - 	Math.abs(depLine.indexOf('Richmond'))
 + 	Math.abs(destLine.indexOf('Richmond'))
 - 	Math.abs(destLine.indexOf(destStation))

//these variables are designed to create new arrays from the depStation to destStation jOne, jTwo, jThree.
var jOneIndex = Alamein.indexOf('Richmond')
var jOne = Alamein.slice(0, jOneIndex + 1)
var jOneReverse = Alamein.reverse(Alamein)
var jOneSlice = Alamein.slice(jOneIndex + 1, Alamein.length)
console.log(jOneIndex)
console.log(jOne)
console.log(jOneReverse)
console.log(jOneSlice)

var jTwoIndex = Glen_Waverly.indexOf('Richmond')
var jTwo = Glen_Waverly.slice(0, jTwoIndex + 1)
var jTwoReverse = Glen_Waverly.reverse(Glen_Waverly)
var jTwoSlice= Glen_Waverly.slice(jTwoIndex + 1, Glen_Waverly.length)
console.log(jTwoIndex)
console.log(jTwo)
console.log(jTwoReverse)
console.log(jTwoSlice)

var jThreeIndex = Sandringham.indexOf('Richmond')
var jThree = Sandringham.slice(0, jThreeIndex + 1)
var jThreeReverse = Sandringham.reverse(Sandringham)
var jThreeSlice = Sandringham.slice(jThree + 1, Sandringham.length)
console.log(jThreeIndex)
console.log(jThree)
console.log(jThreeReverse)
console.log(jThreeSlice)

function logStations1(array) {
//console.log(array);
return array;
}

function logStations2(array) {
//console.log(array);
return array;
}

function logStations3(array) {
//console.log(array)
return array;
}

jOne.forEach(logStations1)
jTwoSlice.forEach(logStations2)
jThreeSlice.forEach(logStations3)

//joins the two together and updates jOne
Array.prototype.push.apply(jOne, jTwoSlice, jThreeSlice) 
Array.prototype.push.apply(jTwo, jThreeSlice, jOneSlice)
Array.prototype.push.apply(jThree, jOneSlice, jTwoSlice)
//console.log(jOne);

var jFour = (jOne, jTwo, jThree)

//list the stations travelled through from depStation to destStation.

if (depLine.indexOf(depStation) > depLine.indexOf('Richmond')) {
	var aUserJourney = depLine.indexOf(depStation) - depLine.indexOf('Richmond') + destLine.indexOf('Richmond') - destLine.indexOf(destStation)
}
else {
	var aUserJourney = depLine.indexOf(depStation) + depLine.indexOf('Richmond') + destLine.indexOf('Richmond') - destLine.indexOf(destStation)
}

//asks the question, departed station, destination station, how many stations travelled and which?, 	
console.log('When ' + x + ' hops on at the ' + depLine + ' train station his trip will begin at ' + depStation + ' station, then hops of at ' + destStation + ' station, he has travelled ' + trip + ' stations.' + ' Jeff will have travlled via ' + jFour +' stations.'); //this works except for jFour!!!!!


/*
var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn','Glenferrie']
var glenWaverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']

var jOneIndex = alamein.indexOf('Richmond')
var jOne = alamein.slice(0, jOneIndex+1)

var jTwoIndex = glenWaverly.indexOf('Richmond')
var jTwoReverse = glenWaverly.reverse(glenWaverly)
var jTwoSlice= glenWaverly.slice(jTwoIndex+1, glenWaverly.length)

function logStations1(element, index, array) {
console.log(array);
return array;
}

function logStations2(element, index, array) {
console.log(array);
return array;
}

jOne.forEach(logStations1)
jTwoSlice.forEach(logStations2)

Array.prototype.push.apply(jOne, jTwoSlice) //joins the two together and updates jOne

console.log(jOne);
*/