/* BASED INPUTS */

// Main Input
var originDestStop = "Burnley"; // User input start station
var targetDestStop = "Flagstaff"; // User input stop end station

// Objects
var metro = {
	alamein: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
	glenWaverly: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
	sandringham: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
}

/* Origin Destination Call the Train Line */

// Alamein
var originAlameinStop = metro.alamein.indexOf(originDestStop);
var inAlameinStop = metro.alamein[originAlameinStop];
var targetAlameinStop = metro.alamein.indexOf(targetDestStop);
var outAlameinStop = metro.alamein[targetAlameinStop];

// Glen Waverley
var originGlenWaverleyStop = metro.glenWaverly.indexOf(originDestStop);
var inGlenWaverleyStop = metro.glenWaverly[originGlenWaverleyStop];
var targetGlenWaverleyStop = metro.glenWaverly.indexOf(targetDestStop);
var outGlenWaverleyStop = metro.glenWaverly[targetGlenWaverleyStop];

// Sandringham
var originSandringhamStop = metro.sandringham.indexOf(originDestStop);
var inSandringhamStop = metro.sandringham[originSandringhamStop];
var targetSandringhamStop = metro.sandringham.indexOf(targetDestStop);
var outSandringhamStop = metro.sandringham[targetSandringhamStop];

// Find which line is the origin dest
if(originDestStop == inAlameinStop) {
	var originDestLine = "alamein";
	var originDestLineOutput = "Alamein";
} else if (originDestStop == inGlenWaverleyStop) {
	var originDestLine = "glenWaverly";
	var originDestLineOutput = "Glen Waverley";
} else if (originDestStop == inSandringhamStop) {
	var originDestLine = "sandringham";
	var originDestLineOutput = "Sandringham";
} else {
	document.write("Metro Line Not Found, please contact Metro");
}

// Find which line is the target dest
if(targetDestStop == outAlameinStop) {
	var targetDestLine = "alamein";
	var targetDestLineOutput = "Alamein";
} else if (targetDestStop == outGlenWaverleyStop) {
	var targetDestLine = "glenWaverly";
	var targetDestLineOutput = "Glen Waverley";
} else if (targetDestStop == outSandringhamStop) {
	var targetDestLine = "sandringham";
	var targetDestLineOutput = "Sandringham";
} else {
	document.write("Metro Line Not Found, please contact Metro");
}

var originDestStopIndex = metro[originDestLine].indexOf(originDestStop); 
var targetDestStopIndex = metro[targetDestLine].indexOf(targetDestStop);

/* FUNCTIONS */

if(originDestLine === targetDestLine) {

		if(targetDestStopIndex > originDestStopIndex ){

			originDestStopIndex += 1;
			var totalSameJourneyLine = Math.abs(targetDestStopIndex - originDestStopIndex);
			var originListJourneyStop = metro[originDestLine].slice(originDestStopIndex, targetDestStopIndex);
			var originListJourneyStopJoin = originListJourneyStop.join(" > ");

		} else if (targetDestStopIndex < originDestStopIndex) {

			targetDestStopIndex += 1;
			var totalSameJourneyLine = Math.abs(originDestStopIndex - targetDestStopIndex);
			var originListJourneyStop = metro[originDestLine].slice(targetDestStopIndex, originDestStopIndex);
			originListJourneyStop.reverse();
			var originListJourneyStopJoin = originListJourneyStop.join(" > ");

		} else {
			document.write("You are in the stop, please contact Metro");
		}

	document.write("You are in <strong style='color:red;'>" + targetDestLineOutput + "</strong> line " + " - total stop = <strong style='color:red;'>" + totalSameJourneyLine + "</strong> - Your stops are <strong style='color:red;'>" + originListJourneyStopJoin + "</strong>");

} else {

	// Richmond
	var originRichmondStop =  metro[originDestLine].indexOf("Richmond");
	var targetRichmondStop =  metro[targetDestLine].indexOf("Richmond");
		
		if(targetDestStopIndex > targetRichmondStop && originDestStopIndex < originRichmondStop ){

			originDestStopIndex +=1;
			var subTotalOriginDiffJourneyLine = Math.abs(originRichmondStop - originDestStopIndex);
			var originRichmondListJourneyStop = metro[originDestLine].slice(originDestStopIndex, originRichmondStop);
			var originRichmondListJourneyStopJoin = originRichmondListJourneyStop.join(" > ");

			targetRichmondStop +=1;
			var subTotalTargetDiffJourneyLine = Math.abs(targetDestStopIndex - targetRichmondStop);
			var targetRichmondListJourneyStop = metro[targetDestLine].slice(targetRichmondStop, targetDestStopIndex);
			var targetRichmondListJourneyStopJoin = targetRichmondListJourneyStop.join(" > ");

			var allTotalJourneyStop = subTotalOriginDiffJourneyLine + subTotalTargetDiffJourneyLine + 1;

			document.write("You are in currently in <strong style='color:red;'>" + originDestLineOutput + "</strong> line " + " - go to <strong style='color:red;'>" + originRichmondListJourneyStopJoin + "</strong> - <strong style='color:orange;'>Richmond</strong> change for <strong style='color:red;'>" + targetDestLineOutput + "</strong> Line, and proceed to = <strong style='color:red;'>"+ targetRichmondListJourneyStopJoin + "</strong>" + " <br/> Total of : <strong>" + allTotalJourneyStop + "</strong> stops");

		} else if (targetDestStopIndex > targetRichmondStop && originDestStopIndex > originRichmondStop) {

			originRichmondStop +=1;
			var subTotalOriginDiffJourneyLine = Math.abs(originDestStopIndex - originRichmondStop );
			var originRichmondListJourneyStop = metro[originDestLine].slice(originRichmondStop , originDestStopIndex);
			originRichmondListJourneyStop.reverse();
			var originRichmondListJourneyStopJoin = originRichmondListJourneyStop.join(" > ");

			targetRichmondStop +=1;
			var subTotalTargetDiffJourneyLine = Math.abs(targetDestStopIndex - targetRichmondStop);
			var targetRichmondListJourneyStop = metro[targetDestLine].slice(targetRichmondStop, targetDestStopIndex);
			var targetRichmondListJourneyStopJoin = targetRichmondListJourneyStop.join(" > ");

			var allTotalJourneyStop = subTotalOriginDiffJourneyLine + subTotalTargetDiffJourneyLine + 1;

			document.write("You are in currently in <strong style='color:red;'>" + originDestLineOutput + "</strong> line " + " - go to <strong style='color:red;'>" + originRichmondListJourneyStopJoin + "</strong> - <strong style='color:orange;'>Richmond</strong> change for <strong style='color:red;'>" + targetDestLineOutput + "</strong> Line, and proceed to = <strong style='color:red;'>"+ targetRichmondListJourneyStopJoin + "</strong>" + " <br/> Total of : <strong>" + allTotalJourneyStop + "</strong> stops");

		} else if (targetDestStopIndex < targetRichmondStop && originDestStopIndex > originRichmondStop) {

			originRichmondStop +=1;
			var subTotalOriginDiffJourneyLine = Math.abs(originDestStopIndex - originRichmondStop );
			var originRichmondListJourneyStop = metro[originDestLine].slice(originRichmondStop , originDestStopIndex);
			originRichmondListJourneyStop.reverse();
			var originRichmondListJourneyStopJoin = originRichmondListJourneyStop.join(" > ");

			targetDestStopIndex +=1;
			var subTotalTargetDiffJourneyLine = Math.abs(targetDestStopIndex - targetRichmondStop);
			var targetRichmondListJourneyStop = metro[targetDestLine].slice(targetDestStopIndex, targetRichmondStop);
			targetRichmondListJourneyStop.reverse();
			var targetRichmondListJourneyStopJoin = targetRichmondListJourneyStop.join(" > ");

			var allTotalJourneyStop = subTotalOriginDiffJourneyLine + subTotalTargetDiffJourneyLine + 1;

			document.write("You are in currently in <strong style='color:red;'>" + originDestLineOutput + "</strong> line " + " - go to <strong style='color:red;'>" + originRichmondListJourneyStopJoin + "</strong> - <strong style='color:orange;'>Richmond</strong> change for <strong style='color:red;'>" + targetDestLineOutput + "</strong> Line, and proceed to = <strong style='color:red;'>"+ targetRichmondListJourneyStopJoin + "</strong>" + " <br/> Total of : <strong>" + allTotalJourneyStop + "</strong> stops");

		} else if(targetDestStopIndex < targetRichmondStop && originDestStopIndex < originRichmondStop) {

			originDestStopIndex +=1;
			var subTotalOriginDiffJourneyLine = Math.abs(originRichmondStop - originDestStopIndex);
			var originRichmondListJourneyStop = metro[originDestLine].slice(originDestStopIndex, originRichmondStop);
			var originRichmondListJourneyStopJoin = originRichmondListJourneyStop.join(" > ");

			targetDestStopIndex +=1;
			var subTotalTargetDiffJourneyLine = Math.abs(targetDestStopIndex - targetRichmondStop);
			var targetRichmondListJourneyStop = metro[targetDestLine].slice(targetDestStopIndex, targetRichmondStop);
			targetRichmondListJourneyStop.reverse();
			var targetRichmondListJourneyStopJoin = targetRichmondListJourneyStop.join(" > ");

			var allTotalJourneyStop = subTotalOriginDiffJourneyLine + subTotalTargetDiffJourneyLine + 1;

			document.write("You are in currently in <strong style='color:red;'>" + originDestLineOutput + "</strong> line " + " - go to <strong style='color:red;'>" + originRichmondListJourneyStopJoin + "</strong> - <strong style='color:orange;'>Richmond</strong> change for <strong style='color:red;'>" + targetDestLineOutput + "</strong> Line, and proceed to = <strong style='color:red;'>"+ targetRichmondListJourneyStopJoin + "</strong>" + " <br/> Total of : <strong>" + allTotalJourneyStop + "</strong> stops");
		}
}


/**** TO BE USE ***/
// // Change into string
// for (var originAlameinStationStart = 0; originAlameinStationStart < metro.alamein.length; originAlameinStationStart++){
// 	var inAlameinStop = metro.alamein[originAlameinStop];
// }
// for (var originAlameinStation = 0; originAlameinStation < metro.alamein.length; originAlameinStation++){
// 	var outAlameinStop = metro.alamein[targetAlameinStop];
// }


// for (var glenWaverleyStation = 0; glenWaverleyStation < metro.glenWaverly.length; glenWaverleyStation++){
// 	var glenWaverleyStop = metro.glenWaverly[originGlenWaverleyStop];
// }

// for (var sandringhamStation = 0; sandringhamStation < metro.sandringham.length; sandringhamStation++){
// 	var sandringhamStop = metro.sandringham[originSandringhamStop];
// }

// // GlenWaverley
// for (var glenWaverleyStation = 0; glenWaverleyStation < metro.glenWaverley.length; glenWaverleyStation++){
// 	var glenWaverleyStop = metro.glenWaverley[glenWaverleyStation];

// 	if(originDestStop == glenWaverleyStop) {
// 		var originDestLine = "glenWaverley";
// 	}
// }

// // Sandringham
// for (var sandringhamStation = 0; sandringhamStation < metro.sandringham.length; sandringhamStation++){
// 	var sandringhamStop = metro.sandringham[sandringhamStation];

// 	if(originDestStop == sandringhamStop) {
// 		var originDestLine = "sandringham";
// 	}
// }




// if (originDestStop == metro["alamein"].indexOf(originDestStop)){
// 	console.log("true");
// } else {
// 	console.log("not working");
// }

// for(var name in metro) {
//     console.log(name);
//     // alert(name);
//     var value = metro[name];
//     console.log(value);
// }

// for(var i = 0; i < Objects.keys(metro).length; i++){
// 	var metroLines
// 	console.log(i);
// }

// var findMetroLineOrigin = function(originDestStop , i){
// 	if(originDestStop === )
// };
// var findMetroLineTarget = metro[targetDestStop];

/* Question, how do I know which line is that stop? */ 

/* Comment: Trying to seperate the string and index, so it will be easier to connecting user input */

// Find the object property array string from the user input start line
// var originDestLineArray = metro[originDestLine]; 

// // Find the index for the start stop station
// var originDestStopIndex = originDestLineArray.indexOf(originDestStop); 

// // Find the object property array string from the user input end line
// var targetDestLineArray = metro[targetDestLine]; 

// // Find the index for the end stop station
// var targetDestStopIndex = targetDestLineArray.indexOf(targetDestStop);




/* FUNCTIONS */

// if(originDestLine === targetDestLine) {
// 	console.log("same line! total stop = ");
// } else {
// 	console.log("Diff Line");
// }

// for(var i = 0; i < metro.length; i++){
// 	var metroLines = metro[i];

// 	if(metroLines.alamein === targetDestStop ){
// 		console.log("true");
// 	}
// }
