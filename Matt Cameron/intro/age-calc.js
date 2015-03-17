/*
Forgot how old you are? Calculate it!

Write a function named calculateAge that:

takes 2 arguments: birth year, current year.
calculates the 2 possible ages based on those years. outputs the result to the screen like so: "You are either NN or NN"
Call the function three times with different sets of values.

Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/
var birthYear = prompt("What year were you born?");
var currentYear = new Date().getFullYear();

function calculateAge(b, c) {
	var age1 = c - b;
	var age2 = c -	b -1;
	console.log("Born in " + birthYear + " eh? You must be either " + age2 + " or " + age1);
}

calculateAge(birthYear, currentYear);