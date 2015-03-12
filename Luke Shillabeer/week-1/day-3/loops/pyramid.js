function transpose(a) {
  /*
    matrix transpose function, found at;
    http://stackoverflow.com/a/13241545/2355035
  */

  return Object.keys(a[0]).map(
    function (c) { return a.map(function (r) { return r[c]; }); }
  );
}

function buildRow(inputChar, height, currentRow) {
  /*
    Builds a single pyramid row by;
    - creating an array of the correct size (based on pyramid height)
    - determine the padding and current number of characters
    - populate by starting at the padding location and modifying by iterating
      through the array for the number of characters

    args:
    - inputChar: string, - character to use in pyramid.
    - height: num        - height of the pyramid.
    - currentRow: num    - current row of the pyramid being built.

    return:
    - a single-dimensional array containing the row.
  */

  var charCount = currentRow * 2 + 1;
  var maxWidth  = height * 2 + 1;
  var padding   = height - currentRow;

  var result = Array
    .apply(null, new Array(maxWidth))
    .map(String.prototype.valueOf," ");

  for (var i = padding; i < padding + charCount; i++) {
    result[i] = inputChar;
  }
  return result;
}


function pyramidBuilder() {
/*
  Builds a pyramid by;
  - getting user input for character, height and invert,
  - iterate to build pyramid rows, storing in an array,
  - invert array if user has requested,
  - join each row of the array and print result
*/

  var pyramidChar =      prompt("What character make Pyramid? ^_^");
  var pyramidHeight =    prompt("How tall pyramid?");
  var pyramidDirection = prompt("Which direction should the base face? (up/down/left/right)");
  var pyramidArray = [];

  for (var i = 0; i <= pyramidHeight; i++){
    pyramidArray.push(buildRow(pyramidChar, pyramidHeight, i));
  }

  if (pyramidDirection === "up") {
    pyramidArray.reverse();
  } else if (pyramidDirection === "right") {
    pyramidArray = transpose(pyramidArray);
  } else if (pyramidDirection === "left") {
    pyramidArray.reverse();
    pyramidArray = transpose(pyramidArray);
  }

  pyramidArray.forEach(function(row){
    console.log(row.join(""));
  });
}

pyramidBuilder();
