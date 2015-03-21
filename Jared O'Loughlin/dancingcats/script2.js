var movePixels = 10;
var delayMs = 50;
var catTimer = null;

 
function catWalk() {
    
    var img = document.getElementsByTagName('img')[0];
    var currentLeft = parseInt(img.style.left);
    var currentRight = parseInt(img.style.right);
    if(img.className == ""){
        //console.log('travelling left to right');
        img.style.left = (currentLeft + movePixels) + 'px';

        if (currentLeft > (window.innerWidth-img.width)) {
            
            //console.log('right side reached');
     
            img.setAttribute('class', 'flip');
            
            console.log("travelling back");
        }

    }
    else {
        img.style.left = (currentLeft - movePixels) + 'px';
        if ( currentLeft === 0) {
            //debugger
            img.className = "";
        }
    }


    //console.log(currentLeft);

}


function startCatWalk() {
    //if(catTimer === null)
    catTimer = window.setInterval(catWalk, delayMs);
}


function fasterCat() {
    catTimer = window.setInterval(catWalk, 20);
}

function stopCatWalk() {
    clearInterval(catTimer)
}

var startBtn = document.getElementById('start-button');
var stopBtn = document.getElementById('stop-button');
var speedBtn = document.getElementById('speed-button');


startBtn.addEventListener('click', startCatWalk);
stopBtn.addEventListener('click', stopCatWalk);
speedBtn.addEventListener('click', fasterCat);