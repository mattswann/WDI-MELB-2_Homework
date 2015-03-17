command = ''
puts 'What did you want to say to Grandma?'
say = gets.chomp

while
    if say == say.capitalize
        puts 'NO, NOT SINCE 1938, SONNY.!'
    else
    if say == say.downcase
        puts 'WHAT, HUH, SPEAK UP, SONNY!'
    end
end