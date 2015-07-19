// document ready thingy
$(document).ready(function() {

  // fetch students JSON from the /api/students route
  $.getJSON('/api/students').done(function(data){

    // create a UL in the DOM
    $('body').append("<ul>")

    // for each element (student) fetched, append an LI to
    // the above created UL and put the student name within it
    data.forEach(function(elem){
      $('ul').append('<li>' + elem.name);
    });
  });
});

