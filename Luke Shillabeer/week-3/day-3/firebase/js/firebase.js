/*
  Documentation:
  https://www.firebase.com/docs/web/guide/retrieving-data.html
  https://www.firebase.com/tutorial/#tutorial/basic/6

  Check out the DB at;
  https://burning-fire-8027.firebaseio.com/
*/




var myDataRef = new Firebase('https://burning-fire-8027.firebaseio.com/');

myDataRef.push({name: "Cashew", text: "blahblahblah"});

// run the callback whenever a child_added message is fired
myDataRef.on('child_added', function(snapshot){
  var message = snapshot.val();
  addToList(message.name, message.text)
});

function addToList(name, text) {
  $('#list-of-names').append("<li>" + name + "</li>");
}
