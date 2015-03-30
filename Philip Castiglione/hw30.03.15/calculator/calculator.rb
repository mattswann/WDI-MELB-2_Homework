def add(a, b)
  a + b
end

def subtract(a, b)
  a - b
end

def multiply(a, b)
  a * b
end

def divide(a, b)
  a / b
end

def exponentiate(a, b)
  a ** b
end

def init_calc
  calc_welcome
  top_menu
end

def calc_welcome
  puts "***WELCOME TO AMAZING TERMINAL CALCULATOR***"
  puts "╔══════════════╗"
  puts "║ hello  00123 ║"
  puts "║ ------------ ║"
  puts "╟──────────────╢"
  puts "║┌─┐┌─┐┌─┐┌───┐║"
  puts "║│1││2││3││OFF│║"
  puts "║└─┘└─┘└─┘└───┘║"
  puts "║┌─┐┌─┐┌─┐┌─┬─┐║"
  puts "║│4││5││6││+│-│║"
  puts "║└─┘└─┘└─┘└─┴─┘║"
  puts "║┌─┐┌─┐┌─┐┌─┬─┐║"
  puts "║│7││8││0││*│/│║"
  puts "║└─┘└─┘└─┘└─┴─┘║"
  puts "╚══════════════╝"
end

def top_menu_welcome
  puts ""
  puts "***CALCULATOR MENU***"
  puts "Please select from the following menu:"
  puts "1) Basic Calculator"
  puts "2) Advanced Calculator"
  puts "3) Exit Calculator"
end

def top_menu_execute(choice)
  case choice
  when 1
    basic_calc
  when 2
    advanced_calc
  when 3
    exit_calc
  else
    top_menu
  end
end

def top_menu
  top_menu_choice = 0
  while !validate_number_choice(top_menu_choice)
    top_menu_welcome
    print "> "
    top_menu_choice = get_number_choice
    if top_menu_choice > 3
      top_menu_choice = 0
    end
  end

  top_menu_execute(top_menu_choice)
end

def exit_calc
  puts "╔══════════════╗"
  puts "║ :-(  GOODBYE ║"
  puts "║ ------------ ║"
  puts "╟──────────────╢"
  puts "║┌─┐┌─┐┌─┐┌───┐║"
  puts "║│X││X││X││XXX│║"
  puts "║└─┘└─┘└─┘└───┘║"
  puts "║┌─┐┌─┐┌─┐┌─┬─┐║"
  puts "║│X││X││X││X│X│║"
  puts "║└─┘└─┘└─┘└─┴─┘║"
  puts "║┌─┐┌─┐┌─┐┌─┬─┐║"
  puts "║│X││X││X││X│X│║"
  puts "║└─┘└─┘└─┘└─┴─┘║"
  puts "╚══════════════╝"
  exit(0)
end

def get_number_choice
  gets.chomp.to_f
end

def validate_number_choice(number)
  number > 0
end

def basic_welcome
  puts ""
  puts "***BASIC CALCULATOR***"
end

def basic_operate_welcome
  puts "Select from the following menu:"
  puts "1) '+' Addition"
  puts "2) '-' Subtration"
  puts "3) '*' Multiplication"
  puts "4) '/' Division"
end

def basic_operate_execute(num1, choice, num2)
  case choice
  when 1
    add(num1, num2)
  when 2
    subtract(num1, num2)
  when 3
    multiply(num1, num2)
  when 4
    divide(num1, num2)
  else
    "Basic Calculator cannot compute :-/"
  end
end

def basic_calc
  basic_welcome
  
  first_num = 0
  while !validate_number_choice(first_num)
    print "Enter the first (positive) number for the calculator: "
    first_num = get_number_choice
  end
  
  basic_operator_choice = 0
  while !validate_number_choice(basic_operator_choice)
    basic_operate_welcome
    print "> "
    basic_operator_choice = get_number_choice
    if basic_operator_choice > 4
      basic_operator_choice = 0
    end
  end

  second_num = 0
  while !validate_number_choice(second_num)
    print "Enter the second (positive) number for the calculator: "
    second_num = get_number_choice
  end

  result = basic_operate_execute(first_num, basic_operator_choice, second_num)
  puts "The result is #{ result }"
  top_menu
end

def advanced_welcome
  puts ""
  puts "***ADVANCED CALCULATOR***"
end

def advanced_operate_welcome
  puts "Select from the following menu:"
  puts "1) '+' Addition"
  puts "2) '-' Subtration"
  puts "3) '*' Multiplication"
  puts "4) '/' Division"
  puts "5) '^' Exponentiation"
  puts "6) Execute formula"
end

def parse_operator(choice)
  case choice
  when 1
    '+'
  when 2
    '-'
  when 3
    '*'
  when 4
    '/'
  when 5
    '^'
  when 6
    ''
  else
    "?"
  end
end

def parse_advanced_input(nums_array, operators_array)
  operators_array.pop

  # really should put this crap in a function but I'd have to figure
  # out how to parse in a function or whatever.. will get to that
  while operators_array.include?(5)
    idx = operators_array.index(5)
    num1 = nums_array.delete_at(idx)
    num2 = nums_array.delete_at(idx)
    nums_array.insert(idx, exponentiate(num1, num2))
    operators_array.delete_at(idx)
  end

  while operators_array.include?(4)
    idx = operators_array.index(4)
    num1 = nums_array.delete_at(idx)
    num2 = nums_array.delete_at(idx)
    nums_array.insert(idx, divide(num1, num2))
    operators_array.delete_at(idx)
  end

  while operators_array.include?(3)
    idx = operators_array.index(3)
    num1 = nums_array.delete_at(idx)
    num2 = nums_array.delete_at(idx)
    nums_array.insert(idx, multiply(num1, num2))
    operators_array.delete_at(idx)
  end

  while operators_array.include?(2)
    idx = operators_array.index(2)
    num1 = nums_array.delete_at(idx)
    num2 = nums_array.delete_at(idx)
    nums_array.insert(idx, subtract(num1, num2))
    operators_array.delete_at(idx)
  end

  while operators_array.include?(1)
    idx = operators_array.index(1)
    num1 = nums_array.delete_at(idx)
    num2 = nums_array.delete_at(idx)
    nums_array.insert(idx, add(num1, num2))
    operators_array.delete_at(idx)
  end

  nums_array[0]
end

def advanced_calc
  advanced_welcome
  advanced_formula = ""
  formula_nums = []
  formula_operators = []

  formula_complete = false

  while !formula_complete
    puts "The formula so far: #{advanced_formula}" unless advanced_formula == ""
    
    nth_num = 0
    while !validate_number_choice(nth_num)
      print "Enter a (positive) number for the calculator: "
      nth_num = get_number_choice
    end
    advanced_formula += nth_num.to_s
    formula_nums.push(nth_num)
    
    advanced_operator_choice = 0
    while !validate_number_choice(advanced_operator_choice)
      advanced_operate_welcome
      print "> "
      advanced_operator_choice = get_number_choice
      if advanced_operator_choice > 6
        advanced_operator_choice = 0
      elsif  advanced_operator_choice == 6
        formula_complete = true
      end
    end
    advanced_formula += parse_operator(advanced_operator_choice)
    formula_operators.push(advanced_operator_choice)

  end

  puts "The complete formula is #{advanced_formula}"
  result = parse_advanced_input(formula_nums, formula_operators)
  puts "The result is #{ result }"
  top_menu
end

init_calc
