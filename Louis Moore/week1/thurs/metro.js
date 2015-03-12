var metro = {
	 alamein: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
	 glenWaverly: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
	 sandringham: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran','Windsor'],
}


var startPoint = metro.sandringham.indexOf('Windsor');
var exchangePoint = metro.sandringham.indexOf('Richmond');
var destinationPoint = metro.alamein.indexOf('Glenferrie');


//5
//2
//6


console.log(metro.sandringham[startPoint]);

//distance travelled from start to exchange
if (startPoint !== exchangePoint) {
	console.log(startPoint - exchangePoint);
	}


console.log(metro.sandringham[exchangePoint]);

//distance travelled from exchange to destination
if (exchangePoint !== destinationPoint) {
	console.log(destinationPoint - exchangePoint);
}

console.log(metro.alamein[destinationPoint])

