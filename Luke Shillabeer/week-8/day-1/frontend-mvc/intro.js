
// immediately invoked function expression
// iife (iffy!)
(function(){
  // function declaration
  function doSomething() {
    console.log("function dec")
  }

  // function expression
  var doSomething = function() {
    console.log("function exp")
  }

  console.log("it broke :(");
  doSomething();
})();
