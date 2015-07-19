class LeapYear

	def self.leap_year?(year)
		return 'idiot' if year.to_s.empty?
		return false if year % 4 != 0
		return false if year % 100 != 0
		return false if year % 400 != 0
		true
	end

end