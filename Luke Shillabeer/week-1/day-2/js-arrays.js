// found this function at http://stackoverflow.com/a/13627586/2355035
function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

var myTopChoices = ["Blue", "Banana", 'Good lighting', "thunderstorms"];

myTopChoices.forEach(function(val) {
  var indexPlusSuffix = ordinal_suffix_of(myTopChoices.indexOf(val) + 1);
  console.log("My " + indexPlusSuffix + " choice is " +  val + ".");
})
