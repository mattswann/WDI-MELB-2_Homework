def leap_year?(year)
  if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0
      return true
  end
  return false
end

puts leap_year?(2000)
