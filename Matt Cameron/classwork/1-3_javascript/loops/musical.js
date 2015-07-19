var popSingers = ['Katy Perry', 'Taylor Swift', 'Miley Cyrus', 'Nicki Minaj', 'Madonna'];
var count = 0;

//While Loop

/*while (count < popSingers.length) {
	console.log(popSingers[count]);
	count++;
}
*/

//For Loop

/*for (var count = 0; count < popSingers.length; count++) {
	console.log("The number " + (count + 1) + " element is " + popSingers[count]);
}*/


//Backwards

for (var count = popSingers.length-1; count >= 0; count--) {
	console.log("The number " + (count + 1) + " element is " + popSingers[count]);
}