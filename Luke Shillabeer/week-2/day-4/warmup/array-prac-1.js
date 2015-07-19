/*
  https://gist.github.com/mattswann/8742039a902e49ead298
*/

// PART ONE
var hari = ["hari", 50, "sananab"];
var tony = ["tony", 17, "regal"];
var mck = ["mckenneth",9001,"jazz"];
var will = ["will", 186, "knits"];

// Remove "hari" from Hari array
hari.splice(hari.indexOf("hari"), 1);

// Change Tony's year of birth
tony[tony.indexOf(17)] = 18;

// add "swag" to Mckenneth array
mck.push("swag");

// remove "knits" from will array
will.splice(will.indexOf("knits"), 1);

console.log(hari);
console.log(tony);
console.log(mck);
console.log(will);

