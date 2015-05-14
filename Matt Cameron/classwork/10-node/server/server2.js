var http = require('http');
var url = require('url');

var app = function(request, response) {
	var pathname = url.parse(request.url).pathname;

	switch(pathname) {

		case '/':
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write('Home');
			break;
		default:
			response.writeHead(404);
			response.write('404 - oops');
			break:
	}
	response.end();
};


var server = http.createServer(app);
server.listen(8000)