var http = require('http');

var callback = function(response) {
	response.setEncoding('utf-8');

	var total = '';

	response.on('data', function(data) {
		total += data;
	});

	response.on('end', function() {
		console.log(total);
	})
};

http.get('http://www.randomcolour.com', callback);
