var movePixels = 10;
var delayMs = 50;
var catTimer1 = null;
var catTimer2 = null;
var startBtn = document.getElementById('start-button');
var speedBtn = document.getElementById('speed-button');
var stopBtn = document.getElementById('stop-button');
var shorterDelayMs = 20;
var catStartWalk = false;
var catFastWalk = false;
var lastFunction ='';
var firework= document.getElementById('firework');
var dancing_cats = document.getElementById('dancing_cats');
var img = document.getElementsByTagName('img')[0];

startBtn.addEventListener('click',startCatWalk);
speedBtn.addEventListener('click',speedCatWalk)
stopBtn.addEventListener('click',stopCatWalk);

function catWalk() {
  var currentLeft = parseInt(img.style.left);
  var direction = 'right';
  if(img.className === ''){
    img.className = '';
    img.style.left = (currentLeft + movePixels) + 'px';
    if(currentLeft === (Math.round((window.innerWidth - img.width)/10/2)*10)){
      dance();
    } else if (currentLeft > (window.innerWidth - img.width)) {
      img.className = "reverse";
    }
  }else{
    img.style.left = (currentLeft - movePixels) + 'px';
    if(currentLeft === (Math.round((window.innerWidth - img.width)/10/2)*10)){
      dance();
    } else if(currentLeft === 0){
      img.className = "";
    }
  }
}

function dance(){
  if(catFastWalk){
    lastFunction = 'speedCatWalk';
  }else{
    lastFunction = 'startCatWalk';
  }
  stopCatWalk();
  firework.style.display = 'block';
  dancing_cats.style.display = 'block';
  img.style.display = 'none';
  countDown();
}

function countDown(){
  var count = 5;
  var timerId = setInterval(function(){
    if (count < 1){
      clearInterval(timerId);
      img.style.display = 'inline';
      firework.style.display = 'none';
      dancing_cats.style.display = 'none';
      if(lastFunction === 'speedCatWalk'){
        startCatWalk();
        speedCatWalk();
      }else{
        startCatWalk();
      }
    }
    count -= 1;
  },1000);
}

function startCatWalk() {
  if(!catStartWalk){
    catStartWalk = true;
    catTimer1 = window.setInterval(catWalk, delayMs);
  }
}

function speedCatWalk(){
  if((!catFastWalk) && catStartWalk){
    catFastWalk = true;
    catTimer2 = window.setInterval(catWalk, shorterDelayMs);
  }
}

function stopCatWalk(){
  catStartWalk = false;
  catFastWalk = false;
  window.clearInterval(catTimer1);
  window.clearInterval(catTimer2);
}


