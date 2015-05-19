function letter_count(word) {
  var result = {};

  word.split('').forEach(function(elem){
    if (elem in result) {
      result[elem] += 1;
    } else {
      result[elem] = 1;
    }
  });
  
  return result;
}

console.log(letter_count('testing'));
