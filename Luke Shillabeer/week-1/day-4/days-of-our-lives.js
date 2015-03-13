var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday", "Sunday"];
document.getElementById("originalTable").innerHTML = daysOfWeek;

// Move last to first
daysOfWeek.unshift(daysOfWeek.pop());
document.getElementById("moveLastToFirst").innerHTML = daysOfWeek;

// Update Friday to uppercase
daysOfWeek[daysOfWeek.indexOf("Friday")] = daysOfWeek[daysOfWeek
  .indexOf("Friday")]
  .toUpperCase();
document.getElementById("uppercaseFriday").innerHTML = daysOfWeek;

// setup new array with subarrays of week and weekend
var newArrayWeek = [];

mondayIdx   = daysOfWeek.indexOf("Monday");
fridayIdx   = daysOfWeek.indexOf("FRIDAY");
saturdayIdx = daysOfWeek.indexOf("Saturday");
sundayIdx   = daysOfWeek.indexOf("Sunday");

newArrayWeek.push(daysOfWeek.slice(mondayIdx, fridayIdx + 1));
newArrayWeek.push([daysOfWeek[saturdayIdx], daysOfWeek[sundayIdx]]);
document.getElementById("weekdayNewArray").innerHTML = newArrayWeek[0];
document.getElementById("weekendNewArray").innerHTML = newArrayWeek[1];


// Bogan Heritage
newArrayWeek[0][newArrayWeek[0].indexOf("Wednesday")] = "Stubbies Day";
document.getElementById("boganPride").innerHTML = newArrayWeek[0];


// Remove the weekdays
newArrayWeek.splice(0,1);
document.getElementById("weekdayGone").innerHTML = newArrayWeek[0];


// alphabetically sorted original week
var alphabeticWeek = daysOfWeek.sort();
document.getElementById("alphabeticallyOrdered").innerHTML = daysOfWeek;


// print out the days of the week
alphabeticWeek.forEach(function(day){
  console.log(day);
});
