// Inspired by the development team at Vooza, write the function "howManyLightsabersDoYouOwn"" that accepts the name of a programmer, and returns the number of lightsabers owned by that person. The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

function howManyLightSabersDoYouOwn(name) {
	// add a new property if the name does not already exist
	if (lightsabers[name] === undefined) {
		lightsabers[name] = 0;
	}
	$('#result').html(name + " has " + lightsabers[name] +" lightsabers." );
}

var lightsabers = {
	Zach: 18,
}

$('form').on('submit', function(event) {
	event.preventDefault();
		var $name = $('input').val();
		howManyLightSabersDoYouOwn($name);

});

