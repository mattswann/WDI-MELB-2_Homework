var http = require('http');
var callback = function(response){
  response.setEncoding('utf-8');

  response.on('data', function(data){
    console.log(data);
  });

  response.on('end', function(data){

  });
};

http.get('http://www.facebook.com', callback);
