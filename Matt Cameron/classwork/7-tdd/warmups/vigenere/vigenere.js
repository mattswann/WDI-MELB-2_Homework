var letters = {
	'a': 0,
	'b': 1,
	'c': 2,
	'd': 3,
	'e': 4,
	'f': 5,
	'g': 6,
	'h': 7,
	'i': 8,
	'j': 9,
	'k': 10,
	'l': 11,
	'm': 12,
	'n': 13,
	'o': 14,
	'p': 15,
	'q': 16,
	'r': 17,
	's': 18,
	't': 19,
	'u': 20,
	'v': 21,
	'w': 22,
	'x': 23,
	'y': 24,
	'z': 25
};


encrypt = function() {

	var keyword = document.getElementById('key').value;
	var message = document.getElementById('message').value;
	var message_letters = message.split('');
	var key_letters = keyword.split('');
	var encrypted = [];

	for (var i = 0, a = 0; i < message_letters.length; i++, a++) {
		//loop through keyword again if it gets to the end
		if (a === keyword.length) { a = 0}

		// add the value of the keyword letter to the message letter
		output = letters[ message_letters[i] ] + letters[ key_letters[a] ];

		// take care of numbers that are over 25
		if (output >= 26) { output -= 26; };

		// find the letter of the new number
		letter = _.invert(letters)[output];

		// push it into the encrypted array
		encrypted.push(letter);
	}
	document.getElementById('output').innerHTML = (encrypted.join(''));
}


decrypt = function() {

	var keyword = document.getElementById('d_key').value;
	var encoded_message = document.getElementById('d_message').value;
	var encoded_letters = encoded_message.split('');
	var key_letters = keyword.split('');
	var decrypted = [];

	for (var i = 0, a = 0; i < encoded_letters.length; i++, a++) {
		//loop through keyword again if it gets to the end
		if (a === keyword.length) { a = 0}

		// add the value of the keyword letter to the message letter
		output = letters[ encoded_letters[i] ] - letters[ key_letters[a] ];

		// take care of numbers that are over 25
		if (output < 0) { output += 26; };

		// find the letter of the new number
		letter = _.invert(letters)[output];

		// push it into the encrypted array
		decrypted.push(letter);
	}
	document.getElementById('d_output').innerHTML = (decrypted.join(''));
}


// trigger the encryption and decryption
var cipher_button = document.getElementsByTagName('button')[0];
cipher_button.addEventListener('click', encrypt );

var decrypt_button = document.getElementsByTagName('button')[1];
decrypt_button.addEventListener('click', decrypt );

