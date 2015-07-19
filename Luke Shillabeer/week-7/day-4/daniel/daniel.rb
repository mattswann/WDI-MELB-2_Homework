class Daniel

  def start_conversation
    while true
      puts "Say something to Daniel..."
      user_input = gets.chomp
      
      if user_input == "quit"
        break
      end

      talk(user_input)
    end
  end
  
  def talk(input)
    result = ''
    case(input)
    when question? 
      result = "Sure."
    when yelling?
      result = "Woah, chill out!"
    when empty?
      result = "Fine. Be that way!"
    else
      result = "Whatever."
    end

    if input.downcase[0..2] == "bro"
      result = leetify(result)
    end
    result
  end

  private
  def empty?(input)
    input == ""
  end

  private 
  def question?(input)
    input.end_with? "?"
  end

  private
  def yelling?(input)
    input == input.upcase
  end

  private
  def leetify(input)
    input = input.downcase
    input.gsub!('a', '4')
    input.gsub!('e', '3')
    input.gsub!('i', '1')
    input.gsub!('o', '0')
    input.gsub!(/\A[^AEIOUaeiou]/) {|chr| chr.downcase}
    input.gsub!(/\d./) {|str| str.downcase}
    input.gsub!(/[A-Z]{2}/) {|str| 
      str[1] = str[1].downcase
      str
    }
    input.gsub!(/[a-z]{2}/) {|str|
      str[1] = str[1].upcase
      str
    }
  end 
end

Daniel.new.start_conversation
