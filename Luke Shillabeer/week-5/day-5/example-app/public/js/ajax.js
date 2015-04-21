/*

var request = new XMLHttpRequest();

request.onreadystatechange = function() {
  // console.log("ReadyStateChange!")
  // console.log("REdayState: ", this.readyState)
  // console.log("ResponseText: ", this.responseText)

  if (this.readyState === 4) {
    console.log("Done");
    document.write(this.responseText)
  }

};

request.open('GET', '/api/students');
request.send();

*/

$(document).ready(function() {
  $.getJSON('/api/students').done(function(data){
    console.log(data)
  });
});
