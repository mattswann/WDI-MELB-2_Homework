var userChar = prompt('What Character will you want to build your pyramid');
var maxRow = prompt('How many rows within pyramid.');
var spaceChar = ' ';
var row = 1;
var charCount = 1;
var spaceCount = maxRow - row;

while (row <= maxRow) {
//	line = line + userChar; //alternate command
	var line = spaceChar.repeat(maxRow - row) +  userChar.repeat(charCount) + spaceChar.repeat(maxRow - row);
	console.log(line);
	row++
	charCount += 2;
}