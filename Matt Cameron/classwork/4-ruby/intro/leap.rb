def leap_year?(year)
	if year%4 != 0
		return false
	elsif year%100 != 0
		return true
	elsif year%400 != 0
		return false
	else
		return true
	end
end

# puts leap_year?(2000)

for x in (1800..2015) do
	puts "#{x} is #{leap_year?(x)}"
end