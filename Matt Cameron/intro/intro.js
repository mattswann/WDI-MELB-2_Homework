var whatYear = prompt("I'm a time traveller, what year is this?");
var d = new Date();
var currentYear = d.getFullYear();
var response;

if (whatYear > 2015) {
		response = "Whoa! Blast from the past! I thought it was " + currentYear + ".";
} else if (whatYear < 2015 ) {
		response = "I thought it was " + currentYear + ". Greetings from the future!";
} else if (whatYear === '2015') {
		response = "Nice, I'm back to the present!";
} else {
	response = "Holy Moly, I must be in an alternate universe! I thought it was " + currentYear + ".";
}
console.log(response);