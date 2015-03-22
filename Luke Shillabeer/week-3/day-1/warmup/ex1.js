// Exercise 1

String.prototype.reverse = function () {
  var result = [];
  for (var i = this.length; i >= 0; i--) {
    result.push(this[i]);
  }
  return result.join("");
}

console.log("test".reverse());
