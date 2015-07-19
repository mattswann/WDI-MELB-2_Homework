/*
  Author: Luke Shillabeer
  Date: 16/03/15

  https://gist.github.com/mattswann/41ac056f783c5de4cff4
*/

function singleScore(player) {
  var result = 0;
  for (var value in player.scoreCard) {
    result += player.scoreCard[value];
  }
  return result;
}

function singleScoreVSPar(player, par) {
  var result = 0;
  for (var value in player.scoreCard) {
    result += player.scoreCard[value] - par[value];
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

// need to populate tally and abovePar
var scores = {
  bob:   {
    scoreCard: {1:3, 2:2, 3:6, 4:11, 5:9, 6:2, 7:6, 8:9, 9:10},
    tally: 0,
    parCompare: 0
  },
  jimbo: {
    scoreCard: {1:5, 2:12, 3:9, 4:22, 5:13, 6:7, 7:16, 8:10, 9:11},
    tally: 0,
    parCompare: 0
  },
  fish:  {
    scoreCard: {1:2, 2:2, 3:4, 4:5, 5:4, 6:3, 7:6, 8:4, 9:1},
    tally: 0,
    parCompare: 0
  }
}

// coursePar was precalculated and hard-coded
var course = {
  par: {1:3, 2:4, 3:5, 4:5, 5:3, 6:3, 7:4, 8:3, 9:5},
  coursePar: 35
}

//
