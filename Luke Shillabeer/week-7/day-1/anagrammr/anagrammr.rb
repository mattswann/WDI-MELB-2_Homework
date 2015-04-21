def anagram_detect(test_word, list)
  
  # use letters in word sorted alphabetically as key (alpha-key), associate
  # word with its alpha-key in a list (appending to list if multiple words
  # share a key)
  uniqued_words = Hash.new { |h, k| h[k] = [] }
  for word in list
    uniqued_words[word.downcase.chars.sort.join()] << word
  end

  p uniqued_words

  # uniqueify the input-word, check if in hash. Return list of words with 
  # particular alpha-key (removed the test_word from the returned result)
  key_str = test_word.chars.sort.join()
  if !uniqued_words[key_str].nil?
    uniqued_words[key_str] - [test_word]
  end
end

anagram_detect("listen", ["Listen" ,"enlists", "google", "inlets", "banana", "listne"])
