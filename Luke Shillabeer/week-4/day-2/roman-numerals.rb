def convert_to_roman(value)
  # pad the length of value to 4 characters if not already that length
  if value.length < 4
    (4 - value.length).times do
      value.prepend('0')
    end
  end

  ones = { "0" => "", "1" => "I", "2" => "II", "3" => "III", "4" => "IV",
    "5" => "V", "6" => "VI", "7" => "VII", "8" => "VIII", "9" => "IX" }
  tens = { '0' => "", "1" => 'X', "2" => "XX", "3" => "XXX", "4" => "XL",
    "5" => "L", "6" => "LX", "7" => "LXX", "8" => "LXXX", "9" => "XC" }
  hundreds = { '0' => "", "1" => 'C', "2" => "CC", "3" => "CCC", "4" => "CD",
    "5" => "D", "6" => "DC", "7" => "DCC", "8" => "DCCC", "9" => "CM" }
  thousands = { '0' => "", "1" => 'M', "2" => "MM", "3" => "MMM" }



  val = value.split('')
  return thousands[val[0]] + hundreds[val[1]] + tens[val[2]] + ones[val[3]]
end

puts convert_to_roman "900"
