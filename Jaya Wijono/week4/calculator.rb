def arithmetic(operator)
  print "enter the numbers you want to operate on: "
  numbers = gets.chomp.split(',').map{|i| i.to_i}
  case operator
    when '+', '-', '*', '/', '**'
      result = numbers.inject{|result, element| result.send(operator,element)}
    when 'Math.sqrt'
      result = Math.sqrt(numbers[0])
  end
  p "The result of your operation is #{result}"
end

p "Welcome to Calculator in Ruby"
while true  
  p "==========================="
  p "Calculator Menu"
  p "==========================="
  p "1. Addition (+)"
  p "2. Substraction (-)"
  p "3. Multiplication (*)"
  p "4. Division (/)"
  p "5. Exponents"
  p "6. Square roots"
  p "7. Exit"
  p "- - - - - - - - - - - - - -"
  p "Enter your choice: "
  user_input = gets().chomp().to_i
  case user_input
    when 1
      arithmetic('+')
    when 2
      arithmetic('-')
    when 3
      arithmetic('*')
    when 4
      arithmetic('/')
    when 5
      arithmetic('**')
    when 6
      arithmetic('Math.sqrt')
    when 7
      break
  end
end   

