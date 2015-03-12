function getChar() {
  // gets the character from the user and validates input
  var character = prompt("Enter a single character:");
  while (character.length !== 1) {
    character = prompt("Enter a single character:");
  }
  return character;
}

function getRows() {
  // gets the rows from the user and validates input
  var rows = prompt("Enter the number of rows desired:");
  rows = parseInt(rows, 10);
  while (isNaN(rows)||rows<2) {
    rows = prompt("Enter the number of rows desired (as a number with minimum 2, eg. 5):");
    rows = parseInt(rows, 10);
  }
  return rows;
}

function getDirection() {
  // gets the direction from the user and validates input
  var direction = prompt("do you want it up or down?")
  while (!(direction === "up" || direction === "down")) {
    direction = prompt("do you want it up or down? (Please enter 'up' or 'down')");
  }
  return direction;
}

function printPyramid(character, rows, direction) {
  var whitespaceChars = rows - 1;
  var numChars = 2 - (rows % 2);
  var finalArray = [];
  var blank = " ";

  function getRowOutput() {
    var rowOutput = [];
    rowOutput.push(blank.repeat(whitespaceChars));
    rowOutput.push(character.repeat(numChars));
    rowOutput.push(blank.repeat(whitespaceChars));
    return rowOutput.join('');
  }

  for (a=0;a<rows;a++){
    finalArray.push(getRowOutput());
    whitespaceChars --;
    numChars += 2;
  }
  
  if (direction == "down") {
    finalArray.reverse();
  }

  for (i in finalArray) {
    console.log(finalArray[i]);
  }
}

printPyramid(getChar(), getRows(), getDirection());