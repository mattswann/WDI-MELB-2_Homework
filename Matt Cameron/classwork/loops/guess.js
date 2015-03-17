
var secretNumber = 26;
var guess = prompt("Guess what number I'm thinking of...");

while (parseInt(guess,10) !== secretNumber) {

	guess = prompt("Wrong. Guess again.");
}

alert("Good guess. You win this round");
