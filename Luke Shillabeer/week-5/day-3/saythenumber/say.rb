class Say
  attr_reader :number

  def initialize(number)
    @number = number
  end

  def digits(number)
    number.to_s.chars.map(&:to_i)
  end

  def in_english
    return "zero" if @number.zero?

    singles_digit = {1 => "one", 2 => "two", 3 => "three", 
      4 => "four", 5 => "five", 6 => "six", 7 => "seven", 8 => "eight",
      9 => "nine"}
    tens_digit = {2 => "twenty", 3 => "thirty", 4 => "forty", 5 => "fifty", 
      6 =>"sixty", 7 => "seventy", 8 => "eighty", 9 => "ninty"}

    if @number < 10
      singles_digit[@number]
    elsif @number >= 10 && @number < 20
      teen_numbers = {10 => "ten", 11 => "eleven", 12 => "twelve", 
      13 => "thirteen", 14 => "fourteen", 15 => "fifteen", 16 => "sixteen", 
      17 => "seventeen", 18 => "eighteen", 19 => "nineteen"}
      teen_numbers[@number]
    elsif @number % 10 == 0
      numbers = digits(number)
      tens_digit[numbers[0]]
    else
      numbers = digits(number)
      tens_digit[numbers[0]] + '-' + singles_digit[numbers[1]]
    end
  end
end
