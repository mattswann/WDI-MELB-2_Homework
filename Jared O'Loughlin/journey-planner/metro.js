// All 3 train lines intersect at Richmond, but there are NO other intersection points 
// as trains run express.

// Write a JS program that takes the line + stop that a user is getting on at and 
// the line + stop that user is getting off at and prints the total number of stops for the trip.

// Hints:

// Get your JS program to work for a single line before trying to tackle multiple lines. Consider diagramming the lines 
// by sketching out the train lines and their stops and intersection. Make train lines keys in a hash, while the values 
//are an array of all the stops on each line.

// The key to the lab is the intersection of the lines at Richmond.

// The Alamein line has the following stops: Flinders Street, Richmond, East Richmond, Burnley, Hawthorn, and Glenferrie.

// The Glen Waverly line has the following stops: Flagstaff, Melbourne Central, Parliament, Richmond, Kooyong and Tooronga.

// The Sandringham line has the following stops: Southern Cross, Richmond, South Yarra, Prahran, and Windso





var metro = {
    alameinLine: [
        "Flinders Street",
        "Richmond",
        "East Richmond",
        "Burnley",
        "Hawthorn",
        "Glenferrie"
    ],

    glenWaverly: [
        "Flinders Street",
        "Richmond",
        "East Richmond",
        "Burnley",
        "Hawthorn",
        "Glenferrie"
    ]

}


function distanceBtwStops(trainLine, whereFrom, whereTo){
    // Find the difference btw the 2 stops:
    var difference = metro.alameinLine.indexOf(whereFrom) - metro.alameinLine.indexOf(whereTo);
    
    // Deal with negative numbers:
    var amtOfStops = Math.abs(difference);

    console.log('Your trip will be ' + amtOfStops + " stops");


}

distanceBtwStops("Alamein", "Richmond", "Burnley");











