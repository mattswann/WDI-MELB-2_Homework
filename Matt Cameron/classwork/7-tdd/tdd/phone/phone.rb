class Phone

	def initialize(number)
		@number = number.tr('(). -', '')
	end

	def number
		@number[0] = '' if @number[0..1] == "11" && @number.length == 11
		@number = "0000000000" if @number.length == 11 || @number.length == 9
		@number
	end

	def area_code
		@number[0..2]
	end

	def to_s
		@number.insert(0, '(')
		@number.insert(4, ') ')
		@number.insert(9, '-')
	end
end