function logFamily(family) {
	console.log(family);
}

function doSomething(something) {
	console.log(something + " is " + something.length + " chars long.");
}

var simpsons = ["Homer","Marge","Bart","Lisa","Maggie"];
var griffins = ["Peter","Lois","Chris","Meg","Brian"];
var friends = ["Joey","Chandler","Monica", "Ross","Phoebe","Rachel"];

var collection = {
	each: function(arr, fn) {
		for (var i = 0; i < arr.length; i++) {
			fn(arr[i]);
		}
	}
}




