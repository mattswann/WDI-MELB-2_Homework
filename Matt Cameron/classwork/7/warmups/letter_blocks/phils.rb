BLOCKS = [['B','O'],['X','K'],['D','Q'],['C','P'],['N','A'],['G','T'],['R','E'],['T','G'],['Q','D'],['F','S'],['J','W'],['H','U'],['V','I'],['A','N'],['E','R'],['F','S'],['L','Y'],['P','C'],['Z','M']]

def can_make_word(input)

  # remove blocks that don't include any letters in input word (efficiency)
  @blocks = BLOCKS.map do |block|
      if input.split('').include?(block[0]) || input.split('').include?(block[1])
        block
      end
    end.compact

  # BRUTE FORCE LEL
  all_words = ['']
  @blocks.each do |block|
    all_words2 = all_words.clone
    all_words.map! do |word|
      (word + block[0])
    end
    all_words2.map! do |word2|
      (word2 + block[1])
    end
    all_words += all_words2
  end

  all_words.each do |word|
    word_arr = word.split('')
    word_dict = {}
    word_arr.each do |letter|
      if word_dict.keys.include? letter
        word_dict[letter] += 1
      else
        word_dict[letter] = 1
      end
    end

    input_arr = input.split('')
    input_dict = {}
    input_arr.each do |letter|
      if input_dict.keys.include? letter
        input_dict[letter] += 1
      else
        input_dict[letter] = 1
      end
    end

    if !(input_dict.keys - word_dict.keys).empty?
      next
    elsif input_dict.all? { |key, value| word_dict[key] >= value }
      return true #first 'word' made by blocks that can include the input word
    end

  end
  false #if no matches found

end

