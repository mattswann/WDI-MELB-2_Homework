require 'pry'

days_of_week    = "Monday Tuesday Wednesday Thursday Friday".split(" ")
days_of_weekend = "Saturday Sunday".split(" ")
days_of_week2   = %w{ Monday Tuesday Wednesday Thursday Friday}

# ---------------------------------------------------------
# Exercise 1
# ---------------------------------------------------------
# from https://gist.github.com/epoch/d5940ff7ace0d2f485cb

a = ["Anil", "Erik", "Jonathan"]

# find/return the string "Erik" from the array
puts a[1]
puts a[a.index("Erik")] # lol

# Add name to the array
a.push("Luke")
print a
