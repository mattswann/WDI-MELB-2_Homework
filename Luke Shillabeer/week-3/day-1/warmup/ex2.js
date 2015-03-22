// Exercise 2

function isPalindrome(word) {
  for (var i = 0; i < word.length; i++) {
    var j = (word.length -1) - i;
    if (word[i] !== word[j]) {
      console.log(i, j)
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("ABBA"));
