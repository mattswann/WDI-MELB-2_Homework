linewidth = 40
str = '--> text <--'
puts str.ljust linewidth
puts str.center linewidth
puts str.rjust linewidth
puts str.ljust(linewidth/2) + str.rjust(linewidth/2)