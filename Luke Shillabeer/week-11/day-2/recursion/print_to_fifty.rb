def print_to(number)
  if number == 0
    return nil
  end

  p number
  print_to(number - 1)
end

print_to(50)
