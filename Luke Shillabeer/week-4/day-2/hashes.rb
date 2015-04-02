# ---------------------------------------------------------
# Exercise 2
# ---------------------------------------------------------
# from https://gist.github.com/epoch/d5940ff7ace0d2f485cb

# h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

# puts h[1]
# puts h["two".to_sym]
# puts h["two"]
# puts h[3] = "Three"
# puts h[:four] = 4

# ---------------------------------------------------------
# Exercise 3
# ---------------------------------------------------------

is = {true => "It's true!", false => "It's false"}

# ---------------------------------------------------------
# Exercise 4
# ---------------------------------------------------------

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 24, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24, 35],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 24, 85],
  },
}

common_fav_num = users.inject(users.first[1][:favorite_numbers]) do |sum, val|
  sum = sum & val[1][:favorite_numbers]
end

print "Common Fav Nums: \n", common_fav_num, "\n\n"

all_fav_nums = users.inject([]) do |sum, val|
  sum = sum + val[1][:favorite_numbers]
  puts sum
end

print "Sorted and Unique Fav Nums: \n", all_fav_nums.uniq.sort, "\n\n"
