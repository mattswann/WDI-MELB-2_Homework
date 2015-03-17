/*
Write a program that takes user input and creates a simple ASCII art pyramid using only one character:

Ask the user for a character
Ask the user for the number of rows in the pyramid
Print out a simple ASCII art pyramid
**Bonus **- Ask the user if they want their pyramid upside-down and print it the way that they want it.
*/

var setChar = prompt("Pick a character.");
var setRows = parseInt(prompt("How many rows do you want?"),10);
var count = 1;
var line = '';
var padding = ' ';
var charCount = 1;

while(count <= setRows) {
	var row = padding.repeat(setRows-count) + line + setChar.repeat(charCount) + padding.repeat(setRows-count);

	console.log(row);
	count++;
	charCount += 2;
}

var upsideDown = prompt("Upside-down?");

if (upsideDown === 'yes') {
	line = '';
	count = setRows;
	charCount = setRows;
	while(count > 0) {
		var row = padding.repeat(setRows-count) + line + setChar.repeat(charCount) + padding.repeat(setRows-count);

		console.log(row);
		count--;
		charCount -= 2;
	}
} else {
		console.log("no fun :(")
	}