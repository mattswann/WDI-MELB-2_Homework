function alternating_sum(arr) {
  var result = 0;
  return arr.reduce(function(tally, val, idx){
   return (idx % 2 === 0) ? tally += val : tally -= val;
  });
}

var test_arr = [1,2,3,4,5]
console.log(alternating_sum(test_arr));
