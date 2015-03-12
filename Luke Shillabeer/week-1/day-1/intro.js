var numberOfChildren = 0;
var partnersName = "Cassie";
var geoLocation = "Melbourne";
var jobTitle = "Student tutor";

var favColor = prompt("What is your favourite colour?", "Blue");
var clientName = prompt("What is your name?", "Silly Face")
var siteBackground = prompt("What colour should the site be?")

function lolSilly() {
  $("#childrenNum").text(numberOfChildren);
  $("#partnerName").text(partnersName);
  $("#geoLocate").text(geoLocation);
  $("#jobTitle").text(jobTitle);
  $("#favColor").text(favColor);
  $("#clientName").text(clientName);
  $("body").attr("bgcolor", siteBackground);
}
