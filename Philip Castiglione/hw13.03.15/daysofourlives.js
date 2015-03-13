function assignQParas(qNum) {
  return document.getElementById("q"+qNum);
}

var q1Para = assignQParas(1);
var q2Para = assignQParas(2);
var q3Para = assignQParas(3);
var q4Para = assignQParas(4);
var q5Para = assignQParas(5);
var q6Para = assignQParas(6);
var q7Para = assignQParas(7);
var q8Para = assignQParas(8);

q1Para.innerHTML = ("<strong>Q1. In a new js file, create an array (and assign it to a variable) containing the days of the week as strings, with Monday as the first and Sunday as the last.</strong>");
q2Para.innerHTML = ("<strong>Q2. My calendar says Sunday is the first day of the week. Write code to move Sunday from the end of the array to the beginning.</strong>");
q3Para.innerHTML = ("<strong>Q3. I'm really excited about Friday for some reason. Write code to find that day in the array and make it all uppercase.</strong>");
q4Para.innerHTML = ("<strong>Q4. Create and assign a new array which contains two sub-arrays: One containing all the weekdays, and one containing the weekends.</strong>");
q5Para.innerHTML = ("<strong>Q5. Let's get in touch with our Bogan heritage. With your new array of arrays, write code that will change Wednesday to \"Stubbies Day\".</strong>");
q6Para.innerHTML = ("<strong>Q6. On second thought, I don't like weekdays at all. Write code that deletes the weekdays from the array of arrays, leaving only the weekends.</strong>");
q7Para.innerHTML = ("<strong>Q7. Going back to your original array of days, write code that sorts the days alphabetically and assigns these to a new variable.</strong>");
q8Para.innerHTML = ("<strong>Q8. Finally, print out (on the console) the list of sorted days, with each day on its own line.</strong>");

//q1
var weekDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
q1Para.innerHTML += ("<br/><br/>" + weekDays.join(", ") + ".");

//q2
weekDays.unshift(weekDays.pop());
q2Para.innerHTML += ("<br/><br/>" + weekDays.join(", ") + ".");

//q3
var fridayIndex = weekDays.indexOf("Friday");
weekDays[fridayIndex] = weekDays[fridayIndex].toUpperCase();
q3Para.innerHTML += ("<br/><br/>" + weekDays.join(", ") + ".");

//q4
var weekSplit = [];
weekSplit[0] = [];
weekSplit[0].push(weekDays[0]);
weekSplit[0].push(weekDays[weekDays.length-1]);
weekSplit[1] = (weekDays.slice(1,6));
q4Para.innerHTML += ("<br/><br/>array1: " + weekSplit[0].join(", ") + "<br/>array2: " + weekSplit[1].join(", ") + ".");

//q5
weekSplit[1][weekSplit[1].indexOf("Wednesday")] = "Stubbies Day"
q5Para.innerHTML += ("<br/><br/>array1: " + weekSplit[0].join(", ") + "<br/>array2: " + weekSplit[1].join(", ") + ".");

//q6
weekSplit.pop();
q6Para.innerHTML += ("<br/><br/>array1: " + weekSplit[0].join(", "));

//q7
var sortedWeekDays = weekDays.sort();
q7Para.innerHTML += ("<br/><br/>" + weekDays.join(", ") + ".");

//q8
q8Para.innerHTML += ("<br/><br/>");
for (i in sortedWeekDays){
  console.log(sortedWeekDays[i]);
  q8Para.innerHTML += ("<li>" + sortedWeekDays[i] + "</li>")
}