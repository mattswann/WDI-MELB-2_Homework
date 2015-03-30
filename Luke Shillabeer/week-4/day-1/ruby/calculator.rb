def get_number(input_num)
  print "Enter #{input_num} number: "
  result = gets.chomp
  return result.to_i
end

# this function has been DESTROYED by my not organising things nicely
# oh well -_-
# TODO: Make this function nice
def calc_menu(user_choice, save_number_mode, saved_number)
  case(user_choice)
  when "1"
    if save_number_mode == true
      saved_number += get_number("second")
      return saved_number
    else
      puts get_number("first") + get_number("second")
    end

  when "2"
    if save_number_mode == true
      saved_number -= get_number("second")
      return saved_number
    else
      puts get_number("first") - get_number("second")
    end

  when "3"
    if save_number_mode == true
      saved_number *= get_number("second")
      return saved_number
    else
      puts get_number("first") * get_number("second")
    end

  when "4"
    if save_number_mode == true
      saved_number /= get_number("second")
      return saved_number
    else
      puts get_number("first") / get_number("second")
    end

  when "5"
    if save_number_mode == true
      saved_number = Math.sqrt(saved_number)
      return saved_number
    else
      puts Math.sqrt(get_number("first"))
    end

  when "6"
    if save_number_mode == true
      saved_number = saved_number ** get_number("second")
      return saved_number
    else
      puts get_number("first") ** get_number("second")
    end
  end
end

save_number_mode = false
saved_number = 0
while true
  puts "If save-num enabled, 'a' will be automatically filled."
  puts "Please enter from the following list:"
  puts "1. Addition        (a + b)"
  puts "2. Subtraction     (a - b)"
  puts "3. Multiplication  (a * b)"
  puts "4. Division        (a / b)"
  puts "5. Square-root     (a)"
  puts "6. Exponents       (a ** b)"
  puts "7. Toggle num-save (#{save_number_mode})"
  puts "8. Quit the calculator"

  if save_number_mode == true
    puts "Current number is #{saved_number}. "
  end

  print "Enter your choice plz: "
  user_choice = gets.chomp


  # Toggles saving the number between actions
  if user_choice == "7"
    save_number_mode = !save_number_mode
    print "\n\n"
    next
  end

  # Exits the application
  if user_choice == "8"
    exit
  end

  if save_number_mode == true
    saved_number = calc_menu(user_choice, save_number_mode, saved_number)
  else
    calc_menu(user_choice, save_number_mode, saved_number)
  end

  print "\n\n"
end
