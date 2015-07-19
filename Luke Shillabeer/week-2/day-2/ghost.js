/*
  COLOR GHOST
  Create a JavaScript object named Ghost that includes a function named "color".
  When I call this function it should return a random color.

  EXAMPLE:
  ghost.color() //=> "white" or "yellow" or "purple" or "red"
*/

var ghost = {
  colorChoices: ["Red", "Green", "Blue", "Yellow", "Orange", "Purple"],
  color: function() {
    var colArr = this.colorChoices;
    return colArr[Math.floor(Math.random() * colArr.length)];
  }
}

console.log(ghost.color());
