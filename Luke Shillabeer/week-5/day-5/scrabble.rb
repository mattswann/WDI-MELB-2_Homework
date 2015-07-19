# https://gist.github.com/epoch/cf267d540529a7371170

class Scrabble  
  private double_letter, triple_letter, double_word, triple_word, sum_score

  # board types include:
  #  0 --> normal
  #  1 --> double word
  #  2 --> triple word
  #  3 --> double letter
  #  4 --> triple letter

  @@scores = {
    'A' => 1, 'E' => 1, 'I' => 1, 'O' => 1, 'U' => 1, 'L' => 1, 'N' => 1,
    'R' => 1, 'S' => 1, 'T' => 1, 'D' => 2, 'G' => 1, 'B' => 3, 'C' => 3, 
    'M' => 3, 'P' => 3, 'F' => 4, 'H' => 4, 'V' => 4, 'W' => 4, 'Y' => 4,
    'K' => 5, 'J' => 8, 'X' => 8, 'Q' => 10, 'Z' => 10
  }

  def self.score(word, pos_types)
    word = word.upcase.split(//)

    # loop through the letters to build an array of scores
    scores = [] 
    word.each do |letter|
      scores.push(@@scores[letter])
    end

    # loop through the scores and the tile/position types
    # and apply scoring rules where appropriate
    pos_types.each_with_index do |pos, idx|
      scores = double_word(scores)              if pos == 1
      scores = triple_word(scores)              if pos == 2
      scores[idx] = double_letter(scores[idx])  if pos == 3
      scores[idx] = triple_letter(scores[idx])  if pos == 4
    end
    
    # sum and return final result of score
    sum_score(scores)
  end

  def self.double_letter(letter)
    letter * 2
  end

  def self.triple_letter(letter)
    letter * 3
  end

  def self.double_word(scores)
    scores.map { |x| x * 2 }
  end

  def self.triple_word(scores)
    scores.map { |x| x * 3 }
  end

  def self.sum_score(scores)
    scores.inject(:+)
  end
end

puts Scrabble.score("testing", [0,0,0,0,0,0,4])
