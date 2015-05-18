# PASSING BLOCKS TO METHODS

# def test
# 	puts "header"
# 	yield if block_given?
# 	puts "footer"
# end

# # same thing as above
# def test1(&callback)  # (&variableName) is optional - indicates that you are expected to pass in a block
# 	puts "header"
# 	callback.call
# 	puts "footer"
# end


class SuperMario

	def cook
		# start_time = Time.now
		pizza_count = 50_000

		pizza_count.times do |index|
			"bake pizza for the #{index} time."
		end
		# end_time = Time.now
		# puts "took: #{end_time - start_time}"
	end

end


def benchmark(&method)
	start_time = Time.now
	method.call
	end_time = Time.now
	puts "took #{end_time - start_time} to run."
end




# declaring a proc
my_proc = Proc.new { SuperMario.new.cook }

# use .call to execute the proc's method
my_proc.call