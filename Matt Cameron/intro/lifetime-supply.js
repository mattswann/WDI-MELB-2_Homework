/*
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age). outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

var maxAge = 85;
var myAge = prompt("How old are you?");
var favSnacks = prompt("What is your favourite snack?") + "s";
var perDay = prompt("How many " + favSnacks + " do you eat each day?");

function calculateSupply(age, amount) {
	var yearsRemaining = maxAge - myAge;
	var needed = Math.round(yearsRemaining * (perDay*365));
	console.log("You will need approximately " + needed + " " + favSnacks + " to last you until the ripe old age of " + maxAge + ".");
}

calculateSupply(myAge, perDay);