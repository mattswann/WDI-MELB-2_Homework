/*
In a new js file, create an array (and assign it to a variable) containing the days of the week as strings, with Monday as the first and Sunday as the last.

My calendar says Sunday is the first day of the week. Write code to move Sunday from the end of the array to the beginning.

I'm really excited about Friday for some reason. Write code to find that day in the array and make it all uppercase.

Create and assign a new array which contains two sub-arrays: One containing all the weekdays, and one containing the weekends.

Let's get in touch with our Bogan heritage. With your new array of arrays, write code that will change Wednesday to "Stubbies Day".

On second thought, I don't like weekdays at all. Write code that deletes the weekdays from the array of arrays, leaving only the weekends.

Going back to your original array of days, write code that sorts the days alphabetically and assigns these to a new variable.

Finally, print out (on the console) the list of sorted days, with each day on its own line.
*/
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


var sun = days.pop();
console.log(days);
console.log(sun);

days.unshift(sun);
console.log(days);
console.log(sun);

// days.push('Sunday');
// console.log();

// days.splice(0, 0, 'Sunday')
// console.log(days);

// days.pop();
// console.log(days);

// days.splice(0, 6, 'Sunday');
// console.log(days);

// days.pop();
// console.log(days);


//converts lower case to uppercase.
var Friday = days[5].toUpperCase(); //this works.
days[5] = Friday;
console.log(days);





