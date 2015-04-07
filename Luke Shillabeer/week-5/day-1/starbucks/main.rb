def init_dict(location)
  word_dict = Hash.new{ [] }

  File.open(location, 'r') do |file|
    file.each_line do |line|
      current_word = line.chomp.chars.sort.join
      if word_dict.has_key? current_word
        word_dict[current_word] << line.chomp
      else
        word_dict[current_word] = [line.chomp]
      end
    end
  end
  return word_dict
end

def mess_with_name(name, dictionary)
  ordered_name = name.chars.sort.join.downcase
  if dictionary.has_key? ordered_name and dictionary[ordered_name].length > 1
    return dictionary[ordered_name].sample
  else
    return ["Sexy", "Babez", "Dish", "Potato", "Missle", "Database"].sample
  end
end

ordered_dict = init_dict("./dictionary.txt")
puts mess_with_name("table", ordered_dict)
