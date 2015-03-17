/*
It's hot out! Let's make a converter based on the steps here.

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NNÂ°C is NNÂ°F".
Create a function called fahrenheitToCelsius:
Now store a fahrenheit temperature into a variable.

Convert it to celsius and output "NNÂ°F is NNÂ°C."
*/

function celsiusToFahrenheit(celsius) {
	var fahrenheit = celsius * (9/5) + 32;
	var output = celsius + "\xB0C is " + fahrenheit + "\xB0F";
	console.log(output);
}

function fahrenheitToCelsius(fahrenheit) {
	var celsius =  (fahrenheit - 32) * (5/9);
	var output = fahrenheit + "\xB0F is " + celsius + "\xB0C";
	console.log(output);
}