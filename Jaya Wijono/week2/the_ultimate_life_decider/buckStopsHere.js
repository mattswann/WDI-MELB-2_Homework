var movePixels = 2;
var delayMs = 20;
var img = document.getElementsByClassName('image2')[0];
var goRight = true;
var opinion = ["No", "Not today", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

img.addEventListener('click',getSecondOpinion);
startDanceWalk();

function getSecondOpinion(){
  var getOpinionIndex = Math.round(Math.random()*opinion.length) - 1;
  updateConsole(opinion[getOpinionIndex]);
}

function danceWalk() {
  var currentLeft = parseInt(img.style.marginLeft);
  if(goRight){
    img.style.marginLeft = (currentLeft + movePixels) + 'px';
    if (currentLeft > 200) {
      goRight = false;
    }
  }else{
    img.style.marginLeft = (currentLeft - movePixels) + 'px';
    if(currentLeft === 0){
      goRight = true;
    }
  }
}

function startDanceWalk() {
    danceTimer = setInterval(danceWalk, delayMs);
    img.style.marginLeft = 0;
}

