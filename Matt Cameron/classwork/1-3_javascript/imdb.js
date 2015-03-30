/*
It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).

Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

var favMovies = [
								{title: "Fight Club",
								duration: 139,
								stars: ["Brad Pitt", "Edward Norton", "Helena Bonham-Carter"]},
								{title: "Eternal Sunshine of the Spotless Mind",
								duration: 108,
								stars: ["Jim Carrey", "Kate Winslet", "Kirsten Dunst"]},
								{title: "Tucker and Dale Vs. Evil",
								duration: 89,
								stars: ["Tyler Labine", "Alan Tudyk", "Katrina Bowden"]}
								];


function printMovie() {
	for(var i = 0; i < favMovies.length; i++) {
		console.log(favMovies[i].title + " lasts for " + favMovies[i].duration + " minutes. Stars: " + favMovies[i].stars.join(", "));
	}
}
printMovie();