def factorial(num)
  # base case
  return 1 if num == 0 

  # recurseeeeee it downnnnnn
  return num * factorial(num - 1)
end

p factorial(5)
