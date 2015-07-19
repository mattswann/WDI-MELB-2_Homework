var http = require('http');
var url = require('url');

var RESPONSE_GOOD_URL = 200;
var RESPONSE_BAD_URL  = 404;

// MOTD!
console.log("Server three shall bend the knee!!!")

var app = function(request, response) {

  var server_conf = {
    views: {
      home: {
        text: "Home page!",
      },
      about: {
        text: "About page!",
      },
      routes: {
        '/': server_conf.views.home,
        '/about': server_conf.views.about
      },
    }

  };

  if (request.url in server_conf.routes) {
    response.writeHead(RESPONSE_GOOD_URL);
    response.write(server_conf.routes[request.url].text);
  } else {
    response.writeHead(RESPONSE_BAD_URL);
  }

  console.log(request.url)
  response.end();

};


var server = http.createServer(app);
server.listen(8000);
