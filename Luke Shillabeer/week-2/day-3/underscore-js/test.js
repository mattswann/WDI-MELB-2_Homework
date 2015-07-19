var collection = {
  each: function(arr, fn) {
    for (var i in arr) {
      fn(arr[i]);
    }
  }
}

var array    = [1,2,3]
var testFunc = function(a){
  console.log(a);
};

collection.each(array, testFunc)





























for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
