class Coffee
	attr_accessor :type, :sugars, :size, :name
	attr_reader :time, :waiting_time



	def initialize(type, sugars, size, name)
		@type = type
		@sugars = sugars
		@size = size
		@name = misspelling(name.downcase)
		@time = Time.now
		@waiting_time = set_waiting_time
	end

	def to_s
		"#{@name}'s #{@type}, #{@size}, #{@sugars}."
	end

	def misspelling(word)
		word.gsub!('a', 'ah')
		word.gsub!('e', 'ee')
		word.gsub!('i', 'y')
		word.gsub!('o', 'owe')
		word.gsub!('u', 'you')
		word.gsub!('k', 'c')
		word.gsub!('j', 'g')
		word.gsub!('l', 'll')
		word.capitalize
	end

	def set_waiting_time
		(120..300).to_a.sample
	end

	def ready?
		if Time.now - @time <= 0
			return "#{@name}, your #{@type} is ready"
		else
			return "It's not ready yet #{name}. We're busy alright."
		end
	end


end