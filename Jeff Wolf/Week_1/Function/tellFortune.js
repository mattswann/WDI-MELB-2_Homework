/*
Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:

takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
*/

var kids = '2';
var partner = 'Gail';
var geographic = 'Belfast';
var job = 'Coder';

var fortune = "You will be a " + job + " in " + geographic + " and married to " + partner + " with " + kids + " children";

console.log(fortune)

tellFortune('coder', 'belfast', 'Gail', 2);
tellFortune('sailor', 'Geelong', 'Rene', 10);
tellFortune('postman', 'Melbourne', 'Jody', 3);