// Setup the variables
var currentYear = new Date().getFullYear();

// test year, return different messages based on compare
// between
function yearTest(yearToTest) {
  if (yearToTest > currentYear)
    return "Greetings from the future!";
  else if (yearToTest < currentYear)
    return "Whoa! Blast from the past!";
  else
    return "I'm in the present!";
}

function populateDatePicker(){
  for (i = new Date().getFullYear() + 10; i > 1900; i--)
  {
      $('#yearpicker').append($('<option />').val(i).html(i));
  }
}

$(document).ready(function(){

  $("#yearpicker")
    .change(function(){
      var pickerVal = $('#yearpicker').val();
      $("#yeartext").text("You have selected: " + pickerVal);
      $("#yearmessage").text(yearTest(parseInt(pickerVal)));
    });
});
