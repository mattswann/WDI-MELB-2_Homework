/*
Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
*/


/*for(var i = 1; i <= 20; i++) {
	if (i%2 === 0) {
		console.log(i + " is even");
	} else {
		console.log(i + " is odd");
	}
}*/




/*
Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
*/

for(var i = 1; i <= 10; i++) {
	for(var a = 1; a <= 10; a++) {
		console.log(i + " * " + a + " = " + (i*a));
	}
}



/*
Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
*/

/*function assignGrade(score) {
	if (score >= 60 && score < 70 ) {
			return "You got a D";
		} else if (score >= 70 && score < 80) {
			return "You got a C";
		} else if (score >= 80 && score < 90) {
			return "You got a B";
		} else if (score >= 90 && score <= 100) {
			return "You got an A!";
		} else if (score < 60) {
			return "You got an F";
		} else {
			return "Your score was not valid";
		}

}
	for(var i= 60; i <= 100; i++) {
		console.log(i + ": " + assignGrade(i));
	}*/