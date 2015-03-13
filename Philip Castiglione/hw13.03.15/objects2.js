// recipe
var favouriteRecipe = {
  "title": "Mole",
  servings: 2,
  ingredients: ["cinnamon","cumin","cocoa"]
}

console.log(favouriteRecipe["title"]);
console.log("Serves: "+favouriteRecipe.servings);
console.log("Ingredients:");
for (i in favouriteRecipe.ingredients) {
  console.log(favouriteRecipe.ingredients[i]);
}

// books
var books = [];
function addBook(title, author, alreadyRead) {
  bookObj = {
    title: title,
    author: author,
    alreadyRead: alreadyRead
  }
  books.push(bookObj);
}

addBook("The Hobbit", "J.R.R. Tolkein", true);
addBook("Javascript: The Good Parts", "Douglas Crockford", false);

for (i in books) {
  for (j in books[i]) {
    var read;
    if (books[i].alreadyRead === true) {
      read = "You already read ";
    } else {
      read = "You need to read "
    }
    console.log(read+books[i].title+" by "+books[i].author);
  }
}

// movie
var movies = [];
function addMovie(title, duration, stars) {
  movieObj = {
    title: title,
    duration: duration,
    stars: stars
  }
  movies.push(movieObj);
}

addMovie("Inception", 148, ["Leonardo DiCaprio","Joseph Gordon-Levitt","Ellen Page"]);
addMovie("The Social Network", 120, ["Jesse Eisenberg","Rooney Mara", "Bryan Barter"]);

function printMovie(index){
  console.log(movies[index].title+" lasts "+movies[index].duration+" minutes. Stars: "+movies[index].stars.join(", ")+".")
}

printMovie(0);
printMovie(1);
