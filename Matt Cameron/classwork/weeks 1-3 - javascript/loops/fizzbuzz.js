/*
Have students write a JavaScript application using for loops that logs all numbers from 1 - 100.

If a number is divisible by 3 log "Fizz" instead of the number.
If a number is divisible by 5 log "Buzz" instead of the number.
If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
Modulo Operator In computing, the modulo operation finds the remainder after division of one number by another. For checking for divisibility, its a handy operator if check the output for 0.

console.log(5 % 2) - Will equal 3

console.log(10 % 2) - Will equal 0

Modulo Graph

Steps:

Have students setup a loop to print out numbers from 1 to 100
Have students figure out how to use modulo operator to check for divisibility
Have them print out Fizz for numbers by 3
Have them print out Buzz for numbers by 5
*/

function fizzBuzz() {

	var count = 1;
	var maxCount = document.getElementById('maxCount').value;

	while (count <= maxCount) {
		if (count%3 === 0 && count%5 === 0) {
			console.log("FizzBuzz");
		} else if (count%3 === 0) {
			console.log("Fizz");
		} else if (count%5 === 0) {
			console.log("Buzz");
		} else {
			console.log(count);
		}
		count++;
	}
}



var buttonClick = document.getElementById("btnEnter");
buttonClick.addEventListener('click', fizzBuzz);

