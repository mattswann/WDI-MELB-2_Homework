#########  AAAAAAAAAAAAAAAAAAAA  #######################

a = ["Anil", "Erik", "Jonathan"]


# 1. How would you return the string "Erik"?
a[1]

# 2. How would you add your name to the array?
a << "Matt"




################  BBBBBBBBBBBBBBBBBBBBBB  #######################

h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}


# 1. How would you return the string "One"?
h[1]

# 2. How would you return the string "Two"?
h[:two]

# 3.How would you return the number 2?
h['two']

# 4.How would you add {3 => "Three"} to the hash?
h[3] = "Three"

# 5.How would you add {:four => 4} to the hash?
h[:four] = 4




###############  CCCCCCCCCCCCCCCCCCCCC  #######################

is = {true => "It's true!", false => "It's false"}


# 1. What is the return value of is[2 + 2 == 4]?
"It's true!"

# 2. What is the return value of is["Erik" == "Jonathan"]?
"It's false!"

# 3. What is the return value of is[9 > 10]?
"It's false!"

# 4. What is the return value of is[0]?
nil

# 5. What is the return value of is["Erik"]?
nil




###############  DDDDDDDDDDDDDDDDDDDD  #######################

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# 1. How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
users["Jonathan"][:twitter]

# 2. How would you add the number 7 to Erik's favorite numbers?
users["Jonathan"][:favorite_numbers].push 7

# 3. How would you add yourself to the users hash?
users["Matt"] = {
	:twitter => "MattCameron7",
	:favorite_numbers => [6, 3678214]
}

# 4. How would you return the array of Erik's favorite numbers?
users["Erik"][:favorite_numbers]

# 5. How would you return the smallest of Erik's favorite numbers?
users["Jonathan"][:favorite_numbers].min

# 6. How would you return an array of Anil's favorite numbers that are also even?
users["Anil"][:favorite_numbers].select{|x| x.even?}

# 7. How would you return an array of the favorite numbers common to all users?
users["Erik"][:favorite_numbers] & users["Jonathan"][:favorite_numbers] & users["Anil"][:favorite_numbers]

# 8. How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
users.map { |key, value| value[:favorite_numbers] }.flatten.uniq.sort
