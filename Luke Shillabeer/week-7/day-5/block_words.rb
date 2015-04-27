class BlockWords

  def initialize(blocks)
    @blocks = Array.new(blocks)
    @consumed_blocks = Array.new()
  end

  def can_make_word?(word)
    word.split('').each do |letter|
      block = find_block(letter)
      @consumed_blocks << block if !block.nil?
    end

    # determine whether the number of blocks consumed is the same length
    # as the number of characters in the word (all matched, can make word)
    @consumed_blocks.length == word.split('').length
  end

  def find_block(letter)
    @blocks.each_with_index do |block, idx|
      if block.include? letter
        @blocks.delete_at(idx)
        return block
      end
    end
    
    # only gets here if no block was found and consumed in the @blocks list
    replace_block(letter)
  end

  def replace_block(letter)
    @consumed_blocks.each_with_index do |block, idx|
      if block.include? letter
        comp_block = block.select {|x| x if x != letter}
        @blocks.each_with_index do |inner_block, inner_idx|
          if inner_block.include? comp_block[0]
            @blocks.delete_at(idx)
            return inner_block
          end
        end
      end
    end
    return nil
  end

  private :find_block
end
