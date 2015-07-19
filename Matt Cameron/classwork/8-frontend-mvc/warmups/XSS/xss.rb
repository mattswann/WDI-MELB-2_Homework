puts "Enter something, buddy"
input = gets.chomp

input.gsub!('&', '&amp;')
input.gsub!('<', '&lt;')
input.gsub!('>', '&gt;')
input.gsub!('"', '&quot;')
input.gsub!("'", '&#x27;')
input.gsub!('/', '&#x2F;')

puts input