var app = require("express")();
var http = require('http').Server(app);

app.set('views', __dirname + "/views");
app.set('view engine', "jade");

app.get('/', function(req, res){
  res.render("index");
});

app.get('/about', function(req, res){
  res.send("<h1>ABUOT PAEG!</h1><p>Learn about stuff in here</p>");
});

app.get('/test', function(req, res){
  res.sendFile(__dirname + "/test.html");
});



app.listen(8000);
