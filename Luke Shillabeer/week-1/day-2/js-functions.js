/*
  Work built following instructions at -
  https://gist.github.com/epoch/6c2e30c4d2645249efce
*/

// --------------------------------------------------------
// Fortune Teller exercise                                |
// --------------------------------------------------------

function fortuneTeller(numChildren, partnerName, geoLocation, jobTitle) {
  return "You will be a " + jobTitle + " in " +
         geoLocation + ", and married to " + partnerName +
         " with " + numChildren + " kids.";
}

function testFortuneTeller() {
  console.log(fortuneTeller("four", "Mary", "Melbourne", "Circus Clown"));
  console.log(fortuneTeller("seventeen", "Bob", "San Francisco", "Googler"));
  console.log(fortuneTeller("no", "nobody", "the Siberian wastelands", "Hermit"));
}

// --------------------------------------------------------
// Age calculator exercise                                |
// --------------------------------------------------------

function ageCalc(birthYear, curYear) {
  var curYear = curYear || new Date().getFullYear();
  var ageDiff = curYear - birthYear;

  if (curYear - birthYear < 0)
    return "Negative age is not possible"
  else if (curYear - birthYear === 0)
    return "You are 0"
  else
    return "You are either " + (ageDiff - 1) + " or " + ageDiff;
}

function testAgeCalc() {
  console.log(ageCalc(1987, 2015));
  console.log(ageCalc(1987, 1987));
  console.log(ageCalc(1987, 1843))
  console.log(ageCalc(1987));
}

// --------------------------------------------------------
// Lifetime Supply                                        |
// --------------------------------------------------------

function calculateSupply(age, perDayAmount) {
  var MAXAGE = 100; // assumes maximum age is 100 years old
  var oneYearAmount = 365 * perDayAmount;

  // check and correct for negative ages (sets to zero if negative)
  if (age >= 0)
    var yearsRemaining = MAXAGE - age;
  else
    var yearsRemaining = MAXAGE - 0;

  return Math.round(oneYearAmount * yearsRemaining);
}

function testCalculateSupply() {
  console.log(calculateSupply(20, 2.3));
  console.log(calculateSupply(45, 20));
  console.log(calculateSupply(-20, 1));
}


// --------------------------------------------------------
// The Geometrizer                                        |
// --------------------------------------------------------

function calcCircleCircumfrence(radius) {
  var circumfrence = 2 * Math.PI * radius;
  return "The circumfrence is " + circumfrence;
}

function calcCicleArea(radius) {
  var area = Math.PI * (Math.pow(radius, 2));
  return "The area is " + area;
}

function testCircleCalcs(r) {
  console.log(calcCircleCircumfrence(r));
  console.log(calcCicleArea(r));
}

// --------------------------------------------------------
// Temperature Converter                                  |
// --------------------------------------------------------

function celsiusToFahrenheit(tempInCel) {
  var tempInFar = (tempInCel * (9/5)) + 32;
  return tempInCel + "°C is " + tempInFar +"°F."
}

function fahrenheitToCelsius(tempInFar) {
  var tempInCel = (tempInFar - 32) * (5/9);
  return tempInFar + "°F is " + tempInCel +"°C."
}

function testTempFunctions() {
  console.log(celsiusToFahrenheit(34));
  console.log(fahrenheitToCelsius(110));

  var temp = celsiusToFahrenheit(32);
  console.log(temp);

  // get the temperature value out of the returned string in temp
  temp = temp.split(" ");
  temp = parseFloat(temp[temp.length - 1].slice(0, 4));

  console.log(fahrenheitToCelsius(temp));

}

// --------------------------------------------------------
// Tests of functions                                     |
// --------------------------------------------------------

// testFortuneTeller()
// testAgeCalc()
// testCalculateSupply()
// testCircleCalcs(5)
// testTempFunctions()
