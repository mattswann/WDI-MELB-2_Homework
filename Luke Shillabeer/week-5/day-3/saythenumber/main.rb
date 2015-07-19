class Fixnum

  def digits(number)
    number.to_s.chars.map(&:to_i)
  end

  def in_english
    num = self

    singles_digit = {1 => "one", 2 => "two", 3 => "three",
                     4 => "four", 5 => "five", 6 => "six", 
                     7 => "seven", 8 => "eight",9 => "nine"}
    tens_digit = {2 => "twenty", 3 => "thirty", 4 => "forty", 
                  5 => "fifty", 6 =>"sixty", 7 => "seventy", 
                  8 => "eighty", 9 => "ninty"}

    if num < 10
      singles_digit[num]
    elsif num >= 10 && num < 20
      teen_numbers = {10 => "ten", 11 => "eleven", 12 => "twelve", 
                      13 => "thirteen", 14 => "fourteen", 15 => "fifteen", 
                      16 => "sixteen", 17 => "seventeen", 18 => "eighteen", 
                      19 => "nineteen"}
      teen_numbers[num]
    elsif num % 10 == 0
      numbers = digits(num)
      tens_digit[numbers[0]]
    else
      numbers = digits(num)
      tens_digit[numbers[0]] + '-' + singles_digit[numbers[1]]
    end

  end  
end

# 1.upto(99) do |i|
#   puts i.in_english
# end

puts 66.in_english

puts 66+ 1
