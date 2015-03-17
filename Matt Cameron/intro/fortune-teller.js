/*

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:

takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.

*/



var partner = prompt("What will your partner's name be?");
var home = prompt("Where will you live?");
var noOfKids = prompt("How many kids do you want?");
var job = prompt("What job will you have?");

function fortuneTeller(p, h, k, j) {
	var fortune = "You will be a " + j + ", living in " + h + ", married to " + p + ", with " + k + " children!";
	console.log(fortune);
}

fortuneTeller(partner, home, noOfKids, job);