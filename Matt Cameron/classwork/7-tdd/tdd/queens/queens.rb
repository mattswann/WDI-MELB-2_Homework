class Queens

	def initialize(positions = {white: [0, 3], black: [7, 3]})
		raise ArgumentError.new("Two pieces cannot occupy the same space") if positions[:white] == positions[:black]

		@white_queen = positions[:white]
		@black_queen = positions[:black]
	end

	def white
		@white_queen
	end

	def black
		@black_queen
	end

	def to_s
		board = [
			['O','O','O','O','O','O','O','O'],
			['O','O','O','O','O','O','O','O'],
			['O','O','O','O','O','O','O','O'],
			['O','O','O','O','O','O','O','O'],
			['O','O','O','O','O','O','O','O'],
			['O','O','O','O','O','O','O','O'],
			['O','O','O','O','O','O','O','O'],
			['O','O','O','O','O','O','O','O']
		]

		#set white queen's position
		board[@white_queen[0]][@white_queen[1]] = 'W'

		#set black queen's position
		board[@black_queen[0]][@black_queen[1]] = 'B'

		# display board
		b = board.map { |row| row.join(' ') }
		b.join("\n")
	end

	def attack?
		# check same row
		return true if @white_queen[0] == @black_queen[0]

		# check same column
		return true if @white_queen[1] == @black_queen[1]

		# check diagonals
		return true if (@white_queen[0] - @black_queen[0]).abs == (@white_queen[1] - @black_queen[1]).abs
		return false
	end

end




