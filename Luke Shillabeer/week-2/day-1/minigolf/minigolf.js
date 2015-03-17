/*
  Author: Luke Shillabeer
  Date: 16/03/15

  https://gist.github.com/mattswann/41ac056f783c5de4cff4
*/

function singleScore(score) {
  var result = 0;
  for (var value in score) {
    result += score[value];
  }
  return result;
}

function singleScoreVSPar(score, par) {
  var result = 0;
  for (var value in score) {
    result += score[value] - par[value];
  }
  return result;
}

function totalScores(scores) {
  var result = 0;
  for (var playerIdx in scores) {
    var playerScore = scores[playerIdx];
    for (var scoreIdx in playerScore) {
      result += playerScore[scoreIdx];
    }
  }
  return result;
}

var scores = {
  bob:   {1:3, 2:2, 3:6, 4:11, 5:9, 6:2, 7:6, 8:9, 9:10},
  jimbo: {1:5, 2:12, 3:9, 4:22, 5:13, 6:7, 7:16, 8:10, 9:11},
  fish:  {1:2, 2:2, 3:4, 4:5, 5:4, 6:3, 7:6, 8:4, 9:1}
}

// coursePar was precalculated and hard-coded
var course = {
  par: {1:3, 2:4, 3:5, 4:5, 5:3, 6:3, 7:4, 8:3, 9:5},
  coursePar: 35
}

// total score
console.log("Total: " + totalScores(scores));
console.log("Course Par: " + course.coursePar);

// player scores vs par AND Fish bet
for (var player in scores) {
  var playerScore = singleScore(scores[player]);
  scores[player + "Tally"] = singleScoreVSPar(scores[player], course.par);
  var playerScoreAbovePar = scores[player + "Tally"];
  var scoreAbovePar = scores[player + "Tally"] - course.coursePar;
  console.log(player + " scored " + playerScore +
    ". This player owes $" + playerScoreAbovePar + ".");
}

