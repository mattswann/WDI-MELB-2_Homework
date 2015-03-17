alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn','Glenferrie'],
glenWaverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']


var depStation = 'Glenferrie'
var destStation = 'Tooronga'
 
var journeyPart1 = alamein.indexOf(depStation) - alamein.indexOf('Flinders Street')

var journeyPart1 = alamein.indexOf(depStation) - alamein.indexOf('Richmond') 

var journeyPart2 = glenWaverly.indexOf('Richmond') - glenWaverly.indexOf(destStation)


var totalTrip = journeyPart2 - journeyPart1
var trip = Math.abs(totalTrip)

console.log(trip)
