class Queens
  attr_reader :white, :black
  attr_accessor :board

  def initialize positions = {}
    positions[:white] ||= [0,3]
    positions[:black] ||= [7,3]
    
    raise ArgumentError if positions[:white] == positions[:black]

    @board = generate_board
    @white = positions[:white]
    @black = positions[:black]
    populate_board(@white, @black)
  end

  def generate_board
    board = @chessboard = Array.new(8) { Array.new(8, "O") }
  end

  def populate_board white, black
    @board[white[0]][white[1]] = "W"
    @board[black[0]][black[1]] = "B"
  end

  def attack?
    same_row? || same_col? || same_diag?
  end

  def same_col?
    @white[0] == @black[0]
  end

  def same_row?
    @white[1] == @black[1]
  end

  def same_diag?
    (@white[0] - @white [1]).abs == (@black[0] - @black [1]).abs
  end

  def to_s
    result = ""
    @board.each do |row|
      result += row.join(" ") + "\n"
    end
    result.chomp
  end

  private :generate_board, :populate_board, :same_row?, :same_col?, :same_diag?

end

# puts Queens.new().attack?
