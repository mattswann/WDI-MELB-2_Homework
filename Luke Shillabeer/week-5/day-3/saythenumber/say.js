function sayNumber(number) {
  var digits = (""+number).split("");
  teen_numbers  = {10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen"};
  singles_digit = {1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine"};
  tens_digit    = {2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6:"sixty", 7: "seventy", 8: "eighty", 9: "ninty"};

  if (number < 10) {
    return singles_digit[number];
  } else if (number >= 10 && number < 20) {
    return teen_numbers[number];
  } else if (number % 10 == 0) {
    return tens_digit[parseInt(digits[0])]
  } else {
    return tens_digit[parseInt(digits[0])] + "-" + singles_digit[parseInt(digits[1])]
  }

}

console.log(sayNumber(45))
