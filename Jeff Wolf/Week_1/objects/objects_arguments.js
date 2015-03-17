/*
Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa
*/


//exercise one
var recipe = { 
	name: "mole",
	serves: 2,
	ingredients: ['cinnamon', 'cumin', 'cocoa']
};
console.log(recipe);

var recipe = {
	title: 'the surprise',
	servings: 1,
	ingredients: ['cheese', 'mustard', 'vegemite']
};
console.log(recipe.title)
console.log('Serves', recipe['servings']);
console.log('ingredients');
	for (var i = 0; i < recipe.ingredients.length; i++) {
		console.log(recipe.ingredients[i])
	}

//exercise two
var books = [
	{name: 'Sailing', author: 'BJ Wolff'},
	{name: 'Navigation', author: 'G Fanning'}
	];
	for (var i = 0; i < books.length; i++) {
		var book = books[i];
	console.log(book.name + ' by ' + book.author + ' is my favourite book.')
}


//DT version
var books = [
{
	title: 'good stuff',
	author: 'BJWolff',
	alreadyRead: false

},
{		
		title: 'sailing',
		author: 'G Fanning',
		alreadyRead: true
	}
]
		for (var i = 0; i < books.length; i++) {
			var book = books[0];

			var desc = book.title + ' by ' + book.author;

			if (book.alreadyRead === true) {
				console.log('you already read', desc);

			}	else {
				console.log('you still need to read', desc);
			}
		}

//my version
var movies = [
	{title: 'Space', duration: 90, stars: ['BJ Wolff', 'G Fanning']},
	{title: 'Sailing', duration: 120, stars: ['MD Bakker', 'DJ Bakker']}
	];

	for (var i = 0; i < movies.length; i++) {
		var movie = movies[i];
	console.log(movie.title + ' lasts for ' + movie.duration + ' minutes and stars ' + movie.stars)
}


//DT version
function movieInfo() {

}

var movieInfo = function(movie) {
	var info = ' ';

	info = info + movie.title
	info += movie.title;
	info += ' lasts for ' + movie.duration + ' minutes.';
	info += ' stars: ' + movie.stars.join( ', ')
	console.log(info);
}









