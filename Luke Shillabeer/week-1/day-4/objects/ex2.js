/*
  The Reading List -
  Keep track of which books you read and which books you want to read!

  Create an array of objects, where each object describes a book and has
  properties for the title (a string), author (a string), and alreadyRead
  (a boolean indicating if you read it yet).

  Iterate through the array of books. For each book, log the book title and
  book author like so: "The Hobbit by J.R.R. Tolkien". Now use an if/else
  statement to change the output depending on whether you read it yet or not.
  If you read it, log a string like 'You already read "The Hobbit" by
  J.R.R. Tolkien', and if not, log a string like 'You still need to read
  "The Lord of the Rings" by J.R.R. Tolkien.'
*/

var books = [
  {
    title: "Thomas the tank engine goes to prison",
    author: "Reverend Wilbert Awdry and his son, Christopher",
    alreadyRead: false,
  },
  {
    title: "Vice: Behind the seeds (a Sesame Street exposè)",
    author: "April Ayers Lawson",
    alreadyRead: false,
  },
  {
    title: "Final Fantasy Seven",
    author: "Yoshinori Kitase",
    alreadyRead: false,
  },
  {
    title: "I didn't not not kill nobody",
    author: "O.J Simpson",
    alreadyRead: false,
  }
]

books.forEach(function(book) {
  console.log(book.title + " - " + book.author + ".");
  if (book.alreadyRead) {
    console.log("You have already read " + book.title + " by " + book.author + ".")
  } else {
    console.log("You still need to read " + book.title + " by " + book.author + ".")
  }
});
