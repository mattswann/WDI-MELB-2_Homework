function range(x, y){
  var result = [];
  for (x; x < y; x++)
    result.push(x);
  return result;
}

function fizzBuzzSingleNum(num) {
  if (num % 15 === 0)
    return "FizzBuzz";
  else if (num % 5 === 0)
    return "Buzz";
  else if (num % 3 === 0)
    return "Fizz";
  else
    return num;
}

range(1, 101).forEach(function(num){
  console.log(fizzBuzzSingleNum(num));
});
