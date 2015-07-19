var app = require("express")();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.send("<h1>Hello Express!</h1><p>This is dog</p>");
});

app.get('/about', function(req, res){
  res.send("<h1>ABUOT PAEG!</h1><p>Learn about stuff in here</p>");
});

app.listen(8000);
