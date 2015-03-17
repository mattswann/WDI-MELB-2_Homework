// These functions prompt the user & computer for input. 
// getInput becomes getInput("rock" or "paper or "scissors"). the prompt value is stored with return prompt()

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt(); // stores input
}

// randomPlay does the same thing by randomly figuring out a value between 0.00 and 1.00
// it stores the value in the function with return "paper" (or rock or scissors)

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

// What if the user doesn't enter in a value at all? What if the press 'esc' or 'enter' without typing in r, p or s?
// These fuctions prevent that from happening. If there is a falsy value we will force the user to getInput() again :)
// This function is now getPlayerMove(getInput("rock" / "paper" / "scissors"))

function getPlayerMove(move) {

     if (move === true) {
    }
    else {
        move = getInput();
    }
    return move;
}
// this function is now essentially getComputerMove("rock" / "paper" / "scissors")
function getComputerMove(move) {

  	if (move === true) {
  }
  else { 
    move = randomPlay();
  }          
    return move;
}

//this function is now getWinner("computer" / "player" / "tie")
function getWinner(playerMove,computerMove) {
  var winner;  
  
  if ((playerMove === "rock" && computerMove === 'paper')
      || (playerMove === 'scissors' && computerMove === 'rock')
      || (playerMove === 'paper' && computerMove === 'scissors')) {
  		winner = 'computer';          
}
	    else if ((playerMove === 'rock' && computerMove === 'scissors')
  			||	(playerMove === 'paper' && computerMove === 'rock')
			||	(playerMove === 'scissors' && computerMove === 'paper')) {
            	winner = 'player';
}
	    else if ((playerMove === 'rock' && computerMove === 'rock')
			||	(playerMove === 'scissors' && computerMove === 'scissors')
			||	(playerMove === 'paper' && computerMove === 'paper')) {
            	winner = 'tie';
}
        console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    	return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
  	var result;
        while (playerWins < 5 && computerWins < 5) {
		result = getWinner(getPlayerMove(), getComputerMove());
		// getWinner(getPlayerMove("paper"), getComputerMove("rock")
        // getWinner() === getWinner("player")

        if (result === 'player') {
          playerWins++
        }
          else if	(result === 'computer') {
          computerWins++
        }
          else {
            console.log('tie!');
        }
            

        console.log("The score is currently " + playerWins + " to " + computerWins);
    }
    
}