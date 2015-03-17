/*
Create 2 functions that calculate properties of a circle.

Create a function called calcCircumfrence:

Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:

Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".
*/

function calcCircumfrence(radius) {
	var circum = 2 * Math.PI * radius;
	console.log("The circumference is " + circum + ".");
}

calcCircumfrence(3);

function calcArea(radius) {
	var area = Math.PI*(radius * radius);

	console.log("The area is " + area + ".");
}

calcArea(3);