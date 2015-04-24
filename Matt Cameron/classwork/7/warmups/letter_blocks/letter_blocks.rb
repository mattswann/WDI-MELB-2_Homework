class Block

	def initialize
		@blocks = [
			['B','O'],
			['X','K'],
			['D','Q'],
			['C','P'],
			['N','A'],
			['G','T'],
			['R','E'],
			['T','G'],
			['Q','D'],
			['F','S'],
			['J','W'],
			['H','U'],
			['V','I'],
			['A','N'],
			['E','R'],
			['F','S'],
			['L','Y'],
			['P','C'],
			['Z','M']
		]
	end

	def can_make_word(word)
		@used_blocks = []
		letters = word.split('')
		count = 0
		letters.each do |letter|
		 	count += 1 if check_each_block(letter)
		end

		return count == word.length ? true : false

	end

	def check_each_block(letter)
		@blocks.each do |block|

			if block.include?(letter)
				next if @used_blocks.include?(block)
				@used_blocks << block
				return true
			end
		end
		return false
	end

end