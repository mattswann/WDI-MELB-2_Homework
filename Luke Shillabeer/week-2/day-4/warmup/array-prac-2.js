/*
  https://gist.github.com/mattswann/8742039a902e49ead298
*/

// Part 2
function reverseStr(s){
    return s.split("").reverse().join("");
}

var arrOfArr = [
  ["hari", 50, "sananab"],
  ["tony", 17, "regal"],
  ["mckenneth",9001,"poop"],
  ["will", 186, "knits"]
];

for (var idx in arrOfArr) {
  var currentArray = arrOfArr[idx];
  console.log(currentArray)
  console.log("Name: " + currentArray[0]);
  console.log("Age: " + currentArray[1]);
  console.log("Fav Word: " + reverseStr(currentArray[2]));
  console.log("----------------------------");
}
