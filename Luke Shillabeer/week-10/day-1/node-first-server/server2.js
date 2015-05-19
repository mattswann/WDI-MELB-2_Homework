var http = require('http');

var app = function(request, response) {
  console.log(new Date());
  response.end();
};

console.log("Server two request renew!!")
var server = http.createServer(app);
server.listen(8000);
