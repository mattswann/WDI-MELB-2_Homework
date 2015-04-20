var word = "listen";
var array = ["enlists", "google", "inlets", "banana"];

for (var i = 0; i < array.length; i++) {
		var array_letters = array[i].split("").sort();
		var word_letters = word.split("").sort();

		// Same length
	 if (array_letters.length == word_letters.length ) {
	 	var match = 0;

	 	// Check each letter
	 	for (var a = 0; a < array_letters.length; a++) {

	 		// Letters match
 			if (array_letters[a] === word_letters[a]) {
 		 		match++;

 		 		// Output the word that matches
 		 		if (match === array_letters.length ) {
 		 		console.log(array[i] + " is an anagram.")
 		 		}
 		 	}
	 	}
	 };
};