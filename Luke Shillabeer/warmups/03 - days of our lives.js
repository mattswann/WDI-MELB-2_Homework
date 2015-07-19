daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
  "Saturday", "Sunday",];


// Move sunday to head of array
daysOfWeek.unshift(daysOfWeek.pop());
//console.log(daysOfWeek);


// Find and uppercase Friday
var fridayIndex = daysOfWeek.indexOf("Friday");
daysOfWeek[fridayIndex] = daysOfWeek[fridayIndex].toUpperCase();


// Create subarrays
var daysWithSeperatedWeekend = [];
daysWithSeperatedWeekend.push(daysOfWeek.splice(1,5));
daysWithSeperatedWeekend.push(daysOfWeek.splice(0,2));


// Edit Wednesday to Bogan days
var wednesdayIndex = daysWithSeperatedWeekend[0].indexOf("Wednesday");
daysWithSeperatedWeekend[0][wednesdayIndex] = "Stubbies Day";


// Remove weekdays
daysWithSeperatedWeekend.splice(0,1)


// Order original array alphabetically
daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
  "Saturday", "Sunday",]; // Broke original array with splicing earlier
daysOfWeek.sort();


// print each value out in order on a new line.
daysOfWeek.forEach(function(day){
  console.log(day);
});
