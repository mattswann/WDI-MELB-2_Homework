function cleanInput(string) {
	clean = string.replace('&', '&amp;');
	clean = clean.replace('<', '&lt;');
	clean = clean.replace('>', '&gt;');
	clean = clean.replace('"', '&quot;');
	clean = clean.replace("'", '&#x27;');
	clean = clean.replace('/', '&#x2F;');
	return clean
}


var button = document.getElementById('button');

	// do stuff on click
button.addEventListener('click', function() {

	// gets values
	var name = document.getElementById('name').value;
	var message = document.getElementById('message').value;

	// create some new elements
	var new_message_name = document.createElement("h3");
	new_message_name.innerHTML = name;

	var new_message = document.createElement("p");
	new_message.innerHTML = message;


	// add them to the page
	var messages = document.getElementById('messages');
	messages.appendChild(new_message_name);
	messages.appendChild(new_message);
});



