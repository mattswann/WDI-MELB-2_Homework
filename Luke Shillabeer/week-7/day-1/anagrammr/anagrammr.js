// http://stackoverflow.com/a/3955096/2355035
Array.prototype.remove = function() {
  var what, a = arguments, L = a.length, ax;
  while (L && this.length) {
    what = a[--L];
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }
  return this;
};

function anagram_detect(test_word, word_list) {
  
  // build an object that contains the uniqu'ed (alphabetically sorted characters)
  // words as keys, words generating that key as list of values
  var unique_words = {};
  for (i = 0; i < word_list.length; i++) {
    sort_word = word_list[i].split('').sort().join('');
    if (unique_words.hasOwnProperty(sort_word)) {
      unique_words[sort_word].push(word_list[i]);
    } else {
      unique_words[sort_word] = [word_list[i]];
    }
  }

  // uniqueify the input-word, check if in object. Return array without
  // the test_word removed from possible list of results
  key_test_word = test_word.split('').sort().join('');
  if (unique_words.hasOwnProperty(key_test_word)) {
    return unique_words[key_test_word].remove(test_word);
  }
}

x = anagram_detect("listen", ["enlists", "google", "inlets", "banana", "listne"]);
console.log(x);
