var secretnumber = Math.random getRandom(0, 100);
var guess = prompt('Enter a number');

while (parseInt(guess, 10) !== secretnumber) {
	// guess again
	console.log('wrong, you failed, guess again')
	guess = prompt('Enter a number');
}
console.log('go cody perry');