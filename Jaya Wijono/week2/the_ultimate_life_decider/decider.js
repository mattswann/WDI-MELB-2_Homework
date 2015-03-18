var headCount = 0;
var tailCount = 0;
var flipButton = document.getElementById('flip-button');
var coinImage = document.getElementsByClassName('coin_image')[0];
var numCoins = document.getElementById('numCoins');
var numWins = document.getElementById('numWins');
var console1 =  document.getElementById("console1");
var console2 =  document.getElementById("console2");
var console3 =  document.getElementById("console3");
var console4 =  document.getElementById("console4");
var console5 =  document.getElementById("console5");
var timerId = null;
var coins = {};

flipButton.addEventListener('click', flipAllCoins);

function flipAllCoins(){
  if((+numCoins.value) < (+numWins.value)){
    updateConsole("You need more coins to flip to make decision!");
  } else if ((+numCoins.value) === 0 || (+numWins.value) === 0){
    updateConsole("You can't leave me guessing with your inputs!");
  }else {
    addCoins();
    animateFlipping()
  }
}

function addCoins(){
  for(var i=0; i<(+numCoins.value);i++){
    coins['coin '+ (i+1)] = {};
    coins['coin '+ (i+1)]['coin id'] = (i+1);
    coins['coin '+ (i+1)]['flip result'] = coinFlip();
  }
}

function coinFlip(){
  var randomCoin = Math.round(Math.random());
  if(randomCoin === 0){
    headCount += 1;
    return "head";
  } else{
    tailCount += 1;
    return "tails";
  }
}

function outputWinner(coins){
  var list = '';
  for( var keys in coins){
    if(coins[keys]['coin id'] !== (+numCoins.value)){
      list = list + coins[keys]['flip result'] + ', ';
    } else {
      list = list + coins[keys]['flip result'] + '.';
    }
    
  }
  var result = "The result of the coin flips are (#heads: "+headCount+" #tails: "+tailCount+" ) = " + list;

  if(headCount === tailCount){
    updateConsole(result + " --- No winner, flip the coins again!");
  }else if(headCount >= (+numWins.value) && headCount > tailCount){
    updateConsole(result + " --- Head wins");
  } else if (tailCount >= (+numWins.value) && tailCount > headCount) {
    updateConsole(result + " --- Tail wins");
  } else{
    updateConsole(result + " --- No winner, flip the coins again!");
  }
}

function resetCoins(){
  headCount = 0;
  tailCount = 0;
  numCoins.value = '';
  numWins.value = '';
}

function animateFlipping(){
  if(timerId === null){
      coinImage.setAttribute('src','coin-flip.gif');
      animateCountDown();
  }
}

function animateCountDown(){
  var count = 10;
  timerId = setInterval(function(){
    if (count < 1){
      clearInterval(timerId);
      coinImage.setAttribute('src','initial_coin_flip.png');
      timerId = null;
      outputWinner(coins);
      resetCoins()
    }
    count -= 1;
  },1000);
}

function updateConsole(newMessage) {
  console5.innerHTML = console4.innerHTML;
  console4innerHTML = console3.innerHTML;
  console3.innerHTML = console2.innerHTML;
  console2.innerHTML = console1.innerHTML;
  console1.innerHTML = newMessage;
}