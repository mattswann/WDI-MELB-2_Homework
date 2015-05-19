def sum_array(arr)
  # base case
  return arr[0] if arr.length == 1
  
  mid = (arr.length / 2).floor
  first = sum_array(arr[0...mid])
  last  = sum_array(arr[mid...arr.length])

  return first + last

end

p sum_array([1,2,3,4,5,6])
