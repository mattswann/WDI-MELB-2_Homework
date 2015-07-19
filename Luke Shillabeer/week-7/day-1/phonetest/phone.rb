class Phone
  attr_reader :number

  def initialize(phonenumber)
    @number = clean_number(phonenumber)
  end

  def clean_number(number)
    
    #http://stackoverflow.com/a/12645352/2355035
    number = number.gsub(/\D/, '')

    if number.length < 10
      return "0000000000"
    elsif number.length == 11 && number[0] == '1'
      return number[1..-1]
    elsif number.length >= 11
      return "0000000000"
    end
    
    return number
  end

  def area_code
    @number[0...3]
  end

  def to_s
    "(#{@number[0...3]}) #{@number[3...6]}-#{@number[6...10]}"
  end

  private :clean_number, :initialize
end
