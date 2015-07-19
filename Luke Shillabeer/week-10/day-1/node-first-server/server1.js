var http = require('http');

var app = function (request, response) {
  response.write('hello world!');
  response.end();
};

console.log("Server One HAS BEGUN!")
var server = http.createServer(app);
server.listen(8000);
