class CaeserCipher

  def initialize(shift)
    @shift = shift
  end

  def encode(message)
    message.downcase!
    message.split('').map { |a| 
      ((a.ord - 97 + @shift) % 26 + 97).chr
    }.join
  end

  def decode(message, shift)
    message.downcase!
    message.split('').map { |a|
      ((a.ord - 97 - @shift) % 26 + 97).chr
    }.join
  end

end

class Caesar
  def initialize(shift, alphabet = ('a'..'z').to_a.join)
    i = shift % alphabet.size #I like this
    @decrypt = alphabet
    @encrypt = alphabet[i..-1] + alphabet[0...i]
  end

  def encrypt(string)
    string.tr(@decrypt, @encrypt)
  end

  def decrypt(string)
    string.tr(@encrypt, @decrypt)
  end
end

iterations = 100_000
benchmark(Proc.new {
  iterations.times do 
    example = CaeserCipher.new(2)
    example.decode("ZRUOG: KHOOR MF")
  end
})


