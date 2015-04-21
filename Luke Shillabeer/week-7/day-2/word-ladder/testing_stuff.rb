def one_letter_diff?(first_word, second_word)
  letters_same = (0...first_word.size).count do |index|
    p "#{first_word[index]}, #{second_word[index]} == #{first_word[index] == second_word[index]}"
    first_word[index] == second_word[index]
  end
  p letters_same
  return first_word.size - 1 == letters_same
end

one_letter_diff?("funk", "fuck")
