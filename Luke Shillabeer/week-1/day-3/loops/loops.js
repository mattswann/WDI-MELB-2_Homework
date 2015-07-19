var secretnumber = Math.floor((Math.random() * 2) + 1);

for (var guess; parseInt(guess) !== secretnumber;) {
  guess = prompt("NUMBER PLZ!");
}

console.log("Alright you're cool.")
