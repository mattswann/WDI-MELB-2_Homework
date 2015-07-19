// var express = require('express');
// var app = express();

// same as above - note the extra brackets!
var app = require('express')();
var http = require('http').Server(app);


// declare where our templates live
app.set('views', './views');
// and what engine we're using to display them
app.set('view engine', 'jade');
app.use(express.static('/public'));


// set some routes
app.get('/', function(req, res) {
	// print to terminal
	console.log("home page");
	res.render('index');
});

app.get('/about', function(req, res) {
	console.log("about page");
	res.send('<h1>About Express</h1>');
});

app.get('/test', function(req, res) {
	// load a template
	res.sendFile(__dirname + '/test.html');
})


// Tell the server which port to listen on
app.listen(8000, function() {
	console.log("Node is listening on port 8000")
});


