require 'pry'


class Say

	def initialize(number)
		raise "Number must be between 0 and 99, inclusive." unless (0..99).to_a.include?(number)

		@input = number.to_s.split('')
		@number = number

	end

	def in_english

		if @number >= 10 && @number%10 == 0   			# numbers like 30 and 40
			output = "#{tens.capitalize}"
		elsif @number < 10   											  # numbers under 10
			output = "#{ones.capitalize}"
		elsif @number > 10 && @number < 20 		  	  # teens
			output = "#{teens.capitalize}"
		else   															 				# numbers >= 20
			output = "#{tens.capitalize}-#{ones}"
		end
		puts output
	end

	def ones
		ones = ['zero','one','two','three','four','five','six','seven','eight','nine']
		ones[ @input[-1].to_i]
	end

	def tens
		ten_digit = @input[-2]
		tens = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
		tens[(ten_digit.to_i - 1)]
	end

	def teens
		teen_number = @input[-1]
		teens = ['eleven','twelve','thirteen','fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen']
		teens[(teen_number.to_i - 1)]
	end


end

Say.new(24).in_english
Say.new(20).in_english
Say.new(8).in_english
Say.new(15).in_english
Say.new(0).in_english
Say.new(30).in_english
Say.new(80).in_english








